import React from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Code, ShoppingCart, Search, MapPin, FileText, Component, BarChart3 } from 'lucide-react';
import { WobbleCard } from "@/components/ui/wobble-card";

const OurServices = () => {
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
      navigate(link);
    }
    // Jeśli diff >= 10, to był scroll – nie rób nic
  };

  const handleCardClick = (link) => {
    navigate(link);
  };

  const services = [
    {
      icon: <Code className="text-[#a4a6fe]" size={32} />,
      title: "Tworzenie stron internetowych",
      description: "Projektujemy i tworzymy profesjonalne, szybkie i responsywne strony internetowe.",
      link: "/tworzenie-stron-internetowych",
      containerClass: "col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-indigo-600 to-purple-600 min-h-[400px] lg:min-h-[300px] cursor-pointer",
      hasImage: true,
      Image: "https://ui.aceternity.com/linear.webp"
    },
    {
      icon: <Component className="text-[#a4a6fe]" size={32} />,
      title: "Aplikacje Webowe SaaS",
      description: "Projektujemy i wdrażamy nowoczesne aplikacje webowe oraz platformy SaaS dla firm.",
      link: "/aplikacje-webowe",
      containerClass: "col-span-1 min-h-[300px] bg-pink-800 cursor-pointer"
    },
    {
      icon: <Search className="text-[#a4a6fe]" size={32} />,
      title: "Pozycjonowanie SEO",
      description: "Poprawimy widoczność Twojej strony w wyszukiwarce Google i zwiększymy organiczny ruch.",
      link: "/pozycjonowanie-stron",
      containerClass: "col-span-1 min-h-[300px] bg-pink-800 cursor-pointer"
    },
    {
      icon: <ShoppingCart className="text-[#a4a6fe]" size={32} />,
      title: "Tworzenie sklepów internetowych",
      description: "Kompleksowe rozwiązania e-commerce dostosowane do potrzeb Twojego biznesu.",
      link: "/sklepy-internetowe",
      containerClass: "col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-indigo-600 to-purple-600 min-h-[400px] lg:min-h-[300px] cursor-pointer",
      hasImage: true,
      Image: "/images/web-image2.svg"
    }
  ];

  return (
    <section className="md:py-24 relative top-[5rem] max-md:px-5 bg-center max-md:bg-[length:300%_100%] bg-[length:100%_100%] overflow-hidden"
    style={{ backgroundImage: "url('/images/bg-smoke.png')"}}
    >
      <div className="mx-auto">
        <div className="text-center mb-12">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <h2>Co możemy</h2>
          <div className="flex justify-center items-center w-full">
            <h2 className="relative z-10 p-1 text-main">zaoferować</h2><br></br>
            <h2 className="p-1">twojej firmie?</h2>
          </div>
        </div>
          <p className="text left mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
          Kompleksowe rozwiązania, które pomogą Twojej firmie zyskać przewagę konkurencyjną w internecie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full overflow-hidden">
          {services.map((service, index) => (
            <WobbleCard
              key={index}
              containerClassName={`${service.containerClass} relative overflow-hidden`}
              className=""
            >
              <div 
                className="max-w-xs h-full flex flex-col justify-between relative z-10"
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, service.link)}
                onClick={() => handleCardClick(service.link)}
              >
                <div>
                  <div className="mb-4 flex justify-start">
                    {service.icon}
                  </div>
                  <h2 className="text-left text-balance max-md:text-2xl md:text-2xl lg:text-2xl font-semibold tracking-[-0.015em] text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-left text-base/6 text-gray-50-! mb-6">
                    {service.description}
                  </p>
                </div>
                {/* <div className="flex justify-start w-full">
                  <span className="inline-flex items-center text-white hover:text-neutral-200 transition-colors duration-200">
                    Dowiedz się więcej
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div> */}
              </div>
              
              {/* Zdjęcie tylko dla kart z hasImage */}
              {service.hasImage && (
                <img 
                  width="300" 
                  height="300" 
                  alt="demo image" 
                  className="absolute shadow-sm -right-4 -bottom-1 object-contain rounded-xl transition-opacity duration-300" 
                  src={service.Image} 
                />
              )}
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
