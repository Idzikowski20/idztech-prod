import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Check, ChevronRight, Search, BarChart4, FileText, Settings, Target, TrendingUp, Award, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SplineSEO from "@/components/SplineSEO";
import GlobalCTA from "@/components/GlobalCTA";
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';
import LocalSeoSection from "@/components/LocalSeoSection";
import OgUrlMeta from "@/components/OgUrlMeta";

const Seo = () => {
  const navigate = useNavigate();

  return (
    <>
      <OgUrlMeta />
      <div className="min-h-screen">
        <Helmet>
          <title>Pozycjonowanie SEO – Skuteczne pozycjonowanie stron, audyt SEO</title>
          <meta name="description" content="Zwiększ widoczność w Google! Skuteczne pozycjonowanie SEO, audyt SEO, optymalizacja stron internetowych, link building, pozycjonowanie lokalne i sklepy internetowe." />
          <meta name="keywords" content="pozycjonowanie seo, tworzenie stron internetowych, strona internetowa, sklep internetowy, audyt seo, pozycjonowanie lokalne" />
          {/* Open Graph */}
          <meta property="og:title" content="IDZTECH - Pozycjonowanie stron internetowych" />
          <meta property="og:description" content="Zwiększamy widoczność Twojej strony w wyszukiwarce Google, pozyskujemy ruch organiczny i budujemy trwałą obecność Twojej firmy w Internecie." />
          <meta property="og:image" content="https://idztech.pl/banner.png" />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="IDZTECH - Pozycjonowanie stron internetowych" />
          <meta name="twitter:description" content="Zwiększamy widoczność Twojej strony w wyszukiwarce Google, pozyskujemy ruch organiczny i budujemy trwałą obecność Twojej firmy w Internecie." />
          <meta name="twitter:image" content="https://idztech.pl/banner.png" />
          {/* Robots */}
          <meta name="robots" content="index, follow" />
          {/* Canonical */}
          <link rel="canonical" href="https://idztech.pl/pozycjonowanie-stron-internetowych" />
          {/* Schema.org Organization */}
          <script type="application/ld+json">{`
            {"@context": "https://schema.org","@type": "Organization","name": "IDZTECH","url": "https://idztech.pl","logo": "https://idztech.pl/logo.png"}
          `}</script>
          {/* FAQPage Schema */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Na czym polega pozycjonowanie stron internetowych?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pozycjonowanie to szereg działań mających na celu zwiększenie widoczności strony w wynikach wyszukiwania Google, m.in. optymalizacja techniczna, content marketing, link building."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak długo trzeba czekać na efekty pozycjonowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pierwsze efekty mogą być widoczne po kilku tygodniach, ale pełne rezultaty pojawiają się zwykle po 3-6 miesiącach regularnych działań."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy pozycjonowanie jest jednorazowe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie, SEO to proces ciągły. Algorytmy Google i konkurencja stale się zmieniają, dlatego ważna jest regularność działań."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę pozycjonować stronę samodzielnie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Możesz, ale skuteczne SEO wymaga wiedzy, narzędzi i doświadczenia. Współpraca z nami pozwala osiągnąć lepsze i szybsze efekty."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak mierzycie skuteczność działań SEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Monitorujemy pozycje fraz kluczowych, ruch organiczny, liczbę konwersji oraz inne wskaźniki KPI."
                  }
                }
              ]
            }
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
        
          {/* Hero Section */}
          <section className="md:py-24 relative max-md:pt-[7rem] bg-center max-md:bg-[length:300%_100%] bg-[length:100%_100%] overflow-hidden"
    style={{ backgroundImage: "url('/images/bg-smoke.png')"}}
    >
          {/* Background elements */}
          {/* <div className="max-md:hidden absolute top-0 right-0 w-96 h-96 bg-premium-blue/20 rounded-full blur-[120px] -z-10"></div> */}
          {/* <div className="max-md:hidden absolute top-0 left-0 w-96 h-96 bg-premium-pink/20 rounded-full blur-[120px] -z-10"></div> */}

         <div className="container mx-auto px-4 lg:px-8 overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-main font-medium">Seo</span>
                <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">Pozycjonowanie stron internetowych</h1>
                <p className="text-premium-light/70 text-lg mb-8">
                  Zwiększamy widoczność Twojej strony w wyszukiwarce Google, pozyskujemy ruch organiczny
                  i budujemy trwałą obecność Twojej firmy w Internecie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                    Skontaktuj się z nami
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white`} onClick={() => navigate('/projects')}>
                    Zobacz nasze realizacje
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-slide-up">
                {/* Desktop/tablet układ */}
                <div className="w-full h-[220px] sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg mt-6 gap-x-8 hidden md:flex">
                  <img src="/images/header.gif" alt="Statystyka 1" className="w-full h-full object-contain w-[20rem] animate-float-1" />
                  {/* <div className="flex flex-col justify-center items-center gap-10">
                    <img src="/lovable-uploads/seo2.svg" alt="Statystyka 2" className="w-[10rem] mt-[20px] shadow-md rounded-lg animate-float-2" />
                    <img src="/lovable-uploads/seo3.svg" alt="Statystyka 3" className="w-28 md:w-36 shadow-md rounded-lg animate-float-3" />
                  </div> */}
                </div>
                {/* Mobile układ */}
                <div className="w-full flex flex-col items-center justify-center md:hidden">
                  {/* Statystyki w rzędzie pod spodem */}
                  <div className="flex flex-row gap-4 w-full h-full justify-center">
                    <img src="/images/header.gif" alt="Statystyka 1" className="w-full h-full object-contain w-[20rem] animate-float-1" />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        {/* Nowa sekcja: Czym jest SEO i jak może pomóc Twojej firmie? */}
        <section className="py-16  text-premium-light">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
            {/* Lewa kolumna */}
            <div className="flex-1 max-w-2xl">
              <span className="font-semibold text-main font-medium text-sm mb-4 block tracking-wider">Kilka słów o SEO</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Czym jest SEO i jak może <span className="text-premium-orange">wesprzeć Twój biznes?</span>
              </h2>
              <p className="mb-6 text-premium-light/80 ">
                SEO (Search Engine Optimization) to proces optymalizacji stron internetowych pod kątem wyszukiwarek, mający na celu zwiększenie widoczności Twojej firmy w Google. W Polsce często określane jako pozycjonowanie stron.
              </p>
              <p className="mb-4 text-premium-light/80 ">
                W praktyce SEO to szereg działań na stronie i poza nią, które mają przekonać Google, że to właśnie Twoja strona powinna być wyżej w wynikach wyszukiwania. Dlaczego to takie istotne?
              </p>
              <p className="text-premium-light/70 ">
                Dziś większość klientów szuka rozwiązań swoich problemów w Google. Jeśli Twoja strona pojawia się wysoko, zyskujesz zaufanie i realny ruch, który może przełożyć się na wzrost sprzedaży i rozpoznawalności marki.
              </p>
            </div>
            {/* Prawa kolumna */}
            <div className="flex-1 flex flex-col gap-8 justify-center">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-premium-light mb-1">Realnie zwiększasz ruch na stronie</h3>
                  <p className="text-premium-light/70 ">Dzięki skutecznym strategiom SEO zauważysz wzrost odwiedzin, co przekłada się na większą widoczność w sieci.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-premium-light mb-1">Pozyskujesz wartościowych klientów</h3>
                  <p className="text-premium-light/70 ">Dzięki analizie słów kluczowych docierasz do osób faktycznie zainteresowanych Twoją ofertą, co zwiększa szanse na konwersję.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-premium-light mb-1">Budujesz przewagę nad konkurencją</h3>
                  <p className="text-premium-light/70 ">Dzięki SEO Twoja strona może wyprzedzić konkurencję w Google i stać się liderem w branży online.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Dlaczego warto inwestować w SEO? */}
        <section className="py-20  text-premium-light">
          <div className="container mx-auto px-4 flex flex-col gap-12">
            <div className="text-center mb-12">
              <span className="font-semibold text-main font-medium text-sm mb-4 block tracking-wider">Opłaca się?</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight">
                Dlaczego warto <span className="text-premium-orange">inwestować w SEO?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">75% użytkowników zostaje na pierwszej stronie Google</h3>
                  <p className="text-premium-light/80">Aż 75 procent internautów nigdy nie zagląda poza pierwszą stronę wyników wyszukiwania. Jeśli Twoja witryna nie znajduje się wśród tych pierwszych pozycji, jest to jakby nie istniała dla większości użytkowników internetu.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">93% działań w sieci zaczyna się od wyszukiwarki</h3>
                  <p className="text-premium-light/80">Podkreślając istotę posiadania wysokiej pozycji w wynikach wyszukiwania, warto zauważyć, że 93% użytkowników rozpoczyna swoje poszukiwania w sieci od właśnie tego narzędzia.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">70–80% użytkowników omija reklamy w wyszukiwarce</h3>
                  <p className="text-premium-light/80">Zdecydowana większość internautów, około 70–80 procent, ignoruje płatne reklamy, skupiając się głównie na organicznych wynikach wyszukiwania.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h3 className="font-bold mb-1">10-krotnie więcej ruchu niż z mediów społecznościowych</h3>
                  <p className="text-premium-light/80">Statystyki ruchu w wyszukiwarkach wyraźnie wskazują, że wyszukiwanie jest głównym źródłem ruchu w e-commerce.</p>
                </div>
              </div>
            </div>
            <div className="w-[65%] mx-auto flex items-center justify-center">
                <img src="/images/position-checker-monitoring.gif" alt="Case Study" className="rounded-xl w-full h-full object-contain" />
              </div>
          </div>
        </section>
        
        
        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-main font-medium">Nasze usługi</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Kompleksowe pozycjonowanie SEO</h2>
              <p className="text-premium-light/70 text-lg">
                Oferujemy pełen zakres usług SEO, dostosowanych do specyfiki Twojego biznesu i branży.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <Search className="text-premium-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Audyt SEO</h3>
                <p className="text-premium-light/70 mb-4">
                  Kompleksowa analiza Twojej strony pod kątem SEO, która pomoże zidentyfikować problemy i możliwości rozwoju.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Analiza techniczna strony</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Analiza treści i słów kluczowych</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Analiza profilu linków</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 2 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <Settings className="text-premium-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Optymalizacja on-site</h3>
                <p className="text-premium-light/70 mb-4">
                  Kompleksowa optymalizacja techniczna i treściowa Twojej strony, zgodna z wytycznymi Google.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Optymalizacja meta tagów</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Optymalizacja struktury strony</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Poprawa szybkości ładowania</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 3 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <FileText className="text-premium-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Content marketing</h3>
                <p className="text-premium-light/70 mb-4">
                  Tworzenie wartościowych treści, które przyciągają ruch organiczny i budują autorytet Twojej strony.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Strategia contentowa</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Copywriting SEO</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Optymalizacja istniejących treści</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 4 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <Globe className="text-premium-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Link building</h3>
                <p className="text-premium-light/70 mb-4">
                  Budowanie naturalnego profilu linków, które zwiększają autorytet domeny i pozycje w wynikach wyszukiwania.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Pozyskiwanie linków tematycznych</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Budowanie relacji z mediami</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Monitorowanie profilu linków</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 5 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <Target className="text-premium-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">SEO lokalne</h3>
                <p className="text-premium-light/70 mb-4">
                  Zwiększenie widoczności Twojej firmy w lokalnych wynikach wyszukiwania i mapach Google.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Optymalizacja Google Business Profile</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Lokalne katalogi firm</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Recenzje i opinie</span>
                  </li>
                </ul>
              </div>
              
              {/* Service 6 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <BarChart4 className="text-premium-light" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analityka i raportowanie</h3>
                <p className="text-premium-light/70 mb-4">
                  Regularny monitoring i raportowanie wyników, które pozwalają na bieżąco śledzić postępy kampanii SEO.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Monitoring pozycji</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Analiza ruchu</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-premium-purple mr-2" />
                    <span className="text-premium-light/70 text-sm">Miesięczne raporty</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-main font-medium">Dlaczego warto</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Korzyści z inwestycji w SEO</h2>
              <p className="text-premium-light/70 text-lg">
                Pozycjonowanie to jedna z najbardziej opłacalnych długoterminowych strategii marketingowych.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:border-white/20 transition-colors group">
                <div className="w-16 h-16 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <TrendingUp className="text-premium-light" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Trwały wzrost ruchu</h3>
                <p className="text-premium-light/70 text-sm">
                  Regularny napływ potencjalnych klientów bez stałych opłat za reklamy.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:border-white/20 transition-colors group">
                <div className="w-16 h-16 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <Target className="text-premium-light" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Precyzyjne targetowanie</h3>
                <p className="text-premium-light/70 text-sm">
                  Docierasz do użytkowników aktywnie poszukujących Twoich produktów lub usług.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:border-white/20 transition-colors group">
                <div className="w-16 h-16 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <Award className="text-premium-light" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Budowa wiarygodności</h3>
                <p className="text-premium-light/70 text-sm">
                  Wysoka pozycja w Google buduje zaufanie i autorytet Twojej marki.
                </p>
              </div>
              
              {/* Benefit 4 */}
              <div className="/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:border-white/20 transition-colors group">
                <div className="w-16 h-16 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center mb-4">
                  <BarChart4 className="text-premium-light" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Wysoki zwrot z inwestycji</h3>
                <p className="text-premium-light/70 text-sm">
                  W porównaniu z płatną reklamą, SEO generuje lepsze wyniki w długim okresie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Porównanie: SEO vs Google Ads */}
        <section className="py-16  text-premium-light">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="font-semibold text-main text-sm mb-4 block tracking-wider">Seo vs Google Ads</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                SEO czy Google Ads? <span className="text-premium-orange">Co wybrać?</span>
              </h2>
              <p className="text-premium-light/70 text-lg max-w-2xl mx-auto">
                Zobacz, dlaczego długoterminowa inwestycja w SEO przynosi większe korzyści niż płatne kampanie reklamowe Google Ads.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                  <tr>
                    <th className="w-1/3 text-premium-light/80 text-base font-semibold"></th>
                    <th className="w-1/3 text-premium-purple text-lg font-bold text-left">SEO</th>
                    <th className="w-1/3 text-premium-purple text-lg font-bold text-center border-l border-gray-500/30">Google Ads</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Koszty w długim okresie</td>
                    <td className="text-left py-3 font-semibold">Niskie</td>
                    <td className="text-center py-3 border-l border-gray-500/30">Wysokie</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Efekt po zakończeniu działań</td>
                    <td className="text-left py-3 font-semibold">Długotrwały</td>
                    <td className="text-center py-3 border-l border-gray-500/30">Natychmiast zanika</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Zaufanie użytkowników</td>
                    <td className="text-left py-3 font-semibold">Wysokie</td>
                    <td className="text-center py-3 border-l border-gray-500/30">Niskie (oznaczenie reklamy)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Ruch organiczny</td>
                    <td className="text-left py-3 font-semibold">Stały wzrost</td>
                    <td className="text-center py-3 border-l border-gray-500/30">Brak wzrostu po wyłączeniu kampanii</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Budowa marki</td>
                    <td className="text-left py-3 font-semibold">Silna, długofalowa</td>
                    <td className="text-center py-3 border-l border-gray-500/30">Ograniczona do czasu trwania kampanii</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-10 text-center max-w-2xl mx-auto">
              <p className="text-premium-light/80 text-lg mb-4">
                <span className="font-bold text-premium-orange">Wniosek:</span> Długoterminowe inwestowanie w SEO buduje trwałą widoczność, zaufanie i przewagę konkurencyjną, podczas gdy Google Ads daje szybkie, ale krótkotrwałe efekty i generuje stałe koszty.
              </p>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-main font-medium">Nasze sposoby działania</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Jak pracujemy nad SEO</h2>
              <p className="text-premium-light/70 text-lg">
                Nasze podejście do pozycjonowania jest transparentne, oparte na danych i dostosowane do Twoich potrzeb.
              </p>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start gap-6 group">
                <div className="w-full md:w-1/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
                    <div className="flex-col flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center m-4 text-white">1</div>
                      <h3 className="text-xl font-semibold ml-4">Audyt i analiza</h3>
                    </div>
                    <p className="text-premium-light/70">
                      Kompleksowy audyt SEO Twojej strony oraz analiza konkurencji i rynku.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Analiza techniczna strony i identyfikacja błędów</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Badanie słów kluczowych i analiza konkurencji</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Określenie celów i KPI dla kampanii SEO</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start gap-6 group">
                <div className="w-full md:w-1/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-blue/30 transition-colors">
                    <div className="flex-col flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center m-4 text-white">2</div>
                      <h3 className="text-xl font-semibold ml-4">Strategia i planowanie</h3>
                    </div>
                    <p className="text-premium-light/70">
                      Opracowanie kompleksowej strategii SEO dostosowanej do Twojego biznesu.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-blue/30 transition-colors">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Dobór najlepszych słów kluczowych i fraz</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Planowanie zmian technicznych i contentowych</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Opracowanie harmonogramu działań i publikacji treści</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start gap-6 group">
                <div className="w-full md:w-1/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-pink/30 transition-colors">
                    <div className="flex-col flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center m-4 text-white">3</div>
                      <h3 className="text-xl font-semibold ml-4">Implementacja</h3>
                    </div>
                    <p className="text-premium-light/70">
                      Wdrożenie zaplanowanych działań optymalizacyjnych i contentowych.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-pink/30 transition-colors">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Optymalizacja techniczna strony i struktura URL</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Tworzenie i optymalizacja treści pod SEO</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Budowa profilu linków i wzmacnianie autorytetu domeny</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start gap-6 group">
                <div className="w-full md:w-1/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
                    <div className="flex-col flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 flex items-center justify-center m-4 text-white">4</div>
                      <h3 className="text-xl font-semibold">Monitoring i raportowanie</h3>
                    </div>
                    <p className="text-premium-light/70">
                      Śledzenie wyników i dostosowywanie strategii na podstawie analizy danych.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex-col flex /60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Regularne monitorowanie pozycji i ruchu organicznego</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Miesięczne raportowanie wyników i postępów</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-premium-purple mt-1 mr-3 flex-shrink-0" size={18} />
                        <p className="text-premium-light/70">Dostosowanie strategii do zmieniających się algorytmów Google</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sekcja CASE STUDY SEO */}
        <section className="py-16  text-premium-light">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
            {/* Lewa kolumna */}
            <div className="flex-1 max-w-2xl">
              <span className="font-semibold uppercase text-main font-medium text-sm mb-4 block tracking-wider">Realne case study</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Optymalizacja Seo<br />na przykładzie <mark className="text-main">case study</mark>
              </h2>
              <p className="mb-8 text-premium-light/80">
                Pandemia mocno dotknęła branżę eventową. Jednak jeden z naszych klientów postanowił wykorzystać ten czas na poprawę wyników organicznych i zdobycie przewagi nad konkurencją. Sprawdź, co zrobiliśmy i co zyskaliśmy.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-5 w-9 h-9 rounded-full bg-premium-purple flex items-center justify-center text-white font-bold text-lg">1</div>
                  <span className="text-premium-light/90">Wyszukaliśmy frazy z dużym potencjałem przyciągnięcia ruchu.</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-5 w-9 h-9 rounded-full bg-premium-purple flex items-center justify-center text-white font-bold text-lg">2</div>
                  <span className="text-premium-light/90">Zadbaliśmy o zoptymalizowanie treści na stronie pod cele widoczności.</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-5 w-9 h-9 rounded-full bg-premium-purple flex items-center justify-center text-white font-bold text-lg">3</div>
                  <span className="text-premium-light/90">Przygotowaliśmy wpisy blogowe, by wzmocnić stronę i zbudować Topical Authority.</span>
                </div>
              </div>
            </div>
            {/* Prawa kolumna - wyniki */}
            <div className="flex-1 flex flex-col justify-center gap-10 lg:gap-16">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="block text-5xl font-bold text-main">10</span>
                  <span className="block text-premium-light/70 mt-2">fraz w top 20</span>
                </div>
                <div>
                  <span className="block text-5xl font-bold text-main">173%</span>
                  <span className="block text-premium-light/70 mt-2">wzrost ROI</span>
                </div>
                <div>
                  <span className="block text-5xl font-bold text-main">20k+</span>
                  <span className="block text-premium-light/70 mt-2">wzrost unikalnych użytkowników</span>
                </div>
                <div>
                  <span className="block text-5xl font-bold text-main">47%</span>
                  <span className="block text-premium-light/70 mt-2">średni wzrost konwersji na stronie</span>
                </div>
              </div>
              <div className="flex max-md:flex-col justify-center items-center gap-10">
                    <img src="/lovable-uploads/seo2.svg" alt="Statystyka 2" className="w-[10rem] mt-[20px] shadow-md rounded-lg animate-float-2" />
                    <img src="/lovable-uploads/seo1.svg" alt="Statystyka 2" className="w-[10rem] mt-[20px] shadow-md rounded-lg animate-float-1" />
                  </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FAQAccordion
          title="Najczęściej zadawane pytania o pozycjonowanie SEO"
          items={[
            {
              question: 'Na czym polega pozycjonowanie stron internetowych?',
              answer: 'Pozycjonowanie to szereg działań mających na celu zwiększenie widoczności strony w wynikach wyszukiwania Google, m.in. optymalizacja techniczna, content marketing, link building.'
            },
            {
              question: 'Jak długo trzeba czekać na efekty pozycjonowania?',
              answer: 'Pierwsze efekty mogą być widoczne po kilku tygodniach, ale pełne rezultaty pojawiają się zwykle po 3-6 miesiącach regularnych działań.'
            },
            {
              question: 'Czy pozycjonowanie jest jednorazowe?',
              answer: 'Nie, SEO to proces ciągły. Algorytmy Google i konkurencja stale się zmieniają, dlatego ważna jest regularność działań.'
            },
            {
              question: 'Czy mogę pozycjonować stronę samodzielnie?',
              answer: 'Możesz, ale skuteczne SEO wymaga wiedzy, narzędzi i doświadczenia. Współpraca z nami pozwala osiągnąć lepsze i szybsze efekty.'
            },
            {
              question: 'Jak mierzycie skuteczność działań SEO?',
              answer: 'Monitorujemy pozycje fraz kluczowych, ruch organiczny, liczbę konwersji oraz inne wskaźniki KPI.'
            }
          ]}
          className="mb-0"
        />
        <GlobalCTA
          title="Gotowy na zwiększenie widoczności w Google?"
          description="Skontaktuj się z nami, aby otrzymać bezpłatny audyt SEO Twojej strony i indywidualną ofertę pozycjonowania."
          buttons={[
            <Button 
              className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6"
              style={{animationDelay: "0.4s"}}
              size="lg"
              onClick={() => navigate('/contact')}
              key="cta-seo"
            >
              <span className="relative z-10 text-white">Zamów darmowy audyt SEO</span>
            </Button>
          ]}
        />
        
      </div>
    </>
  );
};

export default Seo;
