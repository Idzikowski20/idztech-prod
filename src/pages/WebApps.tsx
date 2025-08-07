import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { JavaScript, Css3, Html5, TypeScript, ReactIcon } from '@/components/TechnologyIcons';
import GlobalCTA from '@/components/GlobalCTA';
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';
import OgUrlMeta from "@/components/OgUrlMeta";

const WebApps = () => {
  const navigate = useNavigate();

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
          <title>Aplikacje webowe – Rozwój aplikacji internetowych, SaaS, SEO</title>
          <meta name="description" content="Tworzymy dedykowane aplikacje webowe dla firm. Rozwój aplikacji internetowych, platformy webowe, pozycjonowanie SEO, audyt SEO, optymalizacja i sklepy internetowe." />
          <meta name="keywords" content="pozycjonowanie seo, tworzenie stron internetowych, strona internetowa, sklep internetowy, audyt seo, pozycjonowanie lokalne" />
          {/* Open Graph */}
          <meta property="og:title" content="IDZTECH - Aplikacje webowe" />
          <meta property="og:description" content="Tworzymy nowoczesne, responsywne i zoptymalizowane aplikacje internetowe, które wspierają rozwój biznesu i automatyzują procesy w firmach." />
          <meta property="og:image" content="https://idztech.pl/banner.png" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="IDZTECH - Aplikacje webowe" />
          <meta name="twitter:description" content="Tworzymy nowoczesne, responsywne i zoptymalizowane aplikacje internetowe, które wspierają rozwój biznesu i automatyzują procesy w firmach." />
          <meta name="twitter:image" content="https://idztech.pl/banner.png" />
          {/* Robots */}
          <meta name="robots" content="index, follow" />
          {/* Canonical */}
          <link rel="canonical" href="https://idztech.pl/aplikacje-webowe" />
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
        <section className="min-h-[40vh] pt-32 pb-16 relative overflow-hidden">
          {/* Background elements */}
          {/* <div className="max-md:hidden absolute top-0 right-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[120px] -z-10"></div> */}
          <div className="max-md:hidden absolute bottom-[10rem] left-0 w-96 h-96 bg-premium-pink/20 rounded-full blur-[120px] -z-10"></div>
          
          <div className="container mx-auto px-4 lg:px-8 overflow-hidden">
          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full h-full animate-fade-in">
                <span className="text-main font-medium">SaaS Development</span>
                <h1 className="text-4xl lg:text-4xl font-bold mt-4 mb-6 ">
                Tworzymy aplikacje <mark className="text-main">webowe</mark>, które są intuicyjne i skalowalne, dostosowane do Twoich potrzeb.
                </h1>
                <p className="text-lg mb-8">
                Projektujemy i rozwijamy nowoczesne aplikacje internetowe, platformy webowe oraz oprogramowanie webowe na zamówienie. Wspieramy firmy w cyfrowej transformacji, automatyzacji procesów i rozwoju biznesu online.
                </p>
                <div className="w-full h-full flex flex-col sm:flex-row gap-4 mb-10">
                  <Button className="bg-wave from-[#00a0ff00] bg-gradient-to-br  via-premium-purple-500  hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                    Skontaktuj się z nami
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white`} onClick={() => navigate('/projects')}>
                    Zobacz nasze realizacje
                  </Button>
                </div>
              </div>
              
              <div className="w-full h-full relative animate-slide-up">
                <div className="w-full h-full overflow-hidden rounded-lg animate-float-1 aspect-[1.3]">
                  <img 
                    src="/images/shop-image.svg" 
                    alt="Sklep internetowy - mockup" 
                    className="w-full h-full object-cover rounded-lg"
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
              <h2 className="text-3xl md:text-4xl font-bold">Aplikacje webowe na miarę Twojego biznesu</h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70">
                Oferujemy kompleksowy rozwój aplikacji internetowych, platform webowych i dedykowanego oprogramowania webowego dla firm. Każda aplikacja jest responsywna, bezpieczna i zoptymalizowana pod SEO.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="/60 border border-premium-light/10 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Aplikacje internetowe</h3>
                <p className="text-premium-light/70 mb-4">
                  Dedykowane aplikacje webowe, które automatyzują procesy, wspierają sprzedaż i rozwój firmy online.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Web app development</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Responsywność i bezpieczeństwo</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Optymalizacja SEO</span>
                  </li>
                </ul>
              </div>
              <div className="/60 border border-premium-light/10 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Platformy webowe</h3>
                <p className="text-premium-light/70 mb-4">
                  Rozwijamy zaawansowane platformy webowe i systemy B2B/B2C, które skalują się wraz z Twoim biznesem.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Oprogramowanie webowe na zamówienie</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Integracje z zewnętrznymi systemami</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Wsparcie techniczne dla firm</span>
                  </li>
                </ul>
              </div>
              <div className="/60 border border-premium-light/10 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Aplikacje dla firm</h3>
                <p className="text-premium-light/70 mb-4">
                  Tworzymy aplikacje webowe na zamówienie, które wspierają rozwój firm i automatyzują codzienne zadania.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Aplikacje na zamówienie</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Rozwój aplikacji webowych</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-premium-purple mr-2 mt-1" />
                    <span>Optymalizacja e-biznesu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className={`py-16`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-white`}>Technologie</h2>
              <p className={`text-xl max-w-3xl mx-auto`}>
                W czym tworzymy aplikacje webowe?
              </p>
              <p className={`mt-4 text-lg max-w-3xl mx-auto`}>
                Korzystamy z najnowszych technologii, aby zapewnić Ci wydajne, bezpieczne i skalowalne aplikacje internetowe.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <JavaScript />
                </div>
                <p className={`font-medium text-white`}>JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <Css3 />
                </div>
                <p className={`font-medium text-white`}>CSS3</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <Html5 />
                </div>
                <p className={`font-medium text-white`}>HTML5</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <TypeScript />
                </div>
                <p className={`font-medium text-white`}>TypeScript</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-3">
                  <ReactIcon />
                </div>
                <p className={`font-medium text-white`}>React</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-premium-purple font-medium mb-3">Proces tworzenia</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak powstają aplikacje webowe?</h2>
              <p className="text-lg max-w-3xl mx-auto text-premium-light/70">
                Poznaj etapy rozwoju aplikacji internetowych – od analizy potrzeb, przez projektowanie UX/UI, po wdrożenie i wsparcie techniczne.
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              {/* pionowa linia */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  -translate-x-1/2 z-0"></div>
              <div className="flex flex-col gap-16">
                {processSteps.map((step, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 md:order-1' : 'md:pl-8 md:order-2'} flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className="/60 border border-premium-light/10 rounded-xl p-6 shadow-lg max-w-md w-full z-10">
                        <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  flex items-center justify-center text-white m-4">
                            {idx + 1}
                          </div>
                          <h3 className="text-xl font-bold">{step.title.replace('stron', 'aplikacji webowych').replace('strony', 'aplikacji webowej')}</h3>
                        </div>
                        <p className="text-premium-light/70">{step.description.replace('strony', 'aplikacji webowej').replace('stron', 'aplikacji webowych').replace('stronę', 'aplikację webową').replace('stronami', 'aplikacjami webowymi')}</p>
                      </div>
                    </div>
                    {/* Punkt na osi */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  border-4 border-white z-20"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold">Funkcjonalności aplikacji webowych</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="/60 border border-premium-light/10 rounded-xl p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  flex items-center justify-center mb-4">
                    <Check size={20} className="text-white" />
                  </div>
                  <p className="text-lg text-white/90 font-medium">{feature.replace('stron', 'aplikacji webowych').replace('strony', 'aplikacji webowej').replace('stronę', 'aplikację webową').replace('stronami', 'aplikacjami webowymi')}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold">Agenda projektu aplikacji webowej</h2>
              <p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70">
                Poznaj szczegółowy plan działania, który realizujemy dla każdego projektu aplikacji internetowej.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="/60 border-premium-light/10">
                <CardHeader>
                  <CardTitle className='text-white'>1. Analiza i strategia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={18} className="text-premium-purple mr-2 mt-1" />
                      <span>Określenie celów biznesowych aplikacji</span>
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
                  <CardTitle className='text-white'>2. Projektowanie UX/UI</CardTitle>
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
                  <CardTitle className='text-white'>3. Implementacja i rozwój</CardTitle>
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
                  <CardTitle className='text-white'>4. SEO i treści</CardTitle>
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
                  <CardTitle className='text-white'>5. Wdrożenie i testy</CardTitle>
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
                  <CardTitle className='text-white'>6. Wsparcie i rozwój</CardTitle>
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

        {/* FAQ Section */}
        <FAQAccordion
          title="Najczęściej zadawane pytania o aplikacje webowe"
          items={[
            {
              question: 'Ile trwa stworzenie aplikacji webowej?',
              answer: 'Standardowo od 4 do 8 tygodni, w zależności od złożoności projektu i wymagań biznesowych.'
            },
            {
              question: 'Czy aplikacja webowa będzie responsywna?',
              answer: 'Tak, każda aplikacja jest w pełni responsywna i dostosowana do urządzeń mobilnych.'
            },
            {
              question: 'Czy mogę samodzielnie zarządzać aplikacją webową?',
              answer: 'Tak, wdrażamy intuicyjne panele administracyjne umożliwiające łatwe zarządzanie aplikacją.'
            },
            {
              question: 'Czy pomagacie w integracji z innymi systemami?',
              answer: 'Tak, integrujemy aplikacje webowe z zewnętrznymi systemami, API i narzędziami biznesowymi.'
            },
            {
              question: 'Czy aplikacja będzie zoptymalizowana pod SEO?',
              answer: 'Tak, dbamy o optymalizację techniczną i przygotowanie aplikacji pod pozycjonowanie w Google.'
            },
            {
              question: 'Czy oferujecie wsparcie po wdrożeniu?',
              answer: 'Tak, zapewniamy wsparcie techniczne, aktualizacje i rozwój aplikacji po uruchomieniu.'
            }
          ]}
          className="mb-0"
        />
        <GlobalCTA
          title="Potrzebujesz dedykowanej aplikacji webowej?"
          description="Skontaktuj się z nami, aby otrzymać indywidualną wycenę i rozpocząć rozwój nowoczesnej aplikacji internetowej dla Twojej firmy."
          buttons={[
            <Button 
              onClick={() => navigate('/contact')} 
              className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6"
              size="lg"
              key="cta-contact"
            >
              Skontaktuj się z nami
            </Button>
          ]}
        />
      </div>
    </>
  );
};

export default WebApps;
