import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/utils/firebaseAuth';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { db } from '@/integrations/firebase/client';
import { collection, addDoc, serverTimestamp, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor';
import { ArrowLeft, Loader2, Upload, Image as ImageIcon, Sparkles, X, Home as HomeIcon, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { API_URL } from '@/config';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import AdminLayout from '@/components/AdminLayout';
import AIPostEditor from '@/components/AIPostEditor';
import FileUpload from "@/components/FileUpload";
import Notification from '@/components/ui/Notification';
import { useNotification } from '@/components/ui/NotificationContext';
import { Stepper, StepperItem, StepperIndicator, StepperSeparator } from "@/components/ui/stepper";
import { cn } from "@/lib/utils";

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

function aiPostToHtml(aiPost: any) {
  return (
    `<h1>${aiPost.title || ''}</h1><p>${aiPost.lead || ''}</p>` +
    (Array.isArray(aiPost.sections) ? aiPost.sections.map((s: any) => `<h2>${s.heading}</h2><p>${s.content}</p>`).join('') : '')
  );
}

const postLengths = {
  short: { name: 'Krótki', words: '300-500 słów' },
  medium: { name: 'Średni', words: '500-900 słów' },
  long: { name: 'Długi', words: '900-1500 słów' }
};

const postStyles = [
  { id: 'expert', name: 'Ekspercki', description: 'Profesjonalny ton z technicznym podejściem' },
  { id: 'casual', name: 'Przyjazny', description: 'Luźny i konwersacyjny styl' },
  { id: 'formal', name: 'Formalny', description: 'Oficjalny i biznesowy ton' },
  { id: 'creative', name: 'Kreatywny', description: 'Artystyczne i ekspresyjne podejście' }
];

const postPresentations = [
  { id: 'instruction', name: 'Instruktaż', description: 'Krok po kroku, praktyczny przewodnik' },
  { id: 'explanation', name: 'Wyjaśnienie', description: 'Dogłębne tłumaczenie zagadnienia' },
  { id: 'guide', name: 'Poradnik', description: 'Praktyczne wskazówki i porady' },
  { id: 'case', name: 'Case study', description: 'Opis przypadku, analiza sytuacji' },
  { id: 'overview', name: 'Przegląd', description: 'Podsumowanie, przegląd tematu' },
  { id: 'review', name: 'Recenzja', description: 'Ocena produktu, usługi lub zjawiska' },
];

// Dodaj shimmerowy komponent
const Shimmer = () => (
  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full h-11 w-full mb-2" style={{minHeight:44}} />
);

export default function AIPostPage() {
  const { user, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  
  // Stan dla kroków
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [topic, setTopic] = useState('');
  const [postLength, setPostLength] = useState<number>(600); // zmiana wartości początkowej i typu
  const [selectedStyle, setSelectedStyle] = useState('expert');
  const [selectedPresentation, setSelectedPresentation] = useState('instruction');
  
  // Pozostałe stany
  const [keywords, setKeywords] = useState('');
  const [audience, setAudience] = useState('');
  const [language, setLanguage] = useState('polski');
  const [cta, setCta] = useState(true);
  const [meta, setMeta] = useState(true);
  const [questions, setQuestions] = useState(true);
  const [summary, setSummary] = useState(true);
  const [links, setLinks] = useState(true);
  const [loadingAI, setLoadingAI] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [isGeneratingModalOpen, setIsGeneratingModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedPost, setEditedPost] = useState('');
  const [aiPost, setAiPost] = useState<any>(null);
  const [accepted, setAccepted] = useState(false);
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState('published');
  const [showMissingThumbnailModal, setShowMissingThumbnailModal] = useState(false);
  const [postId, setPostId] = useState<string | null>(null);
  const [postStatus, setPostStatus] = useState<'published' | 'draft'>('published');
  const [showExitModal, setShowExitModal] = useState(false);
  const [exitAction, setExitAction] = useState<'back' | 'cancel' | 'panel' | 'home' | null>(null);
  const [exitTarget, setExitTarget] = useState<'back' | 'cancel' | 'panel' | 'home' | null>(null);
  const [aiEditorStep, setAiEditorStep] = useState(false);
  const [aiEditorInitialData, setAiEditorInitialData] = useState<any>(null);
  const [suggestedTopics, setSuggestedTopics] = useState<string[]>([]);
  const [category, setCategory] = useState('IT');
  const [loadingTopics, setLoadingTopics] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const steps = [
    { title: "Temat", description: "Wybierz temat artykułu" },
    { title: "Długość", description: "Określ długość artykułu" },
    { title: "Styl", description: "Wybierz styl i sposób przedstawienia" },
    { title: "Generowanie", description: "Wygeneruj artykuł" }
  ];

  React.useEffect(() => {
    if (!loading && !isAuthenticated) navigate('/login');
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated, 'loading:', loading);
  }, [isAuthenticated, loading]);

  const fetchTopics = async (cat = category) => {
    setLoadingTopics(true);
    try {
      const res = await fetch('/api/generate-post-topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ previousTitles: [], category: cat, language: 'polski' })
      });
      if (!res.ok) throw new Error('Błąd pobierania tematów');
      const data = await res.json();
      setSuggestedTopics(Array.isArray(data.topics) ? data.topics : []);
    } catch (e) {
      setSuggestedTopics([]);
    }
    setLoadingTopics(false);
  };

  useEffect(() => {
    fetchTopics();
    // eslint-disable-next-line
  }, []);

  // Funkcje pomocnicze
  const handleThumbnailUpload = (file: File) => {
    setThumbnail(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleThumbnailRemove = () => {
    setThumbnail(null);
    setThumbnailPreview(null);
  };

  const handleNextStep = () => {
    if (currentStep === 3) {
      if (!selectedStyle || !selectedPresentation) {
        showNotification({ sender: 'IDZTECH', message: 'Wybierz styl i sposób przedstawienia artykułu!', type: 'error' });
        setTimeout(() => showNotification(null), 3000);
        return;
      }
    }
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleGenerate();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleGenerate = async () => {
    setIsGeneratingModalOpen(true);
    setLoadingAI(true);
    setShowConfetti(false);
    setAiPost(null);
    if (!selectedStyle || !selectedPresentation) {
      showNotification({ sender: 'IDZTECH', message: 'Wybierz styl i sposób przedstawienia artykułu!', type: 'error' });
      setTimeout(() => showNotification(null), 3000);
      setCurrentStep(3);
      setLoadingAI(false);
      setIsGeneratingModalOpen(false);
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/generate-blog-post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          topic, 
          keywords, 
          style: selectedStyle, 
          presentation: selectedPresentation,
          length: postLength,
          lengthPrompt: `Napisz artykuł o długości około ${postLength} słów. Nie używaj formatowania typu **Backlink**: ani nie pogrubiaj pojedynczych słów z dwukropkiem na końcu.`,
          audience, 
          cta, 
          meta, 
          questions, 
          summary, 
          links, 
          language 
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        showNotification({ sender: 'IDZTECH', message: err.error || 'Błąd generowania posta przez AI', type: 'error' });
        setTimeout(() => showNotification(null), 3000);
        setLoadingAI(false);
        setIsGeneratingModalOpen(false);
        return;
      }
      const data = await res.json();
      setAiPost(data);
      setLoadingAI(false);
      setShowConfetti(true);
      setIsGeneratingModalOpen(false);
      setEditedPost(aiPostToHtml(data));
      // Automatycznie pobierz target i tagi na podstawie tytułu
      let target = '';
      let tags = '';
      try {
        const resTarget = await fetch('/api/generate-audience', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: data?.title || '' })
        });
        if (resTarget.ok) {
          const d = await resTarget.json();
          if (d.audience) target = d.audience;
        }
        const resTags = await fetch('/api/generate-tags', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: data?.title || '' })
        });
        if (resTags.ok) {
          const d = await resTags.json();
          if (d.tags) tags = d.tags;
        }
      } catch (e) { /* ignoruj */ }
      setAiEditorInitialData({
        title: data?.title || '',
        slug: data?.title ? slugify(data.title) : '',
        summary: data?.lead || '',
        content: aiPostToHtml(data),
        featured_image: thumbnail || '',
        target,
        tags,
        categories: category
      });
      setTimeout(() => setShowConfetti(false), 3000);
    } catch (e) {
      showNotification({ sender: 'IDZTECH', message: 'Błąd połączenia z API', type: 'error' });
      setTimeout(() => showNotification(null), 3000);
      setLoadingAI(false);
      setIsGeneratingModalOpen(false);
    }
  };

  const handlePublish = async () => {
    if (!aiPost) return;
    if (!user || !user.uid) {
      showNotification({ sender: 'IDZTECH', message: 'Musisz być zalogowany, aby zapisać post!', type: 'error' });
      setTimeout(() => showNotification(null), 3000);
      return;
    }
    if (!thumbnail) {
      setShowMissingThumbnailModal(true);
      return;
    }
    try {
      // Konwertuj File na base64
      const reader = new FileReader();
      reader.onload = async (event) => {
        if (typeof event.target?.result === 'string') {
          const base64Image = event.target.result;
          const docRef = await addDoc(collection(db, "blog_posts"), {
            title: aiPost?.title || "",
            lead: typeof aiPost?.lead === 'string' ? aiPost.lead : "",
            sections: Array.isArray(aiPost?.sections) ? aiPost.sections : [],
            summary: typeof aiPost?.summary === 'string' ? aiPost.summary : "",
            tags: Array.isArray(aiPost?.tags) ? aiPost.tags : [],
            categories: [category],
            created_at: serverTimestamp(),
            slug: aiPost?.title ? slugify(aiPost.title) : '',
            featured_image: base64Image,
            excerpt: typeof aiPost?.lead === 'string' ? aiPost.lead : "",
            author: user?.email || "anonim",
            author_id: user?.uid || "",
            status: status,
            content: editedPost,
            published: true
          });
          showNotification({ sender: 'IDZTECH', message: 'Post opublikowany!' });
          setTimeout(() => showNotification(null), 3000);
          setIsEditModalOpen(false);
          setAccepted(true);
          setPostId(docRef.id);
          setPostStatus('published');
          setAiEditorInitialData({
            title: aiPost?.title || '',
            slug: aiPost?.title ? slugify(aiPost.title) : '',
            summary: aiPost?.lead || '',
            content: editedPost,
            featured_image: base64Image,
            target: '',
            tags: Array.isArray(aiPost?.tags) ? aiPost.tags.join(', ') : '',
            categories: category
          });
          setPostId(docRef.id);
        }
      };
      reader.readAsDataURL(thumbnail);
    } catch (e: any) {
      showNotification({ sender: 'IDZTECH', message: 'Błąd zapisu do bazy: ' + (e.message || e), type: 'error' });
      setTimeout(() => showNotification(null), 3000);
      console.error('Błąd zapisu do Firestore:', e);
    }
  };

  const handleDeletePost = async () => {
    if (!postId) return;
    try {
      await deleteDoc(doc(db, 'blog_posts', postId));
      showNotification({ sender: 'IDZTECH', message: 'Post usunięty!' });
      setTimeout(() => showNotification(null), 3000);
      setAccepted(false);
      setPostId(null);
      setAiPost(null);
    } catch (e: any) {
      showNotification({ sender: 'IDZTECH', message: 'Błąd usuwania posta: ' + (e.message || e), type: 'error' });
      setTimeout(() => showNotification(null), 3000);
    }
  };

  const handleToggleStatus = async () => {
    if (!postId) return;
    try {
      const newStatus = postStatus === 'published' ? 'draft' : 'published';
      await updateDoc(doc(db, 'blog_posts', postId), { status: newStatus });
      setPostStatus(newStatus);
      showNotification({ sender: 'IDZTECH', message: `Status zmieniony na: ${newStatus === 'published' ? 'Publiczny' : 'Szkic'}` });
      setTimeout(() => showNotification(null), 3000);
    } catch (e: any) {
      showNotification({ sender: 'IDZTECH', message: 'Błąd zmiany statusu: ' + (e.message || e), type: 'error' });
      setTimeout(() => showNotification(null), 3000);
    }
  };

  // Sprawdź czy są wprowadzone zmiany (np. tytuł lub lead)
  const hasUnsavedChanges = topic.trim().length > 0 || (aiPost && (aiPost.title || aiPost.lead));

  const handleBack = () => {
    navigate('/admin');
  };

  const handleCancelPreview = () => {
    setExitAction('cancel');
    setShowExitModal(true);
  };

  const handleGoPanel = () => {
    navigate('/admin');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const confirmExit = () => {
    setShowExitModal(false);
    if (exitAction === 'back') {
      handlePrevStep();
    } else if (exitAction === 'cancel') {
      setIsEditModalOpen(false);
      setAiPost(null);
    } else if (exitAction === 'panel') {
      navigate('/admin');
    } else if (exitAction === 'home') {
      navigate('/');
    }
    setExitAction(null);
  };

  const handleReset = () => {
    setTopic('');
    setPostLength(600);
    setSelectedStyle('expert');
    setSelectedPresentation('instruction');
    setKeywords('');
    setAudience('');
    setLanguage('polski');
    setCta(true);
    setMeta(true);
    setQuestions(true);
    setSummary(true);
    setLinks(true);
    setStatus('published');
    setShowConfetti(false);
    setThumbnail(null);
    setThumbnailPreview(null);
    setCategory('IT');
    setSuggestedTopics([]);
    setLoadingTopics(false);
  };

  const handleStepClick = (step: number) => {
    if (step < currentStep) {
      setCurrentStep(step);
    }
  };

  if (loading || !isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white">Ładowanie...</div>;
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Stepper value={currentStep} className="w-full">
            {steps.map((step, index) => (
              <StepperItem 
                key={index} 
                step={index + 1} 
                completed={currentStep > index + 1}
                loading={currentStep === 4 && loadingAI}
                className={cn(
                  "flex-1 transition-all duration-300 ease-in-out cursor-pointer",
                  currentStep === index + 1 && "scale-105",
                  currentStep > index + 1 && "opacity-100",
                  currentStep < index + 1 && "opacity-50",
                  "md:flex-1 flex-none",
                  "transform transition-transform duration-500",
                  currentStep === index + 1 && "translate-y-0",
                  currentStep !== index + 1 && "translate-y-2"
                )}
                onClick={() => handleStepClick(index + 1)}
              >
                <div className="flex flex-col items-center">
                  <StepperIndicator 
                    className={cn(
                      "mb-2 transition-transform duration-500 hover:scale-110",
                      currentStep === index + 1 && "ring-2 ring-premium-purple ring-offset-2 scale-110  text-premium-purple",
                      currentStep > index + 1 && "bg-premium-purple scale-100 text-white",
                      currentStep < index + 1 && "bg-muted scale-90 text-muted-foreground",
                      "w-8 h-8 md:w-10 md:h-10",
                      "transform transition-transform duration-500 origin-center"
                    )} 
                  />
                  <div className="text-center transition-opacity duration-300 hidden md:block">
                    <h3 className={cn(
                      "text-sm font-medium text-premium-dark dark:text-premium-light",
                      currentStep === index + 1 && "text-premium-purple",
                      currentStep > index + 1 && "text-premium-purple",
                      "transform transition-transform duration-500",
                      currentStep === index + 1 && "scale-105",
                      currentStep !== index + 1 && "scale-100",
                      "origin-center"
                    )}>
                      {step.title}
                    </h3>
                    <p className={cn(
                      "text-xs text-premium-light/70 dark:text-premium-light/50",
                      currentStep === index + 1 && "text-premium-purple/70",
                      currentStep > index + 1 && "text-premium-purple/70",
                      "transform transition-transform duration-500",
                      currentStep === index + 1 && "scale-105",
                      currentStep !== index + 1 && "scale-100",
                      "origin-center"
                    )}>
                      {step.description}
                    </p>
                  </div>
                  <div className="text-center transition-opacity duration-300 md:hidden">
                    <h3 className={cn(
                      "text-xs font-medium text-premium-dark dark:text-premium-light",
                      currentStep === index + 1 && "text-premium-purple",
                      currentStep > index + 1 && "text-premium-purple",
                      "transform transition-transform duration-500",
                      currentStep === index + 1 && "scale-105",
                      currentStep !== index + 1 && "scale-100",
                      "origin-center"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <StepperSeparator 
                    className={cn(
                      "hidden md:block transition-colors duration-300",
                      currentStep > index + 1 && "bg-premium-purple",
                      "transform transition-transform duration-500",
                      currentStep > index + 1 && "scale-x-100",
                      currentStep <= index + 1 && "scale-x-0",
                      "origin-left"
                    )} 
                  />
                )}
              </StepperItem>
            ))}
          </Stepper>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button 
                variant="ghost" 
                onClick={handleGoPanel}
                className="text-white hover:/10">
                <ArrowLeft size={18} className="mr-2" /> Wróć do panelu
              </Button>
              <h1 className="text-2xl font-bold text-white">
                {aiEditorInitialData ? 'Podsumowanie utworzonego posta' : 'Nowy post AI'}
              </h1>
            </div>
          </div>

          {aiEditorInitialData ? (
            <AIPostEditor
              postId={postId}
              initialData={aiEditorInitialData}
              onSave={async (values) => {
                // Zapisz do bazy
                if (!user || !user.uid) {
                  showNotification({ sender: 'IDZTECH', message: 'Musisz być zalogowany, aby zapisać post!', type: 'error' });
                  setTimeout(() => showNotification(null), 3000);
                  return;
                }
                if (!values.featured_image) {
                  setShowMissingThumbnailModal(true);
                  return;
                }
                try {
                  await addDoc(collection(db, "blog_posts"), {
                    title: values.title || "",
                    lead: values.summary || "",
                    sections: [],
                    summary: values.summary || "",
                    tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [],
                    categories: [category],
                    created_at: serverTimestamp(),
                    slug: values.slug || '',
                    featured_image: values.featured_image || '',
                    excerpt: values.summary || "",
                    author: user?.email || "anonim",
                    author_id: user?.uid || "",
                    status: status,
                    content: values.content,
                    published: true
                  });
                  showNotification({ sender: 'IDZTECH', message: 'Post opublikowany!' });
                  setTimeout(() => showNotification(null), 3000);
                  setAiEditorInitialData(null);
                  navigate('/admin');
                } catch (e) {
                  showNotification({ sender: 'IDZTECH', message: 'Błąd zapisu do bazy' });
                  setTimeout(() => showNotification(null), 3000);
                }
              }}
              onCancel={() => {
                setAiEditorInitialData(null);
                navigate('/admin');
              }}
            />
          ) : (
            <div className="flex gap-8">
              {/* Lewa kolumna - miniaturka */}
              <div className={`w-1/3 rounded-xl p-6 border ${
                '/50 border-premium-light/10' 
              }`}>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center align-center justify-center">
                      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Miniatura
                      </label>
                    </div>
                    <FileUpload
                      onUploadSuccess={handleThumbnailUpload}
                      onFileRemove={handleThumbnailRemove}
                      acceptedFileTypes={["image/jpeg", "image/png", "image/gif"]}
                      maxFileSize={5 * 1024 * 1024}
                      currentFile={thumbnail}
                    />
                  </div>
                </div>
              </div>
              {/* Prawa kolumna - kreator */}
              <div className={`w-2/3 rounded-xl p-6 border ${
                '/50 border-premium-light/10' 
              }`}>
                <div className="flex flex-col gap-8">
                  {/* Krok 1 - Temat */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-white">O czym chcesz napisać?</h2>
                      <div className="flex flex-col gap-2 mb-2">
                        <input
                          type="text"
                          value={topic}
                          onChange={e => setTopic(e.target.value)}
                          placeholder="Wpisz temat posta lub wybierz propozycję poniżej..."
                          className="w-full px-3 py-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex gap-2 items-center self-end">
                          <p>Kategoria:</p>
                          <select
                            value={category}
                            onChange={e => { setCategory(e.target.value); fetchTopics(e.target.value); }}
                            className="px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="IT">IT (ogólne)</option>
                            <option value="AI">AI</option>
                            <option value="Programowanie">Programowanie</option>
                            <option value="Cyberbezpieczeństwo">Cyberbezpieczeństwo</option>
                            <option value="Inne">Inne</option>
                          </select>
                          <button
                            type="button"
                            className="ml-1 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50"
                            onClick={() => fetchTopics()}
                            disabled={loadingTopics}
                            title="Wygeneruj nowe propozycje"
                          >
                            <RefreshCw className={`w-5 h-5 ${loadingTopics ? 'animate-spin' : ''}`} />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 mt-2">
                        {loadingTopics ? (
                          <>
                            <Shimmer />
                            <Shimmer />
                            <Shimmer />
                            <span className="text-xs text-gray-500 mt-2">Ładowanie może zająć do minuty. Prosimy o cierpliwość.</span>
                          </>
                        ) : (
                          suggestedTopics.map((topic, idx) => (
                            <button
                              key={idx}
                              className="text-left px-4 py-2 border border-gray-300 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 transition text-gray-900 text-base"
                              style={{minHeight: 44}}
                              onClick={() => setTopic(topic.replace(/^"|"$/g, ''))}
                              type="button"
                            >
                              {topic.replace(/^"|"$/g, '')}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                  {/* Krok 2 - Długość */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-white">
                        Jak długi ma być artykuł?
                      </h2>
                      <div className="space-y-8">
                        <Slider
                          min={600}
                          max={2000}
                          step={20}
                          defaultValue={[600]}
                          value={[postLength]}
                          onValueChange={(values) => setPostLength(values[0])}
                          className="w-full [&_[role=slider]]: [&_[role=slider]]:border-white [&_[role=track]]:bg-gray-700/50 [&_[role=track].data-[orientation=horizontal]]:h-2 [&_[role=range]]: [&_[role=range]]:data-[orientation=horizontal]: [&_[role=track]]:data-[orientation=horizontal]:bg-gray-700/50"
                        />
                        <div className="text-center text-white">
                            Aktualnie: <span className="font-semibold text-white">{postLength}</span> słów
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Krok 3 - Styl i sposób przedstawienia */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <h2 className="text-lg font-semibold text-white">
                          Wybierz styl artykułu
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                          {postStyles.map((style) => (
                            <button
                              key={style.id}
                              className={
                                `btn-back p-2 rounded-lg border text-sm transition-all hover:scale-105${selectedStyle === style.id ? ' active' : ''}`
                              }
                              onClick={() => setSelectedStyle(style.id)}
                            >
                              <h3 className="font-semibold mb-1 text-white">
                                {style.name}
                              </h3>
                              <p className="text-xs text-white">
                                {style.description}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h2 className="text-lg font-semibold text-white">
                          Sposób przedstawienia artykułu
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                          {postPresentations.map((presentation) => (
                            <button
                              key={presentation.id}
                              className={
                                `btn-back p-2 rounded-lg border text-sm transition-all hover:scale-105${selectedPresentation === presentation.id ? ' active' : ''}`
                              }
                              onClick={() => setSelectedPresentation(presentation.id)}
                            >
                              <h3 className="font-semibold mb-1 text-white">
                                {presentation.name}
                              </h3>
                              <p className="text-xs text-white">
                                {presentation.description}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Krok 4 - Generowanie */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-white">
                        Gotowy do wygenerowania?
                      </h2>
                      <div className="space-y-4">
                        <div className={`rounded-lg p-4 space-y-2 ${
                          'bg-black/50 border border-gray-700' 
                        }`}>
                          <p className="text-gray-300">
                            Temat: <span className="text-white">{topic}</span>
                          </p>
                          <p className="text-gray-300">
                            Długość: <span className="text-white">
                                  {postLength} słów
                          </span>
                          </p>
                          <p className="text-gray-300">
                            Styl: <span className="text-white">
                              {postStyles.find(s => s.id === selectedStyle)?.name}
                            </span>
                          </p>
                          <p className="text-gray-300">
                            Sposób przedstawienia: <span className="text-white">
                              {postPresentations.find(p => p.id === selectedPresentation)?.name}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Przyciski nawigacji */}
                  <div className="flex justify-between mt-8">
                    <div className="flex-1" />
                    <Button
                      onClick={handleNextStep}
                      className="btn-next"
                      disabled={currentStep === 1 && !topic.trim()}
                    >
                      {currentStep === 4 ? (
                        <>
                          <Sparkles className="mr-2" size={16} />
                          Generuj z AI
                        </>
                      ) : (
                        'Dalej'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modalne okna */}
        <Dialog open={isGeneratingModalOpen}>
          <DialogContent
            onInteractOutside={e => e.preventDefault()}
            className={`p-8 rounded-xl max-w-lg w-full ${
              'bg-black/95 border border-gray-200' 
            }`}
          >
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center text-white">
                Generowanie posta...
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center gap-4">
              <Loader2 className={`w-12 h-12 animate-spin ${
                'text-purple-500'
              }`} />
              <p className="text-white">
                To może potrwać do kilku minut. Proszę o cierpliwość.
              </p>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className={`p-4 rounded-xl w-[90vw] max-w-[1400px] h-[90vh] overflow-hidden ${
            'bg-black/50 backdrop-blur-[5px] border border-purple-500/30' 
          }`}>
            <DialogHeader className="pb-4">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl font-semibold text-white">
                  Edycja posta
                </DialogTitle>
                <Button
                  variant="ghost"
                  className={`transition-all hover:scale-105 ${
                    'text-white hover:bg-purple-600/20' 
                  }`}
                  onClick={() => setIsEditModalOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>
            <div className="flex gap-4 h-[calc(90vh-120px)] mt-4">
              <div className="flex-1 flex flex-col">
                <div className="sticky top-0 z-10 rounded-lg border-0 bg-black/50 backdrop-blur-[5px]">
                  <div className="tiptap-toolbar-container p-2">
                    {/* Toolbar będzie tutaj */}
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto mt-4 pr-4">
                  <div className="rounded-lg border-0 bg-black/50 backdrop-blur-[5px]">
                    <SimpleEditor
                      value={editedPost}
                      onChange={setEditedPost}
                      isToolbarFixed={true}
                    />
                  </div>
                </div>
              </div>
              <div className="w-48 flex flex-col gap-4 ml-4">
                <Button
                  className="btn-save w-full py-6"
                  onClick={handlePublish}
                >
                  Zapisz
                </Button>
                <Button
                  className="btn-cancel w-full py-6"
                  onClick={handleCancelPreview}
                >
                  Anuluj
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showMissingThumbnailModal} onOpenChange={setShowMissingThumbnailModal}>
          <DialogContent className={`p-8 rounded-xl max-w-lg w-full ${
            'bg-black/95 border border-purple-500/30' 
          }`}>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center text-white">
                Zapomniałeś dodać miniaturę!
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <p className="text-white">
                Aby opublikować post, musisz dodać miniaturę.
              </p>
              <input
                id="thumbnail-upload-modal"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      if (typeof event.target?.result === 'string') {
                        setThumbnail(file);
                        setShowMissingThumbnailModal(false);
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <Button
                className="btn-next"
                onClick={() => document.getElementById('thumbnail-upload-modal')?.click()}
              >
                Wybierz plik
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={showExitModal} onOpenChange={setShowExitModal}>
          <DialogContent className={`p-8 rounded-xl max-w-lg w-full ${
            'bg-black/95 border border-gray-700' 
          }`}>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-center text-white">
                Czy na pewno chcesz wyjść?
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <p className= "text-white">
                Wprowadzone zmiany nie zostaną zapisane.
              </p>
              <div className="flex gap-4 mt-4">
                <Button className="btn-exit-cancel" onClick={() => setShowExitModal(false)}>
                  Wróć
                </Button>
                <Button className="btn-exit-confirm" onClick={confirmExit}>
                  Wyjdź
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            recycle={true}
            style={{ position: 'fixed', top: 0, left: 0 }}
          />
        )}
      </div>
    </AdminLayout>
  );
}