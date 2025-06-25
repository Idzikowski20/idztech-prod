import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
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
import AIPostPage from './pages/ai-post';
import CookieBanner from './components/CookieBanner';
import { useAuth } from '@/utils/firebaseAuth';
import { useTheme } from '@/utils/themeContext';
// import WarszawaSeoPage from '@/pages/pozycjonowanie/warszawa';
// import KrakowSeoPage from '@/pages/pozycjonowanie/krakow';
// import LodzSeoPage from '@/pages/pozycjonowanie/lodz';
// import WroclawSeoPage from '@/pages/pozycjonowanie/wroclaw';
// import PoznanSeoPage from '@/pages/pozycjonowanie/poznan';
// import GdanskSeoPage from '@/pages/pozycjonowanie/gdansk';
// import SzczecinSeoPage from '@/pages/pozycjonowanie/szczecin';
// import BydgoszczSeoPage from '@/pages/pozycjonowanie/bydgoszcz';
// import LublinSeoPage from '@/pages/pozycjonowanie/lublin';
import BialystokSeoPage from '@/pages/pozycjonowanie/bialystok';
// import KatowiceSeoPage from '@/pages/pozycjonowanie/katowice';
// import GdyniaSeoPage from '@/pages/pozycjonowanie/gdynia';
// import CzestochowaSeoPage from '@/pages/pozycjonowanie/czestochowa';
// import RadomSeoPage from '@/pages/pozycjonowanie/radom';
// import SosnowiecSeoPage from '@/pages/pozycjonowanie/sosnowiec';
// import TorunSeoPage from '@/pages/pozycjonowanie/torun';
// import KielceSeoPage from '@/pages/pozycjonowanie/kielce';
// import GliwiceSeoPage from '@/pages/pozycjonowanie/gliwice';
// import ZabrzeSeoPage from '@/pages/pozycjonowanie/zabrze';
// import OlsztynSeoPage from '@/pages/pozycjonowanie/olsztyn';
// import BielskoBialaSeoPage from '@/pages/pozycjonowanie/bielsko-biala';
// import RzeszowSeoPage from '@/pages/pozycjonowanie/rzeszow';
// import RudaSlaskaSeoPage from '@/pages/pozycjonowanie/ruda-slaska';
// import RybnikSeoPage from '@/pages/pozycjonowanie/rybnik';
// import TychySeoPage from '@/pages/pozycjonowanie/tychy';
// import DabrowaGorniczaSeoPage from '@/pages/pozycjonowanie/dabrowa-gornicza';
// import PlockSeoPage from '@/pages/pozycjonowanie/plock';
// import ElblagSeoPage from '@/pages/pozycjonowanie/elblag';
// import OpoleSeoPage from '@/pages/pozycjonowanie/opole';
// import GorzowWielkopolskiSeoPage from '@/pages/pozycjonowanie/gorzow-wielkopolski';
// import WloclawekSeoPage from '@/pages/pozycjonowanie/wloclawek';
// import ZielonaGoraSeoPage from '@/pages/pozycjonowanie/zielona-gora';
import WebApps from './pages/WebApps';

const App = () => {
  const { loading } = useAuth();
  const { theme } = useTheme();
  const [showToolbar, setShowToolbar] = useState(false);
  const toolbarInitialized = useRef(false);

  const stagewiseConfig = {
    plugins: []
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !toolbarInitialized.current) {
      setShowToolbar(true);
      toolbarInitialized.current = true;
    }

    return () => {
      if (toolbarInitialized.current) {
        setShowToolbar(false);
        toolbarInitialized.current = false;
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
      </div>
    );
  }

  return (
    <>
      <Routes>
        {/* Statyczne strony */}
        <Route path="/" element={<Index />} errorElement={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tworzenie-stron-internetowych" element={<WebDevelopment />} />
        <Route path="/aplikacje-webowe" element={<WebApps />} />
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

        {/* Pozycjonowanie lokalne */}
        <Route path="/pozycjonowanie/bialystok" element={<BialystokSeoPage />} />
        {/* <Route path="/pozycjonowanie/krakow" element={<KrakowSeoPage />} />
        <Route path="/pozycjonowanie/lodz" element={<LodzSeoPage />} />
        <Route path="/pozycjonowanie/wroclaw" element={<WroclawSeoPage />} />
        <Route path="/pozycjonowanie/poznan" element={<PoznanSeoPage />} />
        <Route path="/pozycjonowanie/gdansk" element={<GdanskSeoPage />} />
        <Route path="/pozycjonowanie/szczecin" element={<SzczecinSeoPage />} />
        <Route path="/pozycjonowanie/bydgoszcz" element={<BydgoszczSeoPage />} />
        <Route path="/pozycjonowanie/lublin" element={<LublinSeoPage />} />
        <Route path="/pozycjonowanie/bialystok" element={<BialystokSeoPage />} />
        <Route path="/pozycjonowanie/katowice" element={<KatowiceSeoPage />} />
        <Route path="/pozycjonowanie/gdynia" element={<GdyniaSeoPage />} />
        <Route path="/pozycjonowanie/czestochowa" element={<CzestochowaSeoPage />} />
        <Route path="/pozycjonowanie/radom" element={<RadomSeoPage />} />
        <Route path="/pozycjonowanie/sosnowiec" element={<SosnowiecSeoPage />} />
        <Route path="/pozycjonowanie/torun" element={<TorunSeoPage />} />
        <Route path="/pozycjonowanie/kielce" element={<KielceSeoPage />} />
        <Route path="/pozycjonowanie/gliwice" element={<GliwiceSeoPage />} />
        <Route path="/pozycjonowanie/zabrze" element={<ZabrzeSeoPage />} />
        <Route path="/pozycjonowanie/olsztyn" element={<OlsztynSeoPage />} />
        <Route path="/pozycjonowanie/bielsko-biala" element={<BielskoBialaSeoPage />} />
        <Route path="/pozycjonowanie/rzeszow" element={<RzeszowSeoPage />} />
        <Route path="/pozycjonowanie/ruda-slaska" element={<RudaSlaskaSeoPage />} />
        <Route path="/pozycjonowanie/rybnik" element={<RybnikSeoPage />} />
        <Route path="/pozycjonowanie/tychy" element={<TychySeoPage />} />
        <Route path="/pozycjonowanie/dabrowa-gornicza" element={<DabrowaGorniczaSeoPage />} />
        <Route path="/pozycjonowanie/plock" element={<PlockSeoPage />} />
        <Route path="/pozycjonowanie/elblag" element={<ElblagSeoPage />} />
        <Route path="/pozycjonowanie/opole" element={<OpoleSeoPage />} />
        <Route path="/pozycjonowanie/gorzow-wielkopolski" element={<GorzowWielkopolskiSeoPage />} />
        <Route path="/pozycjonowanie/wloclawek" element={<WloclawekSeoPage />} />
        <Route path="/pozycjonowanie/zielona-gora" element={<ZielonaGoraSeoPage />} /> */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </>
  );
};

export default App;
