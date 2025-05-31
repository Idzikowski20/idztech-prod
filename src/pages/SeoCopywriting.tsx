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
                <Button className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Zamów copywriting SEO
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`} onClick={() => navigate('/projects')}>
                  Zobacz nasze realizacje
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="w-full h-[220px] sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg mt-6">
                <SplineSEO />
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
              <div className="h-14 w-14 bg-premium-gradient rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 p-2">
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
            className="bg-premium-gradient hover:bg-transparent transition-opacity animate-fade-in group relative overflow-hidden"
            style={{animationDelay: "0.4s"}}
            size="lg"
            onClick={() => navigate('/contact')}
            key="cta-copywriting"
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

export default SeoCopywriting;
