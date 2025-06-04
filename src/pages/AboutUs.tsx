import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Award, Lightbulb, Clock } from 'lucide-react';
import { useTheme } from '@/utils/themeContext';
import GlobalCTA from '@/components/GlobalCTA';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const teamMembers = [
    { 
      name: 'Patryk Idzikowski', 
      role: 'SEO',
      description: 'Ekspert z 4-letnim doświadczeniem w tworzeniu stron internetowych i optymalizacji SEO dla firm z różnych branż.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFN5Z-Q4Ty3tw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709119468661?e=1753315200&v=beta&t=MD-IXRwVN_OjQQf96usS4ZJBJ80W5MAMnbZzOu9aUDw'
    },
    { 
      name: 'Aleksandra Górecka', 
      role: 'Sales Director',
      description: 'Doświadczony Specjalista w zakresie sprzedaży i marketingu',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQGXIT6Ts4PNKA/profile-displayphoto-shrink_200_200/B4DZOGr_alG0Ac-/0/1733131499592?e=1753315200&v=beta&t=pG5ndvFbqCngCLfXaRdUm7mpm_RQdcHjWfvoJn8uwy8'
    },
    { 
      name: 'Lidia Idzikowska-Śliwa', 
      role: 'Fullstack Developer',
      description: 'Ekspert z 10-letnim doświadczeniem w tworzeniu aplikacji pełnostackowych wykorzystujących najnowsze technologie.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEYvQq3t6S4sw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709115564928?e=1753315200&v=beta&t=g0_qDY8HNzH53iK90feqkCEfshLCLuSX4gUz_ZV_I0s'
    },
    { 
      name: 'Przemek Idzikowski', 
      role: 'QA',
      description: 'Specjalista od zapewnienia jakości z doświadczeniem w testowaniu aplikacji webowych i mobilnych.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHnAB-xHjZuzQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709126469495?e=1753315200&v=beta&t=j37jqhIfKlFX0WGqpowFNCQuYsNoV6XZ5SHISjU2Kig'
    },
    { 
      name: 'Jan Śliwa', 
      role: 'Key Account Manager',
      description: 'Doświadczony dyrektor sprzedaży z szeroką wiedzą w zakresie sprzedaży rozwiązań IT i marketingowych.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEODWoax6O9kQ/profile-displayphoto-shrink_200_200/B4EZTNI7ExGYAY-/0/1738608456657?e=1753315200&v=beta&t=xSesI6rQTiqm13EsbJL-xN9vN5ye5aFNoz2__83lG9U'
    }
  ];
  
  return (
    <div className="min-h-screen ">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Poznaj <span className="bg-premium-gradient text-transparent bg-clip-text">IDZTECH</span> - Twojego partnera w web developmencie
              </h1>
              
              <p className="text-xl text-premium-light/80 mb-8">
                Jesteśmy zespołem pasjonatów tworzenia stron internetowych, którzy od lat pomagają firmom rozwijać się w świecie online. Naszą misją jest dostarczanie kompleksowych i skutecznych rozwiązań webowych.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Umów spotkanie
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`} onClick={() => navigate('/projects')}>
                  Nasze realizacje
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-2xl aspect-video mx-auto min-w-0">
                <video
                  src="/video/0524.mp4"
                  autoPlay
                  muted
                  playsInline
                  controls
                  className="w-full h-full rounded-lg object-cover"
                  style={{ background: '#000' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="text-premium-purple font-medium">Nasze wartości</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Na czym opieramy naszą pracę</h2>
            <p className="text-premium-light/70 text-lg">
              Nasze podejście do każdego projektu jest zorientowane na osiąganie wymiernych rezultatów. Kierujemy się następującymi wartościami:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 rounded-lg bg-premium-gradient flex items-center justify-center mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnerstwo</h3>
              <p className="text-premium-light/70">
                Traktujemy naszych klientów jak partnerów biznesowych. Twój sukces jest naszym sukcesem.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="w-12 h-12 rounded-lg bg-premium-gradient flex items-center justify-center mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jakość</h3>
              <p className="text-premium-light/70">
                Dostarczamy usługi najwyższej jakości, dążąc do perfekcji w każdym aspekcie naszej pracy.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 rounded-lg bg-premium-gradient flex items-center justify-center mb-4">
                <Lightbulb size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innowacyjność</h3>
              <p className="text-premium-light/70">
                Nieustannie śledzimy trendy i wprowadzamy innowacyjne rozwiązania do naszych projektów stron.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 rounded-lg bg-premium-gradient flex items-center justify-center mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Terminowość</h3>
              <p className="text-premium-light/70">
                Szanujemy czas naszych klientów i zawsze dotrzymujemy ustalonych terminów realizacji projektów.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-20 relative overflow-hidden">
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="text-premium-purple font-medium">Nasz Zespół</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Poznaj ekspertów IDZTECH</h2>
            <p className="text-premium-light/70 text-lg">
              Nasz zespół to doświadczeni specjaliści z dziedziny tworzenia stron internetowych i SEO, którzy łączą swoje umiejętności, aby zapewnić Ci najlepsze wyniki.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[3rem] justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="/60 border border-white/10 rounded-xl overflow-hidden duration-300 animate-fade-in w-64"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-64 rounded-t-xl object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-premium-purple mb-3">{member.role}</p>
                  <p className="text-premium-light/70 text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Us section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="text-premium-purple font-medium">Dlaczego my?</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Co nas wyróżnia</h2>
            <p className="text-premium-light/70 text-lg">
              Wybierając IDZTECH, wybierasz firmę, która naprawdę dba o Twój biznes w sieci. Oto, co nas wyróżnia:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
              <CheckCircle size={32} className="text-premium-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Indywidualne podejście</h3>
              <p className="text-premium-light/70">Każdy projekt traktujemy indywidualnie, dopasowując rozwiązania do potrzeb klienta.</p>
            </div>
            <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
              <CheckCircle size={32} className="text-premium-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kompleksowa obsługa</h3>
              <p className="text-premium-light/70">Zajmujemy się wszystkim: od projektu, przez wdrożenie, po wsparcie i rozwój.</p>
            </div>
            <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
              <CheckCircle size={32} className="text-premium-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparentność</h3>
              <p className="text-premium-light/70">Zapewniamy jasne zasady współpracy i regularne raportowanie postępów.</p>
            </div>
            <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
              <CheckCircle size={32} className="text-premium-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zespół ekspertów</h3>
              <p className="text-premium-light/70">Nasz zespół to certyfikowani specjaliści z wieloletnim doświadczeniem.</p>
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA
        title="Gotowy na nowoczesną stronę internetową?"
        description="Skontaktuj się z nami i umów się na bezpłatną konsultację. Omówimy Twoje potrzeby i zaproponujemy optymalne rozwiązanie."
        buttons={[
          <Button 
            size="lg" 
            className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6"
            style={{animationDelay: "0.4s"}}
            onClick={() => navigate('/contact')}
          >
            <span className="relative z-10 text-white">Skontaktuj się z nami</span>
          </Button>
        ]}
      />
      
      <Footer />
    </div>
  );
};

export default AboutUs;
