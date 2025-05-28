import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Check, ChevronRight, Search, BarChart4, FileText, Settings, Target, TrendingUp, Award, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SplineSEO from "@/components/SplineSEO";
import GlobalCTA from "@/components/GlobalCTA";
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';

const Seo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-premium-dark">
      <Helmet>
        <title>IDZTECH - Pozycjonowanie stron internetowych</title>
        <meta name="description" content="Zwiększamy widoczność Twojej strony w wyszukiwarce Google, pozyskujemy ruch organiczny i budujemy trwałą obecność Twojej firmy w Internecie." />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - Pozycjonowanie stron internetowych" />
        <meta property="og:description" content="Zwiększamy widoczność Twojej strony w wyszukiwarce Google, pozyskujemy ruch organiczny i budujemy trwałą obecność Twojej firmy w Internecie." />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/pozycjonowanie-stron-internetowych" />
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
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-premium-purple font-medium">SEO</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">Pozycjonowanie stron internetowych</h1>
              <p className="text-premium-light/70 text-lg mb-8">
                Zwiększamy widoczność Twojej strony w wyszukiwarce Google, pozyskujemy ruch organiczny
                i budujemy trwałą obecność Twojej firmy w Internecie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-premium-gradient hover:bg-transparent hover:text-black transition-all group relative overflow-hidden"
                  onClick={() => navigate('/contact')}
                >
                  <span className="relative z-10 text-white">Darmowa wycena</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="w-full h-[220px] sm:h-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg mt-6">
                <SplineSEO />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Nasze usługi</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Kompleksowe pozycjonowanie SEO</h2>
            <p className="text-premium-light/70 text-lg">
              Oferujemy pełen zakres usług SEO, dostosowanych do specyfiki Twojego biznesu i branży.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-purple to-premium-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-blue to-premium-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Settings className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Optymalizacja on-site</h3>
              <p className="text-premium-light/70 mb-4">
                Kompleksowa optymalizacja techniczna i treściowa Twojej strony, zgodna z wytycznymi Google.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Optymalizacja meta tagów</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Optymalizacja struktury strony</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Poprawa szybkości ładowania</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-pink to-premium-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content marketing</h3>
              <p className="text-premium-light/70 mb-4">
                Tworzenie wartościowych treści, które przyciągają ruch organiczny i budują autorytet Twojej strony.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Strategia contentowa</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Copywriting SEO</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Optymalizacja istniejących treści</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-purple to-premium-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-blue to-premium-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO lokalne</h3>
              <p className="text-premium-light/70 mb-4">
                Zwiększenie widoczności Twojej firmy w lokalnych wynikach wyszukiwania i mapach Google.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Optymalizacja Google Business Profile</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Lokalne katalogi firm</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Recenzje i opinie</span>
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-pink to-premium-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart4 className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analityka i raportowanie</h3>
              <p className="text-premium-light/70 mb-4">
                Regularny monitoring i raportowanie wyników, które pozwalają na bieżąco śledzić postępy kampanii SEO.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Monitoring pozycji</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Analiza ruchu</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
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
            <span className="text-premium-purple font-medium">Dlaczego warto</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Korzyści z inwestycji w SEO</h2>
            <p className="text-premium-light/70 text-lg">
              Pozycjonowanie to jedna z najbardziej opłacalnych długoterminowych strategii marketingowych.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-purple to-premium-blue mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-premium-light" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Trwały wzrost ruchu</h3>
              <p className="text-premium-light/70 text-sm">
                Regularny napływ potencjalnych klientów bez stałych opłat za reklamy.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-blue to-premium-pink mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-premium-light" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Precyzyjne targetowanie</h3>
              <p className="text-premium-light/70 text-sm">
                Docierasz do użytkowników aktywnie poszukujących Twoich produktów lub usług.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-pink to-premium-purple mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-premium-light" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-3">Budowa wiarygodności</h3>
              <p className="text-premium-light/70 text-sm">
                Wysoka pozycja w Google buduje zaufanie i autorytet Twojej marki.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-purple to-premium-blue mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
      
      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-purple font-medium">Nasza metodologia</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Jak pracujemy nad SEO</h2>
            <p className="text-premium-light/70 text-lg">
              Nasze podejście do pozycjonowania jest transparentne, oparte na danych i dostosowane do Twoich potrzeb.
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-6 group">
              <div className="w-full md:w-1/3">
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-xl font-semibold ml-4">Audyt i analiza</h3>
                  </div>
                  <p className="text-premium-light/70">
                    Kompleksowy audyt SEO Twojej strony oraz analiza konkurencji i rynku.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
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
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-blue/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-xl font-semibold ml-4">Strategia i planowanie</h3>
                  </div>
                  <p className="text-premium-light/70">
                    Opracowanie kompleksowej strategii SEO dostosowanej do Twojego biznesu.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-blue/30 transition-colors">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-premium-blue mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-premium-light/70">Dobór najlepszych słów kluczowych i fraz</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-premium-blue mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-premium-light/70">Planowanie zmian technicznych i contentowych</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-premium-blue mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-premium-light/70">Opracowanie harmonogramu działań i publikacji treści</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-6 group">
              <div className="w-full md:w-1/3">
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-pink/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-xl font-semibold ml-4">Implementacja</h3>
                  </div>
                  <p className="text-premium-light/70">
                    Wdrożenie zaplanowanych działań optymalizacyjnych i contentowych.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-pink/30 transition-colors">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-premium-pink mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-premium-light/70">Optymalizacja techniczna strony i struktura URL</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-premium-pink mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-premium-light/70">Tworzenie i optymalizacja treści pod SEO</p>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-premium-pink mt-1 mr-3 flex-shrink-0" size={18} />
                      <p className="text-premium-light/70">Budowa profilu linków i wzmacnianie autorytetu domeny</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start gap-6 group">
              <div className="w-full md:w-1/3">
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-premium-gradient flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-xl font-semibold ml-4">Monitoring i raportowanie</h3>
                  </div>
                  <p className="text-premium-light/70">
                    Śledzenie wyników i dostosowywanie strategii na podstawie analizy danych.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="bg-premium-dark/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-premium-purple/30 transition-colors">
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
            className="animate-fade-in bg-premium-gradient hover:bg-transparent hover:text-black transition-all group relative overflow-hidden"
            style={{animationDelay: "0.4s"}}
            size="lg"
            onClick={() => navigate('/contact')}
            key="cta-seo"
          >
            <span className="relative z-10 text-white">Zamów darmowy audyt SEO</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        ]}
      />
      
      <Footer />
    </div>
  );
};

export default Seo;
