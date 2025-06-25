import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2,  Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate, formatReadingTime } from '@/utils/dateUtils';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/utils/AuthProvider';
import { Skeleton } from '@/components/ui/skeleton';
import { Helmet } from 'react-helmet-async';
import { useFirebaseBlogPosts } from '@/hooks/useFirebaseBlogPosts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/utils/themeContext';
import Notification from '@/components/ui/Notification';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { theme } = useTheme();
  const [notification, setNotification] = useState<null | { sender: string; message: string; time?: string }>(null);
  
  // Get blog data
  const { getPost, posts } = useFirebaseBlogPosts();
  const { post, isLoading, error } = getPost(slug || '');
  
  // States
  const [tableOfContents, setTableOfContents] = useState<{id: string, text: string, level: number}[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [formattedContent, setFormattedContent] = useState('');
  const [relatedPage, setRelatedPage] = useState(0);
  const postsPerPage = 6;
  const filteredPosts = post && posts ? posts.filter(p => p.id !== post.id) : [];
  const paginatedPosts = filteredPosts.slice(relatedPage * postsPerPage, (relatedPage + 1) * postsPerPage);
  const hasMoreRelated = (relatedPage + 1) * postsPerPage < filteredPosts.length;
  
  // Extract headings for table of contents
  useEffect(() => {
    if (post?.content) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = post.content;

      // Dodaj styl i id do h2 oraz odstępy do p
      tempDiv.querySelectorAll('h2').forEach((h2, i) => {
        h2.classList.add('text-2xl', 'font-bold', 'mt-10', 'mb-4', 'scroll-mt-24');
        if (!h2.id && h2.textContent) {
          h2.id = h2.textContent.toLowerCase().replace(/\s+/g, '-');
        }
      });
      tempDiv.querySelectorAll('p').forEach(p => {
        p.classList.add('mb-6', 'text-base', 'text-premium-light/80');
      });
      // Dodaj style do tabel
      tempDiv.querySelectorAll('table').forEach(table => {
        table.classList.add(
          'w-full',
          'my-8',
          'border',
          'border-premium-light/20',
          'rounded-lg',
          'overflow-hidden',
          '/80',
          'text-sm',
          'text-left'
        );
      });
      tempDiv.querySelectorAll('th').forEach(th => {
        th.classList.add('bg-premium-purple/80', 'text-white', 'px-4', 'py-2', 'font-semibold', 'border', 'border-premium-light/20');
      });
      tempDiv.querySelectorAll('td').forEach(td => {
        td.classList.add('px-4', 'py-2', 'border', 'border-premium-light/20');
      });
      // Spis treści - bierzemy wszystkie nagłówki h2, h3
      const headings = Array.from(tempDiv.querySelectorAll('h2, h3'));
      const toc = headings.map(heading => {
        const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
        if (!heading.id && heading.textContent) {
          heading.id = id;
        }
        return {
          id,
          text: heading.textContent || '',
          level: heading.tagName === 'H2' ? 2 : 3
        };
      });
      setTableOfContents(toc);
      // Ustaw sformatowaną treść
      setFormattedContent(tempDiv.innerHTML);
      tempDiv.querySelectorAll('img').forEach(img => {
        img.className = '';
        img.classList.add('max-w-lg', 'w-auto', 'h-auto', 'rounded-lg', 'block', 'mr-auto');
      });
    }
  }, [post?.content]);
  
  // Setup intersection observer for headings
  useEffect(() => {
    if (tableOfContents.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-100px 0px -80% 0px' }
      );
      
      tableOfContents.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
      });
      
      return () => {
        tableOfContents.forEach(heading => {
          const element = document.getElementById(heading.id);
          if (element) observer.unobserve(element);
        });
      };
    }
  }, [tableOfContents]);
  
  // Redirect if post not found
  useEffect(() => {
    if (!isLoading && (!post || post.published !== true) && posts?.length > 0) {
      navigate('/blog');
      setNotification({ 
        sender: 'IDZTECH', 
        message: 'Nie znaleziono posta o podanym adresie URL lub nie jest on opublikowany.'
      });
      setTimeout(() => setNotification(null), 3000);
    }
  }, [post, posts, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen ">
        <Navbar />
        <div className="container max-w-4xl mx-auto px-4 py-32">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="h-[400px] w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!post) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="min-h-screen ">
      {notification && (
        <Notification
          sender={notification.sender}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      <Helmet>
        <title>{post?.title ? `${post.title} | IDZTECH Blog` : 'Blog Post | IDZTECH'}</title>
        <meta name="description" content="Szczegóły wpisu na blogu IDZTECH – web development, SEO, tworzenie stron internetowych, sklepy online." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={post?.slug ? `https://idztech.pl/blog/${post.slug}` : 'https://idztech.pl/blog/post'} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
      </Helmet>
      
      <Navbar />
      
      <div className="pt-32 pb-20">
        {/* Main content */}
        <div className="mx-auto max-w-5xl px-4 flex flex-col gap-10">
          {/* Article content */}
          <div className="w-full">
            {/* Back button */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className=""
                size="sm"
              >
                <ArrowLeft size={16} className="mr-2" />
                <span className="dark:text-white light:text-black">Wróć do bloga</span>
              </Button>
            </div>

            
            {/* Post header */}
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 dark:text-premium-light/80 light:text-black mb-6">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(post.created_at)}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>{formatReadingTime(post.content)}</span>
                </div>
              </div>
            </header>
            
            {/* Featured image */}
            {post.featured_image && (
              <div className="mb-10">
                <img 
                  src={post.featured_image} 
                  alt={post.title} 
                  className="w-full h-auto rounded-lg object-cover max-h-[500px]" 
                />
              </div>
            )}
            
            {/* Post content */}
            <section className="mb-10 toc-section">
            <div className="mt-10 blog-bg border dark:border-premium-light/10 light:border-premium-light rounded-lg p-6">
              <h2 className="text-lg font-bold mb-2">Z tego artykułu dowiesz się:</h2>
              <ul className="list-disc pl-6">
                {tableOfContents.map(heading => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`} className="text-premium-purple hover:underline">{heading.text}</a>
                  </li>
                ))}
              </ul>
              </div>
            </section>
            
            <article className="prose prose-invert prose-premium max-w-none mb-10">
              <div dangerouslySetInnerHTML={{ __html: formattedContent || post.content }} />
            </article>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Tagi:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <div
                      key={`${tag}-${index}`}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark' ? 'bg-transparent text-white border border-white' : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Share section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <Share2 size={16} />
                <span className="font-medium">Udostępnij:</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="bg-transparent rounded-full w-10 h-10 p-0 hover:bg-blue-600 hover:text-white">
                  <Facebook size={18} />
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent rounded-full w-10 h-10 p-0 hover:bg-sky-500 hover:text-white">
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent rounded-full w-10 h-10 p-0 hover:bg-blue-700 hover:text-white">
                  <Linkedin size={18} />
                </Button> 
              </div>
                   {/* CTA Box */}
                  <div
                    className={`mt-10 border border-premium-light/10 rounded-lg p-6 text-center ${theme === 'light' ? 'bg-[#f5f5f5]' : '/80'}`}
                  >
                    <h3 className="font-semibold text-lg mb-3">Potrzebujesz pomocy z SEO?</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Chcesz zlecić stronę internetową profesjonalistom? Skorzystaj z naszych usług 😊</p>
                    <Button className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>                  Skontaktuj się z nami                </Button>
                  </div>
            </div>
            
            
          </div>
         
        </div>
        {/* Powiązane artykuły - paginacja */}
        {paginatedPosts && paginatedPosts.length > 0 && (
          <section className="mt-16 mx-auto max-w-3xl w-full">
            <h2 className="text-xl font-bold mb-6">Powiązane artykuły</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 justify-center">
              {paginatedPosts.map((rp) => (
                <a
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="rounded-2xl flex flex-col items-center p-4 transition hover:scale-105 hover:shadow-xl duration-200 mx-auto md:mx-0"
                >
                  {rp.featured_image && (
                    <img
                      src={rp.featured_image}
                      alt={rp.title}
                      className="rounded-xl w-full h-32 object-cover mb-3"
                    />
                  )}
                  <div className={`font-semibold text-lg text-center mb-2 line-clamp-2 ${theme === 'dark' ? 'text-white' : ''}`}>{rp.title}</div>
                  <div className="text-sm text-gray-400 text-center mb-2">
                    {rp.excerpt && rp.excerpt.length > 100
                      ? rp.excerpt.slice(0, 100).replace(/\s+\S*$/, '') + '...'
                      : rp.excerpt}
                  </div>
                </a>
              ))}
            </div>
            {hasMoreRelated && (
              <div className="flex justify-center">
                <Button onClick={() => setRelatedPage(relatedPage + 1)} className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6t">Załaduj więcej</Button>
              </div>
            )}
          </section>
        )}
      </div>
      
      
      <Footer />
    </div>
  );
};

export default BlogPost;
