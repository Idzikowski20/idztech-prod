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
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <Code className="text-[#a4a6fe]" size={28} />
        </div>
      ),
      title: "Tworzenie stron internetowych",
      description: "Projektujemy i tworzymy profesjonalne, szybkie i responsywne strony internetowe.",
      link: "/tworzenie-stron-internetowych"
    },
    {
      icon: (
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <ShoppingCart className="text-[#a4a6fe]" size={28} />
        </div>
      ),
      title: "Tworzenie sklepów internetowych",
      description: "Kompleksowe rozwiązania e-commerce dostosowane do potrzeb Twojego biznesu.",
      link: "/sklepy-internetowe"
    },
    {
      icon: (
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <Component className="text-[#a4a6fe]" size={28} />
        </div>
      ),
      title: "Aplikacje Webowe SaaS",
      description: "Projektujemy i wdrażamy nowoczesne aplikacje webowe oraz platformy SaaS dla firm.",
      link: "/aplikacje-webowe"
    },
    {
      icon: (
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <Search className="text-[#a4a6fe]" size={28} />
        </div>
      ),
      title: "Pozycjonowanie SEO",
      description: "Poprawimy widoczność Twojej strony w wyszukiwarce Google i zwiększymy organiczny ruch.",
      link: "/pozycjonowanie-stron"
    }
  ];

  return (
    <section className="md:py-24 relative top-[5rem] max-md:px-5 bg-center max-md:bg-[length:300%_100%] bg-[length:100%_100%]"
    style={{ backgroundImage: "url('/images/bg-smoke.png')"}}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <h2>Co możemy</h2>
          <div className="flex justify-center items-center w-full">
            <h2 className="relative z-10 p-1 text-main">zaoferować</h2><br></br>
            <h2 className="p-1">twojej firmie?</h2>
          </div>
        </div>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
          Kompleksowe rozwiązania, które pomogą Twojej firmie zyskać przewagę konkurencyjną w internecie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${theme === 'light' ? 'bg-white/80' : 'bg-[#13151a]/90'} 
                rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-105 
                relative overflow-hidden backdrop-blur-sm border border-white/10`}
            >
              {/* Shine effect overlay */}
              {/* <div 
                className="absolute bottom-35 left-0 w-32 h-32 opacity-90 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(231, 105, 248, 0.4) 0%, transparent 39%)',
                  filter: 'blur(20px)'
                }}
              /> */}
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 flex justify-start">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className={`mb-4 flex-grow ${theme === 'light' ? 'text-gray-700' : 'text-premium-light/70'}`}>
                  {service.description}
                </p>
                <div className="flex justify-start w-full">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
