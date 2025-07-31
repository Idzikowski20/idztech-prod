import React from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Award, Lightbulb, Clock } from 'lucide-react';
import { useTheme } from '@/utils/themeContext';
import GlobalCTA from '@/components/GlobalCTA';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FAQ from '@/components/FAQ';

const AboutUs = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const people = [
    { 
      name: 'Patryk Idzikowski', 
      role: 'SEO',
      description: 'Ekspert z 4-letnim doświadczeniem w tworzeniu stron internetowych i optymalizacji SEO dla firm z różnych branż.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQFN5Z-Q4Ty3tw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709119468661?e=1753315200&v=beta&t=MD-IXRwVN_OjQQf96usS4ZJBJ80W5MAMnbZzOu9aUDw'
    },
    { 
      name: 'Aleksandra Górecka', 
      role: 'Sales Director',
      description: 'Doświadczony Handlowiec i Specjalista w zakresie sprzedaży i marketingu',
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
      description: 'Doświadczony handlowiec z szeroką wiedzą w zakresie sprzedaży rozwiązań IT i marketingowych.',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEODWoax6O9kQ/profile-displayphoto-shrink_200_200/B4EZTNI7ExGYAY-/0/1738608456657?e=1753315200&v=beta&t=xSesI6rQTiqm13EsbJL-xN9vN5ye5aFNoz2__83lG9U'
    }
  ];
  
  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>Poznaj zespół IDZTECH | web development, SEO, projektowanie stron</title>
        <meta name="description" content="Poznaj zespół IDZTECH ekspertów od tworzenia stron internetowych, SEO, web designu i rozwoju aplikacji webowych. Sprawdź, dlaczego warto nam zaufać!" />
        <meta name="keywords" content="o nas, zespół, IDZTECH, web development, projektowanie stron, SEO, aplikacje webowe, strony internetowe, web design, doświadczenie, eksperci" />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - O nas" />
        <meta property="og:description" content="Poznaj zespół IDZTECH – ekspertów od tworzenia stron internetowych, SEO, web designu i rozwoju aplikacji webowych. Sprawdź, dlaczego warto nam zaufać!" />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/o-nas" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDZTECH - O nas" />
        <meta name="twitter:description" content="Poznaj zespół IDZTECH – ekspertów od tworzenia stron internetowych, SEO, web designu i rozwoju aplikacji webowych. Sprawdź, dlaczego warto nam zaufać!" />
        <meta name="twitter:image" content="https://idztech.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://idztech.pl/o-nas" />
        {/* Schema.org Organization */}
        <script type="application/ld+json">{`
          {"@context": "https://schema.org","@type": "Organization","name": "IDZTECH","url": "https://idztech.pl","logo": "https://idztech.pl/logo.png"}
        `}</script>
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona główna",
                "item": "https://idztech.pl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "O nas",
                "item": "https://idztech.pl/o-nas"
              }
            ]
          }
        `}</script>
      </Helmet>
      
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
              <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnerstwo</h3>
              <p className="text-premium-light/70">
                Traktujemy naszych klientów jak partnerów biznesowych. Twój sukces jest naszym sukcesem.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jakość</h3>
              <p className="text-premium-light/70">
                Dostarczamy usługi najwyższej jakości, dążąc do perfekcji w każdym aspekcie naszej pracy.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
                <Lightbulb size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innowacyjność</h3>
              <p className="text-premium-light/70">
                Nieustannie śledzimy trendy i wprowadzamy innowacyjne rozwiązania do naszych projektów stron.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
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
        <div className=" py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
            <span className="text-premium-purple font-medium">Zespół</span>
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Poznaj nas 🤝
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
              Nasz zespół to doświadczeni specjaliści z dziedziny tworzenia stron internetowych i SEO, którzy łączą swoje umiejętności, aby zapewnić Ci najlepsze wyniki.
              </p>
            </div>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img alt="" src={person.image} className="size-16 rounded-full" />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Why Us section */}
      <section className="py-20 relative overflow-hidden">
      <div data-lazy>
          <div className="mt-8 md:mt-0">
            <FAQ />
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
