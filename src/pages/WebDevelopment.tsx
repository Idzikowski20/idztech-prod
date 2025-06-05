import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VerticalProcessSteps from '@/components/VerticalProcessSteps';
import { JavaScript, Css3, Html5, TypeScript, ReactIcon } from '@/components/TechnologyIcons';
import { useTheme } from '@/utils/themeContext';
import GlobalCTA from '@/components/GlobalCTA';
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';
import OgUrlMeta from "@/components/OgUrlMeta";

const WebDevelopment = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const features = [
    "Projektowanie responsywnych stron internetowych",
    "Optymalizacja szybkości ładowania strony",
    "Intuicyjny interfejs użytkownika",
    "Integracja z mediami społecznościowymi",
    "Konfiguracja Google Analytics",
    "Systemy zarządzania treścią (CMS)",
    "Formularze kontaktowe i mapy",
    "Projektowanie UX/UI",
    "SEO on-page",
    "Pomoc techniczna po wdrożeniu"
  ];

  const processSteps = [
    {
      title: "Analiza branży",
      description: "Przeprowadzamy dogłębną analizę branży i konkurencji, aby zidentyfikować kluczowe elementy.",
    },
    {
      title: "Planowanie treści",
      description: "Tworzymy szczegółowy plan treści z nagłówkami i podtytułami dostosowany do potrzeb SEO.",
    },
    {
      title: "Struktura linków",
      description: "Planujemy nawigację, menu i linkowanie wewnętrzne dla optymalnej struktury strony.",
    },
    {
      title: "Projekt wizualny",
      description: "Opracowujemy unikalny design dopasowany do Twojej marki i celów biznesowych.",
    },
    {
      title: "Tworzenie treści",
      description: "Tworzymy angażujące i zoptymalizowane pod SEO treści, które odpowiadają na potrzeby użytkowników.",
    },
    {
      title: "Wsparcie i rozwój",
      description: "Regularne aktualizacje, monitorowanie wydajności, analityka i raportowanie, ciągłe doskonalenie.",
    },
  ];

  return (
    <>
      <OgUrlMeta />
      <div className="min-h-screen ">
        <Helmet>
          <title>Tworzenie stron internetowych – Web design, strony firmowe, SEO</title>
          <meta name="description" content="Projektowanie i rozwój stron internetowych. Nowoczesne strony firmowe, sklepy internetowe, audyt SEO, optymalizacja, pozycjonowanie SEO i pozycjonowanie lokalne." />
          <meta name="keywords" content="pozycjonowanie seo, tworzenie stron internetowych, strona internetowa, sklep internetowy, audyt seo, pozycjonowanie lokalne" />
          {/* Open Graph */}
          <meta property="og:title" content="IDZTECH - Tworzenie stron internetowych" />
          <meta property="og:description" content="Tworzymy nowoczesne, responsywne i zoptymalizowane strony internetowe, które pomagają osiągać cele biznesowe i wyróżniać się na tle konkurencji." />
          <meta property="og:image" content="https://idztech.pl/banner.png" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="IDZTECH - Tworzenie stron internetowych" />
          <meta name="twitter:description" content="Tworzymy nowoczesne, responsywne i zoptymalizowane strony internetowe, które pomagają osiągać cele biznesowe i wyróżniać się na tle konkurencji." />
          <meta name="twitter:image" content="https://idztech.pl/banner.png" />
          {/* Robots */}
          <meta name="robots" content="index, follow" />
          {/* Canonical */}
          <link rel="canonical" href="https://idztech.pl/tworzenie-stron-www" />
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
        <section className="pt-32 pb-16 relative overflow-hidden">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-6">
                  Tworzenie stron <span className="text-transparent bg-clip-text bg-premium-gradient">internetowych</span>
                </h1>
                <p className="text-xl text-premium-light/70 mb-8 max-w-2xl">
                  Tworzymy nowoczesne, responsywne i zoptymalizowane strony internetowe, które 
                  pomagają osiągać cele biznesowe i wyróżniać się na tle konkurencji.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                    Skontaktuj się z nami
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`} onClick={() => navigate('/projects')}>
                    Zobacz nasze realizacje
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-full h-auto overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/2b029775-9244-410f-a9c5-b9b1e5f16c59.png" 
                    alt="Tworzenie stron internetowych - mockup" 
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-16 /50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-premium-purple font-medium mb-3">Co oferujemy</p>
              <h2 className="text-3xl md:text-4xl font-bold">Tworzenie stron internetowych</h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70">
                Oferujemy kompleksowe usługi tworzenia stron internetowych, które są nie tylko 
                atrakcyjne wizualnie, ale również funkcjonalne i zoptymalizowane.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="/60 border border-premium-light/10 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Strony WWW</h3>
                <p className="text-premium-light/70 mb-4">
                  Profesjonalne strony internetowe, które wyróżnią Twoją firmę w sieci i zwiększą konwersję.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Nowoczesny design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Responsywność na wszystkich urządzeniach</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Przyjazne dla SEO</span>
                  </li>
                </ul>
              </div>
              
              <div className="/60 border border-premium-light/10 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Strony firmowe</h3>
                <p className="text-premium-light/70 mb-4">
                  Profesjonalna wizytówka Twojej firmy w internecie z możliwością łatwej edycji treści.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Profesjonalna prezentacja oferty</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Łatwy system zarządzania treścią</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Formularze kontaktowe i mapy</span>
                  </li>
                </ul>
              </div>
              
              <div className="/60 border border-premium-light/10 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Landing pages</h3>
                <p className="text-premium-light/70 mb-4">
                  Skuteczne strony docelowe, zoptymalizowane pod kątem konwersji i generowania leadów.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Przekonująca struktura sprzedażowa</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Efektywne elementy call-to-action</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>A/B testing dla zwiększenia konwersji</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className={`py-16 ${theme === 'dark' ? '' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Technologie</h2>
              <p className={`text-xl ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} max-w-3xl mx-auto`}>
                W czym tworzymy strony internetowe?
              </p>
              <p className={`mt-4 text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Korzystamy z najnowszych technologii, aby zapewnić Ci szybką, bezpieczną i funkcjonalną stronę internetową.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <JavaScript />
                </div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>JavaScript</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <Css3 />
                </div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>CSS3</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <Html5 />
                </div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>HTML5</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <TypeScript />
                </div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>TypeScript</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <ReactIcon />
                </div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>React</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-premium-purple font-medium mb-3">Proces tworzenia</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kroki do stworzenia strony internetowej</h2>
              <p className="text-lg max-w-3xl mx-auto text-premium-light/70">
                Poznaj etapy tworzenia skutecznej strony internetowej, która będzie wspierać Twój biznes.
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              {/* pionowa linia */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-premium-gradient -translate-x-1/2 z-0"></div>
              <div className="flex flex-col gap-16">
                {processSteps.map((step, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 md:order-1' : 'md:pl-8 md:order-2'} flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}> 
                      <div className="/60 border border-premium-light/10 rounded-xl p-6 shadow-lg max-w-md w-full z-10">
                        <div className="flex items-center mb-2">
                          <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center text-white m-4">
                            {idx + 1}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-premium-light/70">{step.description}</p>
                      </div>
                    </div>
                    {/* Punkt na osi */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-premium-gradient border-4 border-white z-20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-premium-purple font-medium mb-3">Co otrzymasz</p>
              <h2 className="text-3xl md:text-4xl font-bold">Funkcjonalności stron internetowych</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="/60 border border-premium-light/10 rounded-xl p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-lg text-white/90 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-premium-purple font-medium mb-3">Plan działania</p>
              <h2 className="text-3xl md:text-4xl font-bold">Agenda</h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70">
                Poznaj szczegółowy plan działania, który realizujemy dla każdego projektu strony internetowej.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="/60 border-premium-light/10">
                <CardHeader>
                  <CardTitle>1. Analiza i strategia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Określenie celów biznesowych strony</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Analiza konkurencji i rynku</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Określenie grupy docelowej</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Strategia pozycjonowania</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="/60 border-premium-light/10">
                <CardHeader>
                  <CardTitle>2. Projektowanie UX/UI</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Wireframing i prototypowanie</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Projektowanie interfejsu użytkownika</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Optymalizacja ścieżek użytkownika</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Design responsywny</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="/60 border-premium-light/10">
                <CardHeader>
                  <CardTitle>3. Implementacja i rozwój</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Kodowanie frontendu i backendu</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Implementacja CMS</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Optymalizacja wydajności</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Testowanie funkcjonalności</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="/60 border-premium-light/10">
                <CardHeader>
                  <CardTitle>4. SEO i treści</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Optymalizacja on-page SEO</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Tworzenie treści zorientowanych na konwersję</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Optymalizacja meta tagów</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Analiza słów kluczowych</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="/60 border-premium-light/10">
                <CardHeader>
                  <CardTitle>5. Wdrożenie i testy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Konfiguracja serwera i domeny</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Testowanie użyteczności</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Testowanie na różnych urządzeniach</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Audyt przed publikacją</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="/60 border-premium-light/10">
                <CardHeader>
                  <CardTitle>6. Wsparcie i rozwój</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Regularne aktualizacje</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Monitorowanie wydajności</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Analityka i raportowanie</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Ciągłe doskonalenie</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FAQAccordion
          title="Najczęściej zadawane pytania o strony internetowe"
          items={[
            {
              question: 'Ile trwa stworzenie strony internetowej?',
              answer: 'Standardowo od 2 do 4 tygodni, w zależności od złożoności projektu.'
            },
            {
              question: 'Czy strona będzie responsywna?',
              answer: 'Tak, każda strona jest w pełni responsywna i dostosowana do urządzeń mobilnych.'
            },
            {
              question: 'Czy mogę samodzielnie edytować treści na stronie?',
              answer: 'Tak, wdrażamy intuicyjne systemy CMS umożliwiające łatwą edycję treści.'
            },
            {
              question: 'Czy pomagacie w wyborze hostingu i domeny?',
              answer: 'Tak, doradzamy i pomagamy w wyborze oraz konfiguracji hostingu i domeny.'
            },
            {
              question: 'Czy strona będzie zoptymalizowana pod SEO?',
              answer: 'Tak, dbamy o optymalizację techniczną i przygotowanie strony pod pozycjonowanie.'
            },
            {
              question: 'Czy oferujecie wsparcie po wdrożeniu?',
              answer: 'Tak, zapewniamy wsparcie techniczne, aktualizacje i rozwój strony po uruchomieniu.'
            }
          ]}
          className="mb-0"
        />
        <GlobalCTA
          title="Gotowy na profesjonalną stronę internetową?"
          description="Skontaktuj się z nami już dziś i rozpocznijmy pracę nad Twoją nową stroną, która będzie przyciągać klientów i zwiększać sprzedaż."
          buttons={[
            <Button 
              onClick={() => navigate('/contact')} 
              className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6"
              size="lg"
              key="cta-contact"
            >
              Skontaktuj się z nami
            </Button>
          ]}
        />
        <Footer />
      </div>
    </>
  );
};

export default WebDevelopment;
