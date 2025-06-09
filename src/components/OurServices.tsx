import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Code, ShoppingCart, Search, MapPin, FileText, Component, BarChart3 } from 'lucide-react';
import { useTheme } from '@/utils/themeContext';


const OurServices = () => {
  const { theme } = useTheme();
  const touchStartYRef = React.useRef(0);
  const navigate = useNavigate();

  const handleTouchStart = (e) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e, link) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = Math.abs(touchEndY - touchStartYRef.current);
    if (diff < 10) {
      // To był tap, przekieruj
      window.location.href = link;
    }
    // Jeśli diff >= 10, to był scroll – nie rób nic
  };

  const services = [
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <Code className="text-white" size={28} />
        </div>
      ),
      title: "Tworzenie stron internetowych",
      description: "Projektujemy i tworzymy profesjonalne, szybkie i responsywne strony internetowe.",
      link: "/tworzenie-stron-internetowych"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <ShoppingCart className="text-white" size={28} />
        </div>
      ),
      title: "Tworzenie sklepów internetowych",
      description: "Kompleksowe rozwiązania e-commerce dostosowane do potrzeb Twojego biznesu.",
      link: "/sklepy-internetowe"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <Component className="text-white" size={28} />
        </div>
      ),
      title: "Aplikacje Webowe SaaS",
      description: "Projektujemy i wdrażamy nowoczesne aplikacje webowe oraz platformy SaaS dla firm.",
      link: "/aplikacje-webowe"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <Search className="text-white" size={28} />
        </div>
      ),
      title: "Pozycjonowanie SEO",
      description: "Poprawimy widoczność Twojej strony w wyszukiwarce Google i zwiększymy organiczny ruch.",
      link: "/pozycjonowanie-stron"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <MapPin className="text-white" size={28} />
        </div>
      ),
      title: "Pozycjonowanie lokalne",
      description: "Zwiększ widoczność swojego biznesu w lokalnych wynikach wyszukiwania Google.",
      link: "/pozycjonowanie-lokalne"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <FileText className="text-white" size={28} />
        </div>
      ),
      title: "Audyt SEO",
      description: "Szczegółowa analiza Twojej strony pod kątem SEO z konkretnymi rekomendacjami zmian.",
      link: "/audyt-seo"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <BarChart3 className="text-white" size={28} />
        </div>
      ),
      title: "Optymalizacja SEO",
      description: "Kompleksowa optymalizacja techniczna Twojej strony pod kątem wymagań wyszukiwarek.",
      link: "/optymalizacja-seo"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <Component className="text-white" size={28} />
        </div>
      ),
      title: "Copywriting SEO",
      description: "Tworzenie angażujących treści zoptymalizowanych pod kątem wyszukiwarek.",
      link: "/copywriting-seo"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4">
          <BarChart3 className="text-white" size={28} />
        </div>
      ),
      title: "Content Plan",
      description: "Strategiczne planowanie treści, które przyciągną czytelników i zwiększą konwersje.",
      link: "/content-plan"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-premium-purple font-medium mb-3 uppercase">Co oferujemy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Nasze usługi webowe</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
            Oferujemy kompleksowe rozwiązania, które pomogą Twojej firmie zyskać przewagę konkurencyjną w internecie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${theme === 'light' ? 'bg-white shadow-md border border-gray-100' : 'bg-premium-dark/40'} 
                rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-105`}
            >
              <div className="mb-4 flex justify-start">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className={`mb-4 flex-grow ${theme === 'light' ? 'text-gray-700' : 'text-premium-light/70'}`}>
                {service.description}
              </p>
              <div className="flex justify-start md:justify-center w-full">
                <span
                  className="inline-flex items-center text-premium-purple hover:bg-premium-light/5 border-radius20 cursor-pointer w-auto"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={(e) => handleTouchEnd(e, service.link)}
                  onClick={() => window.location.href = service.link}
                  role="link"
                  tabIndex={0}
                >
                  Dowiedz się więcej
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
