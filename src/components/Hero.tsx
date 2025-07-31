import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "@/utils/themeContext";
import { useMobile } from '@/hooks/use-mobile';
import HeroImage from "@/components/HeroImage";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FlipWords } from "@/components/ui/flip-words";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

const Hero = () => {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const navigate = useNavigate();
  
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Better Stack inspired background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]">
      </div>
      
      <div className="container px-4 relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="gap-2 text-xl md:text-6xl  font-extrabold text-white leading-tight mb-6">Strony internetowe i sklepy online</h1>
          <h2 className="text-main gap-2 text-xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Które sprzedają
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
          Pomagamy firmom zaistnieć w internecie i skutecznie pozyskiwać klientów. Tworzymy nowoczesne strony www, sklepy internetowe oraz prowadzimy kompleksowe działania SEO.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => navigate('/contact')}
          >
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
      
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
      </div>
    </section>
  );
};

export default Hero;
