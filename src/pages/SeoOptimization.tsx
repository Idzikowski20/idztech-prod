import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { FaCogs, FaFileAlt, FaRegLightbulb, FaMobileAlt, FaChartLine, FaUsers, FaSearch, FaBug } from 'react-icons/fa';
import SplineSEO from '@/components/SplineSEO';
import { useTheme } from '@/utils/themeContext';
import { useNavigate } from 'react-router-dom';
import GlobalCTA from '@/components/GlobalCTA';
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight } from "lucide-react";
import LocalSeoSection from "@/components/LocalSeoSection";

const SeoOptimization = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Optymalizacja SEO | Pozycjonowanie stron | IDZTECH</title>
        <meta name="description" content="Profesjonalna optymalizacja SEO stron internetowych w Warszawie. Zwiększ widoczność w Google, popraw pozycje i zdobądź więcej klientów dzięki skutecznym działaniom SEO." />
        <meta name="keywords" content="optymalizacja SEO, pozycjonowanie stron, SEO Warszawa, optymalizacja stron internetowych, audyt SEO, SEO on-page, SEO off-page, Google SEO, pozycjonowanie w Google" />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - Optymalizacja SEO" />
        <meta property="og:description" content="Profesjonalna optymalizacja strony to klucz do wysokich pozycji. Wykorzystaj naszą wiedzę, aby poprawić widoczność w Google." />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/optymalizacja-seo" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDZTECH - Optymalizacja SEO" />
        <meta name="twitter:description" content="Profesjonalna optymalizacja strony to klucz do wysokich pozycji. Wykorzystaj naszą wiedzę, aby poprawić widoczność w Google." />
        <meta name="twitter:image" content="https://idztech.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://idztech.pl/optymalizacja-seo" />
        {/* Schema.org Organization */}
        <script type="application/ld+json">{`
          {"@context": "https://schema.org","@type": "Organization","name": "IDZTECH","url": "https://idztech.pl","logo": "https://idztech.pl/logo.png"}
        `}</script>
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona główna",
                "item": "https://idztech.pl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Strony internetowe",
                "item": "https://idztech.pl/tworzenie-stron-www"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Sklepy internetowe",
                "item": "https://idztech.pl/sklepy-internetowe"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Pozycjonowanie SEO",
                "item": "https://idztech.pl/pozycjonowanie-stron"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Kontakt",
                "item": "https://idztech.pl/contact"
              }
            ]
          }
        `}</script>
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-premium-blue font-medium">Optymalizacja SEO</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 bg-premium-gradient bg-clip-text text-transparent">
                Optymalizacja SEO
              </h1>
              <p className="text-premium-light/80 text-lg mb-8">
                Profesjonalna optymalizacja strony to klucz do wysokich pozycji. Wykorzystaj naszą wiedzę, aby poprawić widoczność w Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Zamów optymalizację SEO
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`} onClick={() => navigate('/projects')}>
                  Zobacz nasze realizacje
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              {/* Desktop/tablet układ */}
              <div className="w-full h-[220px] sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg mt-6 relative hidden md:flex">
                {/* SVG statystyki wokół zdjęcia */}
                <img src="/lovable-uploads/seo1.svg" alt="Statystyka 1" className="m-[10px] absolute left-0 top-8 w-32 md:w-40 z-20 shadow-md rounded-lg animate-float-1" />
                <img src="/lovable-uploads/seo2.svg" alt="Statystyka 2" className="m-[10px] absolute right-0 top-0 w-24 w-[10rem] mt-[20px] z-20 shadow-md rounded-lg animate-float-2" />
                <img src="/lovable-uploads/seo3.svg" alt="Statystyka 3" className="m-[10px] absolute right-0 bottom-0 w-28 md:w-36 z-20 shadow-md rounded-lg animate-float-3" />
                {/* Centralne zdjęcie */}
                <img src="/lovable-uploads/seo.png" alt="SEO dashboard" className="relative z-10 w-40 w-[20rem] rounded-xl" />
              </div>
              {/* Mobile układ */}
              <div className="w-full flex flex-col items-center justify-center md:hidden">
                {/* Centralne zdjęcie z opacity 0 */}
                <img src="/lovable-uploads/seo.png" alt="SEO dashboard" className="w-full w-[18rem] rounded-xl" />
                {/* Statystyki w rzędzie pod spodem */}
                <div className="flex flex-row gap-4 w-full h-full justify-center">
                  <img src="/lovable-uploads/seo1.svg" alt="Statystyka 1" className="w-[10rem] m-[5px] shadow-md rounded-lg" />
                  <img src="/lovable-uploads/seo2.svg" alt="Statystyka 2" className="w-[10rem] m-[5px] shadow-md rounded-lg" />
                  <img src="/lovable-uploads/seo3.svg" alt="Statystyka 3" className="w-20 shadow-md rounded-lg display-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Nowa sekcja: Czym jest SEO i jak może pomóc Twojej firmie? */}
            <section className="py-16 bg-premium-dark text-premium-light">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          {/* Lewa kolumna */}
          <div className="flex-1 max-w-2xl">
            <span className="font-semibold uppercase text-premium-purple font-medium text-sm mb-4 block tracking-wider">Kilka słów o SEO</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Czym jest SEO i jak może <span className="text-premium-orange">wesprzeć Twój biznes?</span>
            </h2>
            <p className="mb-6 text-premium-light/80 text-base">
              SEO (Search Engine Optimization) to proces optymalizacji stron internetowych pod kątem wyszukiwarek, mający na celu zwiększenie widoczności Twojej firmy w Google. W Polsce często określane jako pozycjonowanie stron.
            </p>
            <p className="mb-4 text-premium-light/80 text-base">
              W praktyce SEO to szereg działań na stronie i poza nią, które mają przekonać Google, że to właśnie Twoja strona powinna być wyżej w wynikach wyszukiwania. Dlaczego to takie istotne?
            </p>
            <p className="text-premium-light/70 text-base">
              Dziś większość klientów szuka rozwiązań swoich problemów w Google. Jeśli Twoja strona pojawia się wysoko, zyskujesz zaufanie i realny ruch, który może przełożyć się na wzrost sprzedaży i rozpoznawalności marki.
            </p>
          </div>
          {/* Prawa kolumna */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-premium-light mb-1">Realnie zwiększasz ruch na stronie</h3>
                <p className="text-premium-light/70 text-base">Dzięki skutecznym strategiom SEO zauważysz wzrost odwiedzin, co przekłada się na większą widoczność w sieci.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-premium-light mb-1">Pozyskujesz wartościowych klientów</h3>
                <p className="text-premium-light/70 text-base">Dzięki analizie słów kluczowych docierasz do osób faktycznie zainteresowanych Twoją ofertą, co zwiększa szanse na konwersję.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-premium-light mb-1">Budujesz przewagę nad konkurencją</h3>
                <p className="text-premium-light/70 text-base">Dzięki SEO Twoja strona może wyprzedzić konkurencję w Google i stać się liderem w branży online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kafelki - zakres optymalizacji */}
      <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-premium-purple font-medium">Co obejmuje optymalizacja SEO?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Zakres optymalizacji SEO</h2>
          <p className="text-premium-light/70 text-lg">
            Optymalizacja SEO to kompleksowe działania techniczne, treściowe i UX. Oto, co robimy:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaCogs size={24} className="text-white" />, title: 'Optymalizacja techniczna', desc: 'Eliminacja błędów technicznych, poprawa indeksacji i struktury strony.' },
            { icon: <FaFileAlt size={24} className="text-white" />, title: 'Optymalizacja treści', desc: 'Dostosowanie treści do wymogów SEO i intencji użytkowników.' },
            { icon: <FaRegLightbulb size={24} className="text-white" />, title: 'Optymalizacja UX', desc: 'Poprawa doświadczeń użytkownika i wskaźników behawioralnych.' },
            { icon: <FaMobileAlt size={24} className="text-white" />, title: 'Optymalizacja mobilna', desc: 'Dostosowanie strony do urządzeń mobilnych zgodnie z Mobile-First Index.' },
            { icon: <FaChartLine size={24} className="text-white" />, title: 'Analiza konkurencji', desc: 'Porównanie z konkurencją i wskazanie przewag.' },
            { icon: <FaUsers size={24} className="text-white" />, title: 'Dostępność', desc: 'Analiza dostępności strony dla wszystkich użytkowników.' },
            { icon: <FaSearch size={24} className="text-white" />, title: 'Audyt SEO', desc: 'Kompleksowy audyt SEO strony, identyfikacja problemów i blokad.' },
            { icon: <FaBug size={24} className="text-white" />, title: 'Wykrywanie błędów', desc: 'Identyfikacja i eliminacja błędów blokujących widoczność.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col items-center text-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}
            >
              <div className="h-14 w-14 bg-premium-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 p-2">
                {item.icon}
              </div>
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-premium-light/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proces optymalizacji SEO */}
      <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Jak wygląda proces optymalizacji SEO?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Audyt początkowy",
              description: "Kompleksowy audyt SEO strony, identyfikacja problemów i blokad."
            },
            {
              title: "2. Plan optymalizacji",
              description: "Przygotowanie szczegółowego planu działań optymalizacyjnych."
            },
            {
              title: "3. Implementacja zmian",
              description: "Wdrożenie rekomendacji i wykonanie niezbędnych poprawek."
            },
            {
              title: "4. Monitorowanie efektów",
              description: "Analiza rezultatów i dostosowywanie strategii w razie potrzeby."
            }
          ].map((step, index) => (
            <Card key={index} className="border border-premium-dark/10 transition-all hover:border-premium-purple rounded-xl animate-fade-in bg-transparent" style={{ animationDelay: `${0.5 + (index * 0.2)}s` }}>
              <CardContent className="p-8 bg-transparent">
                <h3 className="text-xl font-bold mb-4 text-premium-purple">{step.title}</h3>
                <p className="text-premium-light/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <LocalSeoSection />

      <FAQAccordion
        title="Najczęściej zadawane pytania o optymalizację SEO"
        items={[
          {
            question: 'Jak szybko zauważę efekty optymalizacji SEO?',
            answer: 'Pierwsze efekty można zaobserwować po 4-6 tygodniach, ale pełne rezultaty są widoczne po 3-6 miesiącach.'
          },
          {
            question: 'Czy optymalizacja SEO jest jednorazowa?',
            answer: 'Optymalizacja SEO to proces ciągły. Po wdrożeniu głównych zmian zaleca się regularne monitorowanie i dostosowywanie strategii.'
          },
          {
            question: 'Czy optymalizacja SEO obejmuje również tworzenie treści?',
            answer: 'Optymalizacja może obejmować dostosowanie istniejących treści. Tworzenie nowych treści realizowane jest jako oddzielna usługa copywritingu SEO.'
          },
          {
            question: 'Jak mierzycie efekty optymalizacji SEO?',
            answer: 'Efekty mierzymy poprzez monitorowanie pozycji w wyszukiwarce, wzrost ruchu organicznego, poprawę współczynników konwersji i innych KPI.'
          }
        ]}
        className="mb-0"
      />
      <GlobalCTA
        title="Gotowy na lepszą widoczność w Google?"
        description="Zamów profesjonalną optymalizację SEO i zacznij przyciągać więcej klientów!"
        buttons={[
          <Button 
            className="bg-premium-gradient hover:opacity-90 transition-opacity animate-fade-in group relative overflow-hidden"
            style={{animationDelay: "0.4s"}}
            size="lg"
            onClick={() => navigate('/contact')}
            key="cta-seoopt"
          >
            <span className="relative z-10 text-white">Zamów bezpłatną wycenę</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        ]}
      />
      <Footer />
    </div>
  );
};

export default SeoOptimization;
