import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save, ArrowLeft, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/utils/firebaseAuth';
import AdminLayout from '@/components/AdminLayout';
import TipTapEditor from '@/components/TipTapEditor';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/integrations/firebase/client';
import { useFirebaseBlogPosts } from '@/hooks/useFirebaseBlogPosts';
import Notification from '@/components/ui/Notification';
import { useNotification } from '@/components/ui/NotificationContext';
import { Helmet } from 'react-helmet';

const blogPostSchema = z.object({
  title: z.string().min(5, 'Tytuł musi mieć co najmniej 5 znaków'),
  slug: z.string().min(5, 'Slug musi mieć co najmniej 5 znaków').regex(/^[a-z0-9-]+$/, 'Slug może zawierać tylko małe litery, cyfry i myślniki'),
  summary: z.string().min(10, 'Zajawka musi mieć co najmniej 10 znaków'),
  content: z.string(),
  categories: z.string().min(2, 'Kategorie są wymagane'),
  tags: z.string().min(2, 'Tagi są wymagane')
});

type FormValues = z.infer<typeof blogPostSchema>;

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ż/g, 'z')
    .replace(/ź/g, 'z')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function stripHtml(html: string) {
  // Usuwa tagi HTML, ale zostawia spacje i znaki nowej linii
  return html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
}

const BlogPostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createPost, updatePost } = useFirebaseBlogPosts();
  const [isLoading, setIsLoading] = useState(false);
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [existingPost, setExistingPost] = useState<any>(null);
  const isEditing = !!id;
  const [editorContent, setEditorContent] = useState('');
  const { showNotification } = useNotification();
  const [isDirty, setIsDirty] = useState(false);

  // Fetch post from database if editing
  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const postRef = doc(db, 'blog_posts', id);
          const postSnap = await getDoc(postRef);
          
          if (postSnap.exists()) {
            const data = postSnap.data();
            console.log("Fetched post data:", data);
            setExistingPost({ id: postSnap.id, ...data });
          } else {
            throw new Error("Post not found");
          }
        } catch (error) {
          console.error("Error fetching post:", error);
          showNotification({ 
            sender: 'IDZTECH', 
            message: 'Nie udało się załadować posta'
          });
        }
      }
    };
    
    fetchPost();
  }, [id]);

  // Set up form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: '',
      slug: '',
      summary: '',
      content: '',
      categories: '',
      tags: ''
    },
    values: existingPost ? {
      title: existingPost.title || '',
      slug: existingPost.slug || '',
      summary: existingPost.summary || '',
      content: existingPost.content || '',
      categories: Array.isArray(existingPost.categories)
        ? existingPost.categories.join(', ')
        : (typeof existingPost.categories === 'string' ? existingPost.categories : ''),
      tags: Array.isArray(existingPost.tags)
        ? existingPost.tags.join(', ')
        : (typeof existingPost.tags === 'string' ? existingPost.tags : ''),
    } : undefined
  });

  // Initialize image preview if we're editing a post with an existing image
  useEffect(() => {
    if (existingPost?.featured_image) {
      setImagePreview(existingPost.featured_image);
    }
  }, [existingPost]);

  useEffect(() => {
    if (existingPost?.content) {
      setEditorContent(existingPost.content);
    }
  }, [existingPost]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFeaturedImage(file);
      
      // Create a preview URL for the image
      const fileUrl = URL.createObjectURL(file);
      setImagePreview(fileUrl);
    }
  };

  const onSubmit = async (values: FormValues) => {
    if (!user) {
      showNotification({ 
        sender: 'IDZTECH', 
        message: 'Musisz być zalogowany, aby dodać lub edytować post.'
      });
      return;
    }

    setIsLoading(true);
    try {
      console.log("Form values:", values);
      
      let imageUrl = existingPost?.featured_image || '';
      
      if (featuredImage) {
        const reader = new FileReader();
        imageUrl = await new Promise<string>((resolve) => {
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(featuredImage);
        });
      }

      const postData = {
        title: values.title,
        slug: values.slug,
        summary: values.summary,
        excerpt: values.summary,
        content: editorContent,
        featured_image: imageUrl,
        author_id: user.uid,
        categories: (values.categories || '').split(',').map(cat => cat.trim()),
        tags: (values.tags || '').split(',').map(tag => tag.trim()),
      };

      console.log("Post data to be submitted:", postData);

      if (isEditing && id) {
        console.log("Updating post with ID:", id);
        await updatePost({
          id,
          ...postData,
          published: existingPost?.published || true,
          published_at: existingPost?.published_at || new Date().toISOString(),
          created_at: existingPost?.created_at || new Date().toISOString(),
        });
        
        showNotification({ 
          sender: 'IDZTECH', 
          message: 'Post został zaktualizowany.'
        });
      } else {
        console.log("Creating new post");
        await createPost({
          ...postData,
          published: true,
          published_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
        });
        
        showNotification({ 
          sender: 'IDZTECH', 
          message: 'Nowy post został dodany do bloga.'
        });
      }
      
      navigate('/admin');
    } catch (error) {
      console.error("Error saving post:", error);
      showNotification({ 
        sender: 'IDZTECH', 
        message: 'Wystąpił problem podczas zapisywania posta.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle slug generation from title
  const generateSlug = () => {
    const title = form.getValues('title');
    if (title) {
      const slug = slugify(title);
      form.setValue('slug', slug);
    }
  };

  // Funkcja do zapisywania draftu
  const saveDraft = async () => {
    if (!user) return;
    const values = form.getValues();
    const postData = {
      title: values.title,
      slug: values.slug,
      summary: values.summary,
      excerpt: values.summary,
      content: editorContent,
      featured_image: imagePreview || '',
      author_id: user.uid,
      categories: (values.categories || '').split(',').map(cat => cat.trim()),
      tags: (values.tags || '').split(',').map(tag => tag.trim()),
      published: false,
      published_at: null,
      created_at: existingPost?.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    if (isEditing && id) {
      await updatePost({ id, ...postData });
    } else {
      // Tworzymy nowy szkic w Firestore
      await createPost(postData);
    }
  };

  // Ustaw isDirty na true przy każdej zmianie w formularzu lub edytorze
  useEffect(() => {
    const subscription = form.watch(() => setIsDirty(true));
    return () => subscription.unsubscribe();
  }, [form]);
  useEffect(() => {
    setIsDirty(true);
  }, [editorContent]);

  // Zapisz draft przy opuszczaniu strony
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        saveDraft();
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty, editorContent]);

  // Zapisz draft przy przejściu do panelu admina
  const handleGoToAdmin = async () => {
    if (isDirty) {
      await saveDraft();
    }
    navigate('/admin');
  };

// 1. Zdefiniuj interfejs dla posta
interface BlogPost {
  id: string;
  author_id: string;
  published: boolean;
  content: string;
  updated_at: any; // Lepsze byłoby użycie firebase.firestore.Timestamp
  [key: string]: any; // Dla pozostałych pól
}

// 2. Poprawiona funkcja fetchDraft
const fetchDraft = async () => {
  try {
    const postsCollection = collection(db, 'blog_posts');
    const postsSnapshot = await getDocs(postsCollection);
    const drafts = postsSnapshot.docs
      .map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as BlogPost))
      .filter(post => 
        post.author_id === user?.uid && 
        post.published === false
      );
      
    if (drafts.length > 0) {
      const latestDraft = drafts.sort((a, b) => 
        (b.updated_at?.toDate?.().getTime() || 0) - 
        (a.updated_at?.toDate?.().getTime() || 0)
      )[0];
      
      setExistingPost(latestDraft);
      setEditorContent(latestDraft.content || '');
    }
  } catch (error) {
    console.error('Błąd podczas ładowania szkicu:', error);
    showNotification({ 
      sender: 'IDZTECH', 
      message: 'Wystąpił błąd podczas ładowania szkicu' 
    });
  }
};

  return (
    <AdminLayout>
      <Helmet>
        <title>Edytor Bloga | IDZTECH</title>
        <meta name="description" content="Edytor wpisów blogowych IDZTECH – web development, SEO, tworzenie stron internetowych, sklepy online." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://idztech.pl/blog/editor" />
      </Helmet>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button variant="ghost" onClick={handleGoToAdmin} className="hover:bg-premium-light/5 mb-2">
              <ArrowLeft size={18} className="mr-2" /> Wróć do panelu
            </Button>
            <h1 className="text-2xl font-bold">
              {isEditing ? 'Edytuj post' : 'Dodaj nowy post'}
            </h1>
          </div>
          <div className="flex gap-3">
            <Button onClick={form.handleSubmit(onSubmit)} className="bg-premium-gradient" disabled={isLoading}>
              <Save size={18} className="mr-2" />
              {isLoading ? 'Zapisywanie...' : 'Zapisz post'}
            </Button>
          </div>
        </div>

        <div className="/50 border border-premium-light/10 rounded-xl p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField 
                  control={form.control} 
                  name="title" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="title" className={`text-white`}>Tytuł</FormLabel>
                      <FormControl>
                        <Input id="title" {...field} 
                          placeholder="Tytuł posta" 
                          onBlur={() => {
                            if (!isEditing && !form.getValues('slug')) {
                              generateSlug();
                            }
                          }} 
                          className={`bg-black text-white border-gray-700 placeholder-gray-400`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
                
                <FormField 
                  control={form.control} 
                  name="slug" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="slug" className={`text-white`}>Slug (URL)</FormLabel>
                      <FormControl>
                        <Input id="slug" {...field} placeholder="url-posta" className={`bg-black text-white border-gray-700 placeholder-gray-400`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
              </div>
              
              <FormField 
                control={form.control} 
                name="summary" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="summary" className={`text-white`}>Zajawka</FormLabel>
                    <FormControl>
                      <Textarea id="summary" {...field} placeholder="Krótki opis posta (będzie widoczny na liście postów)" rows={2} className={`bg-black text-white border-gray-700 placeholder-gray-400 shadow-sm`} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
              
              <FormField 
                control={form.control} 
                name="content" 
                render={() => (
                  <FormItem>
                    <FormLabel htmlFor="content" className={`text-white`}>Treść (HTML)</FormLabel>
                    <FormControl>
                      <TipTapEditor 
                        value={editorContent}
                        onChange={setEditorContent}
                        placeholder="Treść posta w formacie HTML"
                        className={`bg-black text-white border-gray-700 placeholder-gray-400`}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
              
              {/* Featured Image Upload */}
              <div className="space-y-2">
                <FormLabel htmlFor="featuredImage" className={`text-white`}>Zdjęcie główne</FormLabel>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="cursor-pointer">
                      <div className="bg-premium-light/5 border border-premium-light/20 hover:bg-premium-light/10 transition-colors rounded-lg px-4 py-2 flex items-center">
                        <Upload size={18} className="mr-2" />
                        <span>Wybierz plik</span>
                      </div>
                      <input 
                        id="featuredImage"
                        type="file" 
                        accept="image/*"
                        className="hidden" 
                        onChange={handleImageChange}
                      />
                    </label>
                    {featuredImage && (
                      <span className={`text-white text-sm`}>
                        {featuredImage.name} ({Math.round(featuredImage.size / 1024)} KB)
                      </span>
                    )}
                  </div>
                  
                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="relative mt-2 max-w-md">
                      <img 
                        src={imagePreview} 
                        alt="Podgląd zdjęcia głównego" 
                        className="rounded-lg max-h-48 object-cover" 
                      />
                      <Button 
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-80 hover:opacity-100"
                        onClick={() => {
                          setImagePreview('');
                          setFeaturedImage(null);
                        }}
                      >
                        Usuń
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Author information display (not editable) */}
                <div className="space-y-2">
                  <FormLabel className={`text-white`}>Autor</FormLabel>
                  <div className={`text-white border-gray-700 bg-black border transition-colors rounded-lg px-4 py-2 flex items-center`}>
                    {user?.email || 'Nieznany autor'}
                  </div>
                </div>
                
                <FormField 
                  control={form.control} 
                  name="categories" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="categories" className={`text-white`}>Kategorie (oddzielone przecinkami)</FormLabel>
                      <FormControl>
                        <Input id="categories" {...field} placeholder="IT, Programowanie, AI" className={`bg-black text-white border-gray-700 placeholder-gray-400`} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
              </div>
              
              <FormField 
                control={form.control} 
                name="tags" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="tags" className={`text-white`}>Tagi (oddzielone przecinkami)</FormLabel>
                    <FormControl>
                      <Input id="tags" {...field} placeholder="pozycjonowanie, SEO, Google" className={`bg-black text-white border-gray-700 placeholder-gray-400`} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="bg-premium-gradient" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Zapisywanie...' : isEditing ? 'Aktualizuj post' : 'Opublikuj post'}
                </Button>
                <p className={`text-premium-light/70 text-xs mt-2`}>
                  Post zostanie automatycznie dodany do sitemap.xml dla lepszego indeksowania w Google.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BlogPostEditor;
