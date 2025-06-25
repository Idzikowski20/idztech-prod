import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/utils/themeContext";
import { useMobile } from '@/hooks/use-mobile';
import HeroImage from "@/components/HeroImage";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FlipWords } from "@/components/ui/flip-words";
import video from '@/styles/background-video.mp4';
import { LineShadowText } from "@/components/magicui/line-shadow-text";

const Hero = () => {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const navigate = useNavigate();
  
  return (
    <section
      id="hero"
      className="hero relative overflow-hidden bg-grey-1 pt-[184px] px-safe lg:h-[950px] lg:pt-28 md:h-auto md:pt-24 sm:pt-[92px] mb-[150px]"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover mix-blend-lighten z-0 hero-video"
        poster="/images/heroimage.png"
        preload="none"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="pb-[200px] mt-80 container px-4 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Hero content on the left */}
          <div className="w-full lg:w-1/2 xl:w-5/12">
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-extrabold text-premium-dark dark:text-premium-light leading-tight">
                <span aria-hidden="true">
                  <span className="g-clip-text text-transparent">
                  Nowoczesne{' '}
                  </span>
                  <span>strony</span>
                </span>
                <LineShadowText>internetowe</LineShadowText>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-premium-light/80 dark:text-premium-light/80 mb-6 md:mb-8 leading-relaxed">
              Pomagamy firmom zaistnieć w internecie i skutecznie pozyskiwać klientów. Tworzymy nowoczesne strony www, sklepy internetowe oraz prowadzimy kompleksowe działania SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                className="bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:text-white transition-opacity text-white rounded-full px-8 py-6"
                onClick={() => navigate('/contact')}
              >
                Skontaktuj się z nami
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[340px] w-full lg:h-[250px] md:h-44 sm:left-0 sm:h-[170px] sm:w-[107%] xs:h-[28%] gradient-hero-bottom">
      </div>
    </section>
  );
};

export default Hero;
