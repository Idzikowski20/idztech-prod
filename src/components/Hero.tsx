import { Button } from "@/components/ui/button";
import { useTheme } from "@/utils/themeContext";
import { useMobile } from '@/hooks/use-mobile';
import { useNavigate } from "react-router-dom";
import { Marquee } from "@/components/marquee";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Hero = () => {
  const { theme } = useTheme();
  const isMobile = useMobile();
  const navigate = useNavigate();
  
  // Loga firm które nam zaufały
  const trustedCompanies = [
    { name: "Google Analytics", logo: "/images/google--analytic.svg" },
    { name: "Google Cloud", logo: "/images/google--cloud.svg" },
    { name: "Google Data Studio", logo: "/images/google--data-studio.svg" },
    { name: "Google Maps", logo: "/images/google--gmp.svg" },
    { name: "Ruch", logo: "/images/ruch.webp" },
    { name: "Restauracja Warszawa", logo: "/images/restauracja-warszawa.png" }
  ];
  
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
      
      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
        <SparklesText className="relative">
          <h1 className=" text-xl p-0  md:text-6xl max-md:text-4xl font-extrabold text-white leading-tight">
            Nowoczesne 
          </h1>
          <h1 className="gradient-text text-xl md:text-6xl max-md:text-2xl font-bold text-white leading-tight max-md:mb-1 mb-4">Strony internetowe i sklepy online</h1>
          </SparklesText>
        </div>
        
        <p className="max-md:bottom-5 relative p-2 text-left text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
          Pomagamy firmom zaistnieć w internecie i skutecznie pozyskiwać klientów. Tworzymy nowoczesne strony www, sklepy internetowe oraz prowadzimy kompleksowe działania SEO.
        </p>
        
        <div className="max-md:bottom-5 relative flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="m-3 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => navigate('/contact')}
          >
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
      
      {/* Slider z logami firm - na środku na dole */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-6xl z-20">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-300 font-medium">Marki, które nam zaufały.</p>
        </div>
        <div className="relative overflow-hidden logo-slider">
          {/* Gradient fade na lewej stronie */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r max-md:from-[#101422] max-md:via-[#14162400] from-[#0c0c14] via-[#0c0c14] to-transparent z-10 pointer-events-none"></div>

          {/* Gradient fade na prawej stronie */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l max-md:from-[#101422] max-md:via-[#14162400] from-[#0c0c14] via-[#0c0c14] to-transparent z-10 pointer-events-none"></div>
          
          <Marquee
            className="[--duration:30s] py-4"
            pauseOnHover={true}
          >
            {trustedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8 min-w-[120px] h-16"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-10 max-w-[120px] object-contain filter brightness-0 invert opacity-60 hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none">
      </div>
    </section>
  );
};

export default Hero;
