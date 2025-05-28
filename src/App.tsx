import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Blog from '@/pages/Blog';
import BlogPostEditor from '@/pages/BlogPostEditor';
import BlogPost from '@/pages/BlogPost';
import ContactPage from '@/pages/ContactPage';
import AboutUs from '@/pages/AboutUs';
import Projects from '@/pages/Projects';
import WebDevelopment from '@/pages/WebDevelopment';
import ECommerce from '@/pages/ECommerce';
import Seo from '@/pages/Seo';
import LocalSeo from '@/pages/LocalSeo';
import SeoAudit from '@/pages/SeoAudit';
import SeoOptimization from '@/pages/SeoOptimization';
import SeoCopywriting from '@/pages/SeoCopywriting';
import ContentPlan from '@/pages/ContentPlan';
import Error404 from '@/pages/Error404';
import NotFound from '@/pages/NotFound';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfUse from '@/pages/TermsOfUse';
import RequireAuth from '@/components/RequireAuth';
import ErrorPage from '@/pages/ErrorPage';
import Admin from '@/pages/Admin';
import { Toaster } from 'sonner';
import AIPostPage from './pages/ai-post';
import CookieBanner from './components/CookieBanner';
import { useAuth } from '@/utils/firebaseAuth';
import { useTheme } from '@/utils/themeContext';
import { SpeedInsights } from "@vercel/speed-insights/next"
const App = () => {
  const { loading } = useAuth();
  const { theme } = useTheme();

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-t-4 border-premium-purple border-solid mb-6"></div>
          <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg font-semibold`}>Ładowanie...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} errorElement={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tworzenie-stron-www" element={<WebDevelopment />} />
        <Route path="/sklepy-internetowe" element={<ECommerce />} />
        <Route path="/pozycjonowanie-stron" element={<Seo />} />
        <Route path="/pozycjonowanie-lokalne" element={<LocalSeo />} />
        <Route path="/audyt-seo" element={<SeoAudit />} />
        <Route path="/optymalizacja-seo" element={<SeoOptimization />} />
        <Route path="/copywriting-seo" element={<SeoCopywriting />} />
        <Route path="/content-plan" element={<ContentPlan />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        
        {/* Admin routes - protected with RequireAuth */}
        <Route path="/admin/ai-post" element={<RequireAuth><AIPostPage /></RequireAuth>} />
        <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
        <Route path="/admin/new-post" element={<RequireAuth><BlogPostEditor /></RequireAuth>} />
        <Route path="/admin/edit-post/:id" element={<RequireAuth><BlogPostEditor /></RequireAuth>} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
      <SpeedInsights/>
    </>
  );
};

export default App;
