import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, Lightbulb, Clock } from 'lucide-react';
import GlobalCTA from '@/components/GlobalCTA';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FAQ from '@/components/FAQ';

const AboutUs = () => {
  const navigate = useNavigate();

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
      
       {/* Hero Section */}
       <section className="min-h-[40vh] pt-32 pb-16 relative overflow-hidden">
         <div className="container mx-auto px-4 lg:px-8 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Poznaj nas 💪
              </h1>
              
              <p className="text-xl text-premium-light/80 mb-8">
                Jesteśmy zespołem pasjonatów tworzenia stron internetowych, którzy od lat pomagają firmom rozwijać się w świecie online. Naszą misją jest dostarczanie kompleksowych i skutecznych rozwiązań webowych.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-wave from-premium-blue-500 bg-gradient-to-br  via-premium-purple-500  hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Umów spotkanie
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white`} onClick={() => navigate('/projects')}>
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
              <div className="w-12 h-12 rounded-xl bg-wave from-premium-blue-500 bg-gradient-to-br  via-premium-purple-500  flex items-center justify-center p-[5px] mr-[10px]">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnerstwo</h3>
              <p className="text-premium-light/70">
                Traktujemy naszych klientów jak partnerów biznesowych. Twój sukces jest naszym sukcesem.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="w-12 h-12 rounded-xl bg-wave from-premium-blue-500 bg-gradient-to-br  via-premium-purple-500  flex items-center justify-center p-[5px] mr-[10px]">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jakość</h3>
              <p className="text-premium-light/70">
                Dostarczamy usługi najwyższej jakości, dążąc do perfekcji w każdym aspekcie naszej pracy.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 rounded-xl bg-wave from-premium-blue-500 bg-gradient-to-br  via-premium-purple-500  flex items-center justify-center p-[5px] mr-[10px]">
                <Lightbulb size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innowacyjność</h3>
              <p className="text-premium-light/70">
                Nieustannie śledzimy trendy i wprowadzamy innowacyjne rozwiązania do naszych projektów stron.
              </p>
            </div>
            
            <div className="/60 border border-white/10 rounded-xl p-6 transition-transform hover:scale-110 duration-300 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="w-12 h-12 rounded-xl bg-wave from-premium-blue-500 bg-gradient-to-br  via-premium-purple-500  flex items-center justify-center p-[5px] mr-[10px]">
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
            className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500  hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6"
            style={{animationDelay: "0.4s"}}
            onClick={() => navigate('/contact')}
          >
            <span className="relative z-10 text-white">Skontaktuj się z nami</span>
          </Button>
        ]}
      />
    
    </div>
  );
};

export default AboutUs;
