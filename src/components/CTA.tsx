import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/utils/themeContext';

const CTA = () => {
  const { theme } = useTheme();

  return (
      <section className="py-16 relative overflow-hidden" style={{ margin: '20px', borderRadius: '20px' }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h6 className="text-3xl lg:text-4xl font-bold mb-6 animate-fade-in">Wymagasz więcej od strony internetowej?</h6>
            <p className="text-premium-light/70 text-lg mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
              Skontaktuj się z nami i umów się na bezpłatną konsultację. Omówimy Twoje potrzeby i zaproponujemy optymalne rozwiązanie.
            </p>
            <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6"
              style={{animationDelay: "0.4s"}}
            >
              <span className="relative z-10 text-white">Skontaktuj się z nami</span>
            </Button>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default CTA;
