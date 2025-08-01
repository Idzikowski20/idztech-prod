import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/utils/themeContext';
import { WobbleCard } from '@/components/ui/wobble-card';

const WhyWorkWithUs = () => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const stats = [
    { number: '50+', text: 'Zadowolonych klientów' },
    { number: '20+', text: 'Zrealizowanych projektów' },
    { number: '10+', text: 'Lat doświadczenia' },
    { number: '5+', text: 'Ekspertów w zespole' }
  ];

  const teamMembers = [
    { 
      name: 'Patryk Idzikowski', 
      role: 'SEO',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFN5Z-Q4Ty3tw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709119468661?e=1753315200&v=beta&t=MD-IXRwVN_OjQQf96usS4ZJBJ80W5MAMnbZzOu9aUDw'
    },
     { 
      name: 'Aleksandra Górecka', 
      role: 'Sales Director',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGXIT6Ts4PNKA/profile-displayphoto-shrink_200_200/B4DZOGr_alG0Ac-/0/1733131499592?e=1753315200&v=beta&t=pG5ndvFbqCngCLfXaRdUm7mpm_RQdcHjWfvoJn8uwy8'
    },
        { 
      name: 'Jan Śliwa', 
      role: 'Key Account Manager',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEODWoax6O9kQ/profile-displayphoto-shrink_200_200/B4EZTNI7ExGYAY-/0/1738608456657?e=1753315200&v=beta&t=xSesI6rQTiqm13EsbJL-xN9vN5ye5aFNoz2__83lG9U'
    },
    { 
      name: 'Lidia Idzikowska-Śliwa', 
      role: 'FullStack Developer',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEYvQq3t6S4sw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709115564928?e=1753315200&v=beta&t=g0_qDY8HNzH53iK90feqkCEfshLCLuSX4gUz_ZV_I0s'
    },
    { 
      name: 'Przemek Idzikowski', 
      role: 'QA',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHnAB-xHjZuzQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709126469495?e=1753315200&v=beta&t=j37jqhIfKlFX0WGqpowFNCQuYsNoV6XZ5SHISjU2Kig'
    },
  ];

  return (
    <section id="about" className="md:py-24 relative top-[5rem] max-md:px-5 bg-center max-md:bg-[length:300%_100%] bg-[length:100%_100%] overflow-hidden"
    style={{ backgroundImage: "url('/images/bg-smoke.png')"}}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Nagłówek i opis na całą szerokość */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <div className="text-center mb-12">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <h2>Kompleksowy zespół</h2>
              <div className="flex justify-center items-center w-full">
                <h2 className="relative z-10 p-1 text-main">tworzący</h2>
                <h2 className="p-1">strony</h2>
              </div>
            </div>
            <p className="text-left mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
              Jesteśmy zespołem doświadczonych specjalistów z pasją do tworzenia nowoczesnych stron <br></br> i sklepów internetowych. Łączymy kreatywność z analitycznym podejściem, aby dostarczać rozwiązania, które nie tylko wyglądają dobrze, ale przede wszystkim działają efektywnie.
            </p>
          </div>
          
          {/* Wobble Cards Grid - Podium Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
            {/* Lewa karta - niższa */}
            <WobbleCard containerClassName="col-span-1 h-[280px] bg-ping-800 bg-gradient-to-br from-purple-700 to-indigo-700 transform md:translate-y-4">
              <div className="flex flex-col h-full justify-between text-center">
                <div className="flex-1 flex flex-col justify-center">
                  <CheckCircle size={48} className="text-white mb-4 mx-auto" />
                  <h4 className="text-xl font-semibold text-white mb-3">Cel na rezultaty</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Koncentrujemy się na osiąganiu wymiernych wyników dla Twojego biznesu.
                </p>
              </div>
            </WobbleCard>
            
            {/* Środkowa karta - najwyższa */}
            <WobbleCard containerClassName="col-span-1 h-[320px] bg-gradient-to-br from-emerald-600 to-teal-600">
              <div className="flex flex-col h-full justify-between text-center">
                <div className="flex-1 flex flex-col justify-center">
                  <CheckCircle size={48} className="text-white mb-4 mx-auto" />
                  <h4 className="text-xl font-semibold text-white mb-3">Transparentność działań</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Zapewniamy pełną przejrzystość i regularne raporty z naszych działań.
                </p>
              </div>
            </WobbleCard>
            
            {/* Prawa karta - niższa */}
            <WobbleCard containerClassName="col-span-1 h-[280px] bg-pink-800 bg-gradient-to-br from-orange-700 to-red-700 transform md:translate-y-4">
              <div className="flex flex-col h-full justify-between text-center">
                <div className="flex-1 flex flex-col justify-center">
                  <CheckCircle size={48} className="text-white mb-4 mx-auto" />
                  <h4 className="text-xl font-semibold text-white mb-3">Zespół ekspertów</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nasi specjaliści posiadają certyfikaty i wieloletnie doświadczenie w branży.
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
        
        {/* Sekcja ze statystykami */}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-4 rounded-xl py-6 px-4 relative z-10 shadow-md">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl sm:text-3xl font-bold bg-premium-gradient text-transparent bg-clip-text">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm text-premium-light/70 mt-1 max-w-[100px]">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Przycisk */}
        <div className="flex justify-center mt-6">
          <Link to="/contact">
            <Button
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-md
                ${theme === 'light' ? 'bg-black text-white hover:bg-black hover:text-white' : 'text-black-important'}`}
            >
              Umów spotkanie
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
