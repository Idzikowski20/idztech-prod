import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/utils/themeContext";
import { useMobile } from '@/hooks/use-mobile';
import HeroImage from "@/components/HeroImage";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FlipWords } from "@/components/ui/flip-words";
import video from '@/styles/background-video.mp4';

const Hero = () => {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const navigate = useNavigate();
  
  return (
    
    <section id="hero" className={`${isMobile ? 'pt-28' : 'pt-20'} pb-[30rem] md:pt-28 relative overflow-hidden mix-blend-lighten`}>
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-contain z-0 min-h-[100vh]"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="pb-[200px] mt-80 container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Hero content on the left */}
          <div className="w-full lg:w-1/2 xl:w-5/12">            
            {/* <div className="flex items-center gap-2 bg-white/80 dark:bg-premium-dark/80 px-5 py-2 rounded-full shadow-md w-fit mb-[4rem] text-base font-medium">
              <span className="text-xl">👋</span>
              <span className="text-premium-dark dark:text-premium-light">Potrzebujesz nowoczesnej strony? Dobrze trafiłeś!</span>
            </div> */}
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
                <Button className="bg-wave bg-gradient-to-br  via-premium-purple-500  hover:text-white transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Skontaktuj się z nami
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`} onClick={() => navigate('/projects')}>
                  Zobacz nasze realizacje
                </Button>
              </div>
          </div>
          {/* Hero image on the right */}
          <div className="absolute h-full mix-blend-overlay">
            <img 
              src="/images/heroimage.jpg" 
              alt="Hero" 
              className="absolute bottom-[-378px] left-[0px] rounded-t-[10px] width-[700px]  md:rounded-t-md top-[100px] sm:bottom-auto sm:rounded-t xs:mt-[21.6%] xs:w-full xs:min-w-[376px] 2xs:mt-[70px]"
              style={{ minHeight: '350px', background: 'rgba(0,0,0,0.6)' }}
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[340px] w-full bg-gradient-to-b from-grey-1/0 to-grey-1 to-50% lg:h-[250px] md:h-44 sm:left-0 sm:h-[170px] sm:w-[107%] xs:h-[28%]">
      <div className='flex flex-wrap gap-3 md:gap-4 transition-opacity duration-500 justify-center relative right-[130px] top-[100px]'>
              {[
                'Szybka wydajność',
                'Nowoczesne technologie',
                'Wysokie SEO',
                'Konkurencyjne ceny',
                'Bezpieczeństwo strony'
              ].map((text, index) => (
                <div key={index} className="flex items-center justify-start gap-2 text-sm text-premium-light/70">
                  <CheckCircle2 className="text-premium-purple h-4 w-4" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};

export default Hero;
