import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaPenNib, FaFileAlt, FaRegLightbulb, FaUsers, FaChartLine, FaBookOpen, FaLink, FaBullhorn } from 'react-icons/fa';
import SplineSEO from '@/components/SplineSEO';
import { useTheme } from '@/utils/themeContext';
import { useNavigate } from "react-router-dom";
import GlobalCTA from '@/components/GlobalCTA';
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight } from "lucide-react";
import LocalSeoSection from "@/components/LocalSeoSection";

const SeoCopywriting = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Usługa Copywriting SEO | Teksty na strony, sklepy, blogi | IDZTECH</title>
        <meta name="description" content="Skuteczny copywriting SEO dla stron internetowych, sklepów online i blogów. Tworzymy treści, które sprzedają i pozycjonują Twoją firmę w Google." />
        <meta name="keywords" content="copywriting SEO, teksty SEO, treści na strony, treści na sklepy internetowe, artykuły blogowe, opisy produktów, SEO Warszawa, pozycjonowanie stron, content marketing" />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - Copywriting SEO" />
        <meta property="og:description" content="Profesjonalne teksty, które sprzedają i pozycjonują. Wykorzystaj moc słów do zwiększenia widoczności w Google." />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/copywriting-seo" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDZTECH - Copywriting SEO" />
        <meta name="twitter:description" content="Profesjonalne teksty, które sprzedają i pozycjonują. Wykorzystaj moc słów do zwiększenia widoczności w Google." />
        <meta name="twitter:image" content="https://idztech.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://idztech.pl/copywriting-seo" />
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
              <span className="text-premium-blue font-medium">Copywriting SEO</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 bg-premium-gradient bg-clip-text text-transparent">
                Copywriting SEO
              </h1>
              <p className="text-premium-light/80 text-lg mb-8">
                Profesjonalne teksty, które sprzedają i pozycjonują. Wykorzystaj moc słów do zwiększenia widoczności w Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Zamów copywriting SEO
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
            <section className="py-16  text-premium-light">
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

      {/* Kafelki - rodzaje tekstów SEO */}
      <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-premium-purple font-medium">Rodzaje tekstów SEO</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Co piszemy?</h2>
          <p className="text-premium-light/70 text-lg">
            Tworzymy różnorodne treści SEO, które wspierają widoczność i konwersję Twojej strony:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaPenNib size={24} className="text-white" />, title: 'Treści na stronę główną', desc: 'Angażujące treści wprowadzające, prezentujące firmę i jej ofertę.' },
            { icon: <FaFileAlt size={24} className="text-white" />, title: 'Opisy kategorii i produktów', desc: 'Unikalne i perswazyjne opisy zwiększające współczynnik konwersji.' },
            { icon: <FaBookOpen size={24} className="text-white" />, title: 'Artykuły blogowe', desc: 'Wartościowe treści przyciągające użytkowników i budujące autorytet.' },
            { icon: <FaRegLightbulb size={24} className="text-white" />, title: 'Teksty na landing page', desc: 'Treści zorientowane na konwersję i działanie użytkownika.' },
            { icon: <FaChartLine size={24} className="text-white" />, title: 'Case studies i poradniki', desc: 'Rozbudowane materiały edukacyjne budujące wizerunek eksperta.' },
            { icon: <FaLink size={24} className="text-white" />, title: 'Treści contentowe na linkbuilding', desc: 'Artykuły sponsorowane i gościnne optymalizowane pod linkowanie.' },
            { icon: <FaUsers size={24} className="text-white" />, title: 'Teksty eksperckie', desc: 'Treści budujące zaufanie i pozycję lidera w branży.' },
            { icon: <FaBullhorn size={24} className="text-white" />, title: 'Opisy usług', desc: 'Przekonujące opisy usług, które sprzedają.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col items-center text-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}
            >
              <div className="h-14 w-14 bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 p-2">
                {item.icon}
              </div>
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-premium-light/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proces copywritingu SEO */}
      <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Jak tworzymy treści SEO?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Analiza słów kluczowych",
              description: "Badamy frazy i intencje użytkowników, aby dopasować treści do potrzeb."
            },
            {
              title: "2. Planowanie struktury",
              description: "Opracowujemy optymalną strukturę tekstu z nagłówkami i podpunktami."
            },
            {
              title: "3. Tworzenie treści",
              description: "Doświadczeni copywriterzy piszą angażujące, unikalne treści."
            },
            {
              title: "4. Optymalizacja i korekta",
              description: "Tekst przechodzi proces optymalizacji i korekty przed publikacją."
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
        title="Najczęściej zadawane pytania o copywriting SEO"
        items={[
          {
            question: 'Czym jest copywriting SEO?',
            answer: 'Copywriting SEO to tworzenie treści zoptymalizowanych pod wyszukiwarki, które jednocześnie angażują użytkownika i wspierają pozycjonowanie strony.'
          },
          {
            question: 'Jakie teksty można zamówić w ramach copywritingu SEO?',
            answer: 'Oferujemy m.in. treści na stronę główną, opisy kategorii i produktów, artykuły blogowe, teksty na landing page, case studies, teksty eksperckie i opisy usług.'
          },
          {
            question: 'Czy teksty są unikalne i dopasowane do mojej branży?',
            answer: 'Tak, każdy tekst powstaje na podstawie analizy Twojej branży, konkurencji i słów kluczowych. Gwarantujemy pełną unikalność i wysoką jakość.'
          },
          {
            question: 'Jak wygląda proces zamówienia tekstów SEO?',
            answer: 'Najpierw ustalamy potrzeby i cele, następnie przygotowujemy propozycję struktury i tematów, po akceptacji piszemy teksty i przekazujemy je do Twojej akceptacji.'
          },
          {
            question: 'Czy mogę zamówić teksty w dużej ilości lub cyklicznie?',
            answer: 'Tak, realizujemy zarówno pojedyncze zlecenia, jak i stałą współpracę z regularną publikacją treści.'
          },
          {
            question: 'Jak długo trwa realizacja zamówienia?',
            answer: 'Czas realizacji zależy od ilości i rodzaju tekstów, zwykle od 3 do 7 dni roboczych.'
          }
        ]}
        className="mb-0"
      />
      <GlobalCTA
        title="Gotowy na treści, które sprzedają i pozycjonują?"
        description="Zamów profesjonalny copywriting SEO i zacznij przyciągać więcej klientów!"
        buttons={[
          <Button 
            className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6"
            style={{animationDelay: "0.4s"}}
            size="lg"
            onClick={() => navigate('/contact')}
            key="cta-copywriting"
          >
            <span className="relative z-10 text-white">Zamów bezpłatną wycenę</span>
          </Button>
        ]}
      />
      <Footer />
    </div>
  );
};

export default SeoCopywriting;
