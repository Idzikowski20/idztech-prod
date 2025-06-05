import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/utils/themeContext";
import { useMobile } from '@/hooks/use-mobile';
import HeroImage from "@/components/HeroImage";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FlipWords } from "@/components/ui/flip-words";

const Hero = () => {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const navigate = useNavigate();
  
  return (
    <section id="hero" className={`${isMobile ? 'pt-28' : 'pt-20'} pb-16 md:pt-28 md:pb-32 relative overflow-hidden`}>
      <div className="mt-80 container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Hero content on the left */}
          <div className="w-full lg:w-1/2 xl:w-5/12">            
            <div className="flex items-center gap-2 bg-white/80 dark:bg-premium-dark/80 px-5 py-2 rounded-full shadow-md w-fit mb-[4rem] text-base font-medium">
              <span className="text-xl">👋</span>
              <span className="text-premium-dark dark:text-premium-light">Potrzebujesz nowoczesnej strony? Dobrze trafiłeś!</span>
            </div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-extrabold text-premium-dark dark:text-premium-light leading-tight">
                <span aria-hidden="true">
                  Tworzymy{' '}
                  <span className="relative z-10 bg-gradient-to-r from-[#8350e8] to-[#ff6b6b] bg-clip-text text-transparent">
                    <FlipWords
                      words={[
                        "strony internetowe",
                        "sklepy internetowe",
                        "landing page",
                        "aplikacje webowe"
                      ]}
                      duration={10000}
                      className="bg-gradient-to-r from-[#8350e8] to-[#ff6b6b] bg-clip-text text-transparent"
                    />
                  </span>
                </span>
              </h1>
            </div>
            <p className='text-lg md:text-xl text-premium-light/80 dark:text-premium-light/80 mb-6 md:mb-8 leading-relaxed'>
            Pomagamy firmom zaistnieć w internecie i skutecznie pozyskiwać klientów. Tworzymy nowoczesne strony www, sklepy internetowe oraz prowadzimy kompleksowe działania SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:text-white transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Skontaktuj się z nami
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`} onClick={() => navigate('/projects')}>
                  Zobacz nasze realizacje
                </Button>
              </div>
            <div className='flex flex-wrap gap-3 md:gap-4 transition-opacity duration-500'>
              {[
                'Szybka wydajność',
                'Nowoczesne technologie',
                'Wysokie SEO',
                'Konkurencyjne ceny',
                'Bezpieczeństwo strony',
                'CMS'
              ].map((text, index) => (
                <div key={index} className="flex items-center justify-start gap-2 text-sm text-premium-light/70">
                  <CheckCircle2 className="text-premium-purple h-4 w-4" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Hero image on the right */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 h-[400px] sm:h-[450px] md:h-[480px] flex items-center justify-center" style={{ minHeight: "300px" }}>
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
