import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Calendar, Clock, MapPin, Mail, Briefcase } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';

const ContactPage = () => {
  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>Kontakt | Tworzenie stron, sklepy internetowe, SEO | IDZTECH</title>
        <meta name="description" content="Skontaktuj się z nami i umów bezpłatną konsultację. Tworzenie stron internetowych, sklepy online, aplikacje webowe, pozycjonowanie SEO – Warszawa i cała Polska." />
        <meta name="keywords" content="kontakt, tworzenie stron internetowych, sklepy internetowe, aplikacje webowe, SEO, pozycjonowanie, Warszawa" />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - Umów bezpłatną konsultację" />
        <meta property="og:description" content="Skontaktuj się z nami i omów swoje potrzeby biznesowe. Nasi eksperci są gotowi pomóc Ci osiągnąć Twoje cele marketingowe." />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/contact" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDZTECH - Umów bezpłatną konsultację" />
        <meta name="twitter:description" content="Skontaktuj się z nami i omów swoje potrzeby biznesowe. Nasi eksperci są gotowi pomóc Ci osiągnąć Twoje cele marketingowe." />
        <meta name="twitter:image" content="https://idztech.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://idztech.pl/contact" />
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
                "name": "Strony internetowe",
                "item": "https://idztech.pl/tworzenie-stron-www"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Sklepy internetowe",
                "item": "https://idztech.pl/sklepy-internetowe"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Pozycjonowanie SEO",
                "item": "https://idztech.pl/pozycjonowanie-stron"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Kontakt",
                "item": "https://idztech.pl/contact"
              }
            ]
          }
        `}</script>
      </Helmet>
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Umów bezpłatną konsultację</h1>
            <p className="text-xl text-premium-light/70">
              Skontaktuj się z nami i omów swoje potrzeby biznesowe. Nasi eksperci są gotowi pomóc Ci osiągnąć Twoje cele marketingowe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="/60 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Wypełnij formularz</h3>
                <ContactForm />
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="/60 border border-white/10 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">Informacje o spotkaniu</h3>
                
                <div className="space-y-6">
                  {/* Removed the image here */}
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center mr-4">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Czas trwania</h4>
                      <p className="text-premium-light/70">30-45 minut</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Termin spotkania</h4>
                      <p className="text-premium-light/70">Skontaktujemy się w ciągu 24h, aby ustalić dogodny termin</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <h4 className="font-medium text-lg">Co zyskujesz?</h4>
                    
                    <div className="flex items-start space-x-3">
                      <Check size={18} className="text-premium-purple mt-1 flex-shrink-0" />
                      <p className="text-premium-light/70">Indywidualne podejście i strategię dopasowaną do Twoich potrzeb</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check size={18} className="text-premium-purple mt-1 flex-shrink-0" />
                      <p className="text-premium-light/70">Propozycję rozwiązań opartą na analizie Twojego biznesu</p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Check size={18} className="text-premium-purple mt-1 flex-shrink-0" />
                      <p className="text-premium-light/70">Wstępną wycenę projektu bez żadnych zobowiązań</p>
                    </div>
                    
                  </div>

                  {/* Dane firmy */}
                  <div className="space-y-4 mt-10">
                    <h4 className="font-medium text-lg">Dane kontaktowe</h4>
                    {/* <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <span className="text-premium-light/80">ul. Przykładowa 1, 00-000 Warszawa</span>
                    </div> */}
                    {/* <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center">
                        <Briefcase size={20} className="text-white" />
                      </div>
                      <span className="text-premium-light/80">NIP: 123-456-78-90</span>
                    </div> */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center">
                        <Mail size={20} className="text-white" />
                      </div>
                      <span className="text-premium-light/80">kontakt@idztech.pl</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <FAQAccordion
              title="Najczęściej zadawane pytania"
              items={[
                {
                  question: 'Jak szybko otrzymam odpowiedź na moje zapytanie?',
                  answer: 'Staramy się odpowiadać na wszystkie zapytania w ciągu 24 godzin roboczych. W przypadku pilnych spraw, prosimy o zaznaczenie tego w formularzu kontaktowym.'
                },
                {
                  question: 'Czy konsultacja jest naprawdę bezpłatna?',
                  answer: 'Tak, pierwsza konsultacja jest całkowicie bezpłatna i niezobowiązująca. Podczas niej omówimy Twoje potrzeby i przedstawimy możliwe rozwiązania.'
                },
                {
                  question: 'Jakie informacje powinienem przygotować przed konsultacją?',
                  answer: 'Warto przygotować podstawowe informacje o swoim biznesie, celach marketingowych oraz konkretnych problemach, które chciałbyś rozwiązać. Nie jest to jednak obowiązkowe - pomożemy Ci je zdefiniować podczas spotkania.'
                },
                {
                  question: 'Czy mogę umówić się na konsultację w weekend?',
                  answer: 'Konsultacje prowadzimy od poniedziałku do piątku w godzinach 9:00-17:00. W wyjątkowych przypadkach możemy ustalić inny termin.'
                },
                {
                  question: 'Czy konsultacja może odbyć się stacjonarnie?',
                  answer: 'Obecnie oferujemy wyłącznie konsultacje online przez Zoom/Teams. Dzięki temu możemy zapewnić elastyczność terminów i komfort spotkania bez konieczności dojazdu.'
                }
              ]}
              className="mb-0"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
