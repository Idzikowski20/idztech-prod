import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/utils/themeContext";
import { BlinkingUnderscore } from "@/components/ui/BlinkingUnderscore";
import { useMobile } from '@/hooks/use-mobile';
import HeroImage from "@/components/HeroImage";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const heroPhrases = [
  'Tworzymy najlepsze strony internetowe',
  'Tworzymy najlepsze sklepy internetowe',
  'Tworzymy skuteczne landing page',
  'Tworzymy nowoczesne aplikacje webowe',
];

const Hero = () => {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const navigate = useNavigate();
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState(heroPhrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(heroPhrases[0].length);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % heroPhrases.length);
      }
    } else {
      if (charIndex < heroPhrases[currentPhrase].length) {
        timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 30000);
      }
    }
    setDisplayedText(heroPhrases[currentPhrase].slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhrase]);

  useEffect(() => {
    if (!isDeleting && charIndex === 0) {
      setCharIndex(0);
    }
  }, [currentPhrase]);
  
  return (
    <section id="hero" className={`${isMobile ? 'pt-28' : 'pt-20'} pb-16 md:pt-28 md:pb-32 relative overflow-hidden`}>
      <div className="mt-80 container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Hero content on the left */}
          <div className="w-full lg:w-1/2 xl:w-5/12">            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              {displayedText}<BlinkingUnderscore />
            </h1>
            
            <p className='text-lg md:text-xl text-premium-light/80 dark:text-premium-light/80 mb-6 md:mb-8 leading-relaxed'>
              Dostarczamy rozwiązania, które budują online obecność i konwertują odwiedzających w klientów. Specjalizujemy się w tworzeniu stron www, SEO i marketingu cyfrowym.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
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
