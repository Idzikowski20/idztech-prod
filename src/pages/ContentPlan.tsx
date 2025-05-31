import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaChartBar, FaSearch, FaUsers, FaCalendarAlt, FaHeading, FaClipboardCheck } from 'react-icons/fa';
import SplineSEO from '@/components/SplineSEO';
import { useTheme } from '@/utils/themeContext';
import { useNavigate } from 'react-router-dom';
import GlobalCTA from '@/components/GlobalCTA';
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight } from "lucide-react";

const ContentPlan = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Content Plan | Tworzenie treści pod SEO | IDZTECH</title>
        <meta name="description" content="Opracujemy dla Ciebie profesjonalny content plan – strategię treści, harmonogram publikacji i wytyczne SEO. Buduj widoczność i autorytet marki w internecie." />
        <meta name="keywords" content="content plan, strategia treści, content marketing, planowanie treści, SEO, pozycjonowanie, marketing internetowy, harmonogram publikacji, Warszawa" />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - Content Plan" />
        <meta property="og:description" content="Strategiczne planowanie treści dla Twojego biznesu. Zbuduj silną obecność w sieci dzięki przemyślanej strategii content marketingu." />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/content-plan" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDZTECH - Content Plan" />
        <meta name="twitter:description" content="Strategiczne planowanie treści dla Twojego biznesu. Zbuduj silną obecność w sieci dzięki przemyślanej strategii content marketingu." />
        <meta name="twitter:image" content="https://idztech.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://idztech.pl/content-plan" />
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
              <span className="text-premium-blue font-medium">Content Plan</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 bg-premium-gradient bg-clip-text text-transparent">
                Content Plan
              </h1>
              <p className="text-premium-light/80 text-lg mb-8">
                Strategiczne planowanie treści dla Twojego biznesu. Zbuduj silną obecność w sieci dzięki przemyślanej strategii content marketingu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Zamów content plan
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

      {/* Kafelki - co zawiera content plan */}
      <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-premium-purple font-medium">Co zawiera content plan?</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Elementy profesjonalnego content planu</h2>
          <p className="text-premium-light/70 text-lg">
            Otrzymasz kompletny plan działań content marketingowych, który pozwoli Ci skutecznie budować widoczność i autorytet marki:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaChartBar size={24} className="text-white" />, title: 'Analiza konkurencji', desc: 'Badanie treści konkurencji i identyfikacja luk do wykorzystania.' },
            { icon: <FaSearch size={24} className="text-white" />, title: 'Badanie słów kluczowych', desc: 'Określenie fraz, na które warto pozycjonować treści.' },
            { icon: <FaUsers size={24} className="text-white" />, title: 'Segmentacja odbiorców', desc: 'Precyzyjne określenie grup docelowych i ich potrzeb.' },
            { icon: <FaCalendarAlt size={24} className="text-white" />, title: 'Harmonogram publikacji', desc: 'Dokładny kalendarz treści na minimum 3 miesiące.' },
            { icon: <FaHeading size={24} className="text-white" />, title: 'Tematy i nagłówki', desc: 'Propozycje konkretnych tematów artykułów i nagłówków.' },
            { icon: <FaClipboardCheck size={24} className="text-white" />, title: 'Wytyczne dla treści', desc: 'Szczegółowe wskazówki dotyczące stylu, formatu i optymalizacji.' },
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

      {/* Proces content planu */}
      <section className="py-16 px-4 md:px-8 lg:px-16 container mx-auto rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Proces tworzenia content planu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "1. Analiza wstępna",
              description: "Badamy Twoją branżę, konkurencję i potrzeby odbiorców."
            },
            {
              title: "2. Badanie słów kluczowych",
              description: "Identyfikujemy frazy kluczowe o najwyższym potencjale."
            },
            {
              title: "3. Strategia treści",
              description: "Tworzymy spójną strategię content marketingową."
            },
            {
              title: "4. Harmonogram i wytyczne",
              description: "Opracowujemy szczegółowy plan publikacji z wytycznymi."
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
        title="Najczęściej zadawane pytania dot. content planu"
        items={[
          {
            question: 'Czym jest content plan i dlaczego jest ważny?',
            answer: 'Content plan to szczegółowy harmonogram i strategia publikacji treści, które pomagają budować widoczność marki, przyciągać klientów i realizować cele biznesowe. Pozwala działać systematycznie i skutecznie.'
          },
          {
            question: 'Co zawiera profesjonalny content plan?',
            answer: 'Otrzymasz analizę konkurencji, badanie słów kluczowych, segmentację odbiorców, harmonogram publikacji, propozycje tematów i nagłówków oraz wytyczne dla treści.'
          },
          {
            question: 'Jak wygląda proces tworzenia content planu?',
            answer: 'Najpierw analizujemy branżę i konkurencję, następnie badamy słowa kluczowe, opracowujemy strategię treści i przygotowujemy harmonogram oraz szczegółowe wytyczne.'
          },
          {
            question: 'Czy content plan obejmuje propozycje tematów i harmonogram publikacji?',
            answer: 'Tak, w ramach content planu otrzymasz konkretne propozycje tematów artykułów, nagłówków oraz szczegółowy harmonogram publikacji na minimum 3 miesiące.'
          },
          {
            question: 'Czy mogę zamówić content plan dla dowolnej branży?',
            answer: 'Tak, przygotowujemy content plany dla firm z różnych branż – zarówno B2B, jak i B2C. Każdy plan jest indywidualnie dopasowany.'
          },
          {
            question: 'Jak długo trwa przygotowanie content planu?',
            answer: 'Standardowo przygotowanie content planu trwa od 5 do 10 dni roboczych, w zależności od zakresu i branży.'
          }
        ]}
        className="mb-0"
      />
      <GlobalCTA
        title="Gotowy na strategiczne podejście do treści?"
        description="Zamów profesjonalny content plan i zacznij budować swoją obecność w sieci!"
        buttons={[
          <Button 
            className="bg-premium-gradient hover:opacity-90 transition-opacity animate-fade-in group relative overflow-hidden"
            style={{animationDelay: "0.4s"}}
            size="lg"
            onClick={() => navigate('/contact')}
            key="cta-contentplan"
          >
            <span className="relative z-10 text-white">Zamów bezpłatną konsultację</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        ]}
      />
      <Footer />
    </div>
  );
};

export default ContentPlan;
