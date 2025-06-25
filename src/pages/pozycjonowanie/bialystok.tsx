import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import StatsExpandableGrid from "../../components/StatsExpandableGrid";
import { FaChartLine, FaUserCheck, FaClipboardCheck } from 'react-icons/fa';
import FAQAccordion from "../../components/FAQAccordion";
import GlobalCTA from "@/components/GlobalCTA";
import { Button } from '@/components/ui/button';
import LocalSeoSection from "@/components/LocalSeoSection";
import HeroScrollDemo from "@/components/ui/container-scroll-animation-demo";
import { Award, CheckCircle, Clock, Lightbulb, Users, Sparkles } from "lucide-react";

const HERO_IMAGE = "/images/bialystok.jpg";

const BialystokSeoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pozycjonowanie stron Białystok | Pozycjonowanie strony internetowej, SEO, tworzenie stron, sklep internetowy</title>
        <meta name="description" content="Pozycjonowanie stron internetowych Białystok – skuteczne SEO, optymalizacja stron, tworzenie stron internetowych, sklepów internetowych i stron www. Zwiększ widoczność w Google!" />
        <meta name="keywords" content="pozycjonowanie stron Białystok, pozycjonowanie strony, pozycjonowanie stron internetowych, SEO Białystok, tworzenie stron internetowych, sklep internetowy, strona internetowa, pozycjonowanie stron SEO, strona www" />
        <link rel="canonical" href="https://idztech.pl/pozycjonowanie/bialystok" />
      </Helmet>
      <Navbar />
      {/* HERO SECTION - 2 kolumny */}
      <section className="w-full py-16 md:py-24 relative pt-9r">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Lewa kolumna */}
          <div className="flex-1 w-full max-w-xl relative">
            <span className="uppercase text-sm font-semibold tracking-wider text-premium-purple mb-4 block">SEO</span>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-premium-dark dark:text-premium-light leading-tight">
              Pozycjonowanie stron internetowych <span className="text-premium-purple">Białystok</span>
            </h1>
            <p className="text-lg text-premium-light/80 mb-8">
              Skuteczne pozycjonowanie strony internetowej w Białymstoku – zwiększamy widoczność Twojej firmy w Google, pozyskujemy lokalnych klientów i budujemy trwałą obecność Twojej marki online. Oferujemy także tworzenie stron internetowych, sklepów internetowych oraz kompleksowe SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 hover:opacity-90 transition-opacity text-white rounded-full"
                onClick={() => navigate('/contact')}
              >
                Zamów pozycjonowanie stron Białystok
              </button>
            </div>
          </div>
          {/* Prawa kolumna */}
          <div className="flex-1 w-full flex items-center justify-center relative">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full relative">
              <img
                src={HERO_IMAGE}
                alt="Panorama Białegostoku"
                className="w-full h-72 md:h-96 object-cover object-center"
                loading="lazy"
              />
              {/* Kafelki */}
              <div className="absolute inset-0 p-4">
                {/* Lewy górny kafelek */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-premium-dark/90 backdrop-blur-sm rounded-xl p-2 shadow-sm transform hover:scale-105 transition-transform duration-300 max-w-[200px]">
                  <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <FaChartLine className="light:text-black dark:text-white" />
                    </div>
                    <h3 className="font-bold text-premium-dark dark:text-premium-light">Wzrost ruchu</h3>
                  </div>
                </div>
                {/* Prawy dolny kafelek */}
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-premium-dark/90 backdrop-blur-sm rounded-xl p-2 shadow-sm transform hover:scale-105 transition-transform duration-300 max-w-[200px]">
                  <div className="flex items-center gap-3 ">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaUserCheck className="light:text-black dark:text-white" />
                    </div>
                    <h3 className="font-bold text-premium-dark dark:text-premium-light">Więcej klientów</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nowa sekcja: Czym jest SEO i jak może pomóc Twojej firmie? */}
      <section className="py-16 text-premium-light">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 bg-[#f9f9f9] dark:bg-[#181818] rounded-2xl p-10">
          {/* Lewa kolumna */}
          <div className="flex-1 max-w-2xl">
            <span className="font-semibold uppercase text-premium-purple font-medium text-sm mb-4 block tracking-wider">Kilka słów o SEO</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Czym jest SEO i jak może <span className="text-premium-orange">wesprzeć Twój biznes?</span>
            </h2>
            <p className="mb-6 text-premium-light/80 text-base">
              SEO (Search Engine Optimization) to proces optymalizacji stron internetowych pod kątem wyszukiwarek, mający na celu zwiększenie widoczności Twojej firmy w Google. W Polsce często określane jako pozycjonowanie stron.
            </p>
            <p className="mb-4 text-premium-light/80 text-base">
              W praktyce SEO to szereg działań na stronie i poza nią, które mają przekonać Google, że to właśnie Twoja strona powinna być wyżej w wynikach wyszukiwania. Dlaczego to takie istotne?
            </p>
            <p className="text-premium-light/70 text-base">
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
                <p className="text-premium-light/70 text-base">Dzięki skutecznym strategiom SEO zauważysz wzrost odwiedzin, co przekłada się na większą widoczność w sieci.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-premium-light mb-1">Pozyskujesz wartościowych klientów</h3>
                <p className="text-premium-light/70 text-base">Dzięki analizie słów kluczowych docierasz do osób faktycznie zainteresowanych Twoją ofertą, co zwiększa szanse na konwersję.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-premium-green flex items-center justify-center mt-1">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-premium-light mb-1">Budujesz przewagę nad konkurencją</h3>
                <p className="text-premium-light/70 text-base">Dzięki SEO Twoja strona może wyprzedzić konkurencję w Google i stać się liderem w branży online.</p>
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

      {/* DLACZEGO WARTO */}
      <section className="w-full py-16 mb-[8rem]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Dlaczego warto?</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Pozycjonowanie stron internetowych</h3>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Pozycjonowanie stron internetowych (SEO) w Białymstoku to gwarancja większej widoczności w Google, większej liczby klientów i przewagi nad konkurencją. Oferujemy także tworzenie stron www oraz sklepów internetowych, które są zoptymalizowane pod SEO.
            </p>
          </div>

          {/* GRID 2x2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Kafelek 1 */}
            <div className="flex-1 bg-[#f9f9f9] dark:bg-[#181818] rounded-2xl shadow-sm p-6 md:p-8 flex items-center gap-5 min-w-[260px]">
              <span className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
                <FaChartLine className="text-white text-2xl" />
              </span>
              <div>
                <span className="block font-semibold text-premium-dark dark:text-premium-light text-base">Zwiększamy Twoją</span>
                <span className="block font-bold text-lg text-premium-purple">Widoczność strony internetowej</span>
                <p className="text-premium-dark/80 dark:text-premium-light/80 text-base mt-2">Kompleksowa strategia SEO i pozycjonowania stron internetowych pozwoli Ci prześcignąć konkurencję na rynku Białegostoku.</p>
              </div>
            </div>
            {/* Kafelek 2 */}
            <div className="flex-1 bg-[#f9f9f9] dark:bg-[#181818] rounded-2xl shadow-sm p-6 md:p-8 flex items-center gap-5 min-w-[260px]">
              <span className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
                <FaUserCheck className="text-white text-2xl" />
              </span>
              <div>
                <span className="block font-semibold text-premium-dark dark:text-premium-light text-base">Zwiększamy Twój</span>
                <span className="block font-bold text-lg text-premium-purple">Ruch na stronie www</span>
                <p className="text-premium-dark/80 dark:text-premium-light/80 text-base mt-2">Odpowiednie działania SEO i pozycjonowanie strony internetowej ściągną na Twoją stronę www oraz sklep internetowy klientów z Białegostoku i okolic.</p>
              </div>
            </div>
          </div>
          {/* Kafelek szeroki na całą szerokość */}
          <div className="mt-8 bg-[#f9f9f9] dark:bg-[#181818] rounded-2xl shadow-sm p-6 md:p-10 flex items-center gap-5 min-w-[260px]">
            <span className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
              <FaClipboardCheck className="text-white text-2xl" />
            </span>
            <div>
              <span className="block font-semibold text-premium-dark dark:text-premium-light text-base">Zwiększamy Twoją</span>
              <span className="block font-bold text-lg text-premium-purple">Sprzedaż w sklepie internetowym</span>
              <p className="text-premium-dark/80 dark:text-premium-light/80 text-base mt-2">Wiemy, jakie kroki wykonać, by Twój sklep internetowy i strona internetowa w Białymstoku generowały większe przychody i rozwijały się z miesiąca na miesiąc dzięki skutecznemu pozycjonowaniu stron SEO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DZIAŁAMY SKUTECZNIE */}
      <section className="w-full py-16 mb-[8rem]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Działamy skutecznie</span>
            </div>
            <h4 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Wiemy, gdzie są Twoi klienci</h4>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Wiemy też, jak do nich dotrzeć i na jakie rozwiązania postawić, by Twój biznes generował jeszcze lepsze wyniki.
            </p>
          </div>

          {/* KAFELKI GRID */}
          <StatsExpandableGrid />
        </div>
      </section>

      {/* CO ZYSKUJESZ - w stylu statystyk */}
      <section className="w-full py-16 mb-[8rem]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Korzyści z pozycjonowania</span>
            </div>
            <h4 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Poznaj realne korzyści współpracy z <span className="text-premium-purple">IDZTECH</span></h4>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Oto, co zyskasz wybierając naszą ofertę: pozycjonowanie stron internetowych, SEO, tworzenie stron www i sklepów internetowych w Białymstoku.
            </p>
          </div>
          <CoZyskujeszExpandableGrid />
        </div>
      </section>

            {/* Why Us section */}
            <section className="relative overflow-hidden w-full py-16 mb-[8rem]">
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

      <section className="mb-12">
        <h5 className="text-2xl font-semibold mb-8 text-premium-dark dark:text-premium-light text-center">Jak wygląda współpraca?</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Etap 1 */}
          <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="bg-premium-purple/10 rounded-full p-3 mb-3"><Sparkles className="text-premium-purple w-7 h-7" /></span>
            <span className="text-premium-purple font-bold text-lg mb-1">1</span>
            <span className="font-semibold text-premium-dark dark:text-premium-light mb-2 text-center">Analiza strony i konkurencji</span>
            <p className="text-premium-dark/80 dark:text-premium-light/80 text-center text-sm">Szczegółowa analiza Twojej strony i konkurencji w Białymstoku.</p>
          </div>
          {/* Etap 2 */}
          <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="bg-premium-purple/10 rounded-full p-3 mb-3"><Sparkles className="text-premium-purple w-7 h-7" /></span>
            <span className="text-premium-purple font-bold text-lg mb-1">2</span>
            <span className="font-semibold text-premium-dark dark:text-premium-light mb-2 text-center">Opracowanie strategii SEO</span>
            <p className="text-premium-dark/80 dark:text-premium-light/80 text-center text-sm">Tworzymy indywidualną strategię SEO dopasowaną do Twoich celów.</p>
          </div>
          {/* Etap 3 */}
          <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="bg-premium-purple/10 rounded-full p-3 mb-3"><Sparkles className="text-premium-purple w-7 h-7" /></span>
            <span className="text-premium-purple font-bold text-lg mb-1">3</span>
            <span className="font-semibold text-premium-dark dark:text-premium-light mb-2 text-center">Optymalizacja strony</span>
            <p className="text-premium-dark/80 dark:text-premium-light/80 text-center text-sm">Wdrażamy techniczne i contentowe zmiany na stronie.</p>
          </div>
          {/* Etap 4 */}
          <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="bg-premium-purple/10 rounded-full p-3 mb-3"><Sparkles className="text-premium-purple w-7 h-7" /></span>
            <span className="text-premium-purple font-bold text-lg mb-1">4</span>
            <span className="font-semibold text-premium-dark dark:text-premium-light mb-2 text-center">Budowa profilu linków</span>
            <p className="text-premium-dark/80 dark:text-premium-light/80 text-center text-sm">Tworzymy i rozwijamy profil linków lokalnych dla Twojej firmy.</p>
          </div>
          {/* Etap 5 */}
          <div className="/60 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center">
            <span className="bg-premium-purple/10 rounded-full p-3 mb-3"><Sparkles className="text-premium-purple w-7 h-7" /></span>
            <span className="text-premium-purple font-bold text-lg mb-1">5</span>
            <span className="font-semibold text-premium-dark dark:text-premium-light mb-2 text-center">Monitoring i raportowanie</span>
            <p className="text-premium-dark/80 dark:text-premium-light/80 text-center text-sm">Stały monitoring efektów i regularne raporty z postępów.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <FAQAccordion
          title="Najczęściej zadawane pytania o pozycjonowanie stron internetowych, SEO i tworzenie stron w Białymstoku"
          items={[
            {
              question: 'Na czym polega pozycjonowanie stron internetowych w Białymstoku?',
              answer: 'Pozycjonowanie stron internetowych (SEO) to działania mające na celu zwiększenie widoczności strony www lub sklepu internetowego w wynikach Google. Obejmuje optymalizację techniczną, content marketing i link building.'
            },
            {
              question: 'Czy oferujecie także tworzenie stron internetowych i sklepów internetowych?',
              answer: 'Tak, projektujemy i wdrażamy nowoczesne strony internetowe oraz sklepy internetowe zoptymalizowane pod SEO.'
            },
            {
              question: 'Ile kosztuje pozycjonowanie strony internetowej w Białymstoku?',
              answer: 'Koszt pozycjonowania strony internetowej zależy od wielu czynników, takich jak konkurencyjność branży, zakres prac i cele biznesowe. Skontaktuj się z nami, aby otrzymać indywidualną wycenę.'
            },
            {
              question: 'Jak długo trwa pozycjonowanie strony internetowej?',
              answer: 'Pierwsze efekty pozycjonowania mogą być widoczne już po 3-6 miesiącach, ale pełne rezultaty wymagają systematycznej pracy przez 6-12 miesięcy.'
            }
          ]}
        />
      </section>

      <LocalSeoSection />
      <GlobalCTA
        title="Zamów skuteczne pozycjonowanie stron w Białymstoku"
        description="Zwiększ widoczność swojej firmy w Google. Skontaktuj się z nami i otrzymaj darmową wycenę SEO, tworzenia strony internetowej lub sklepu online."
        buttons={[
          <Button
            size="lg"
            className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 hover:opacity-90 transition-opacity text-white rounded-full"
            onClick={() => window.location.href = '/contact'}
            key="cta-contact"
          >
            <span className="relative z-10 text-white">Bezpłatna wycena</span>
          </Button>
        ]}
      />
      <Footer />
    </div>
  );
};

const coZyskujeszStats = [
  {
    main: "Wyprzedzisz konkurencję 🔝",
    sub: "Zyskasz przewagę na lokalnym rynku dzięki skutecznym działaniom SEO.",
    desc: "Będziesz o krok przed konkurencją w Białymstoku.",
    more: "Dzięki naszym strategiom SEO nie tylko dogonisz, ale i prześcigniesz największych graczy w Twojej branży. Otrzymasz indywidualne rekomendacje, które pozwolą Ci stale utrzymywać przewagę nad konkurencją.",
  },
  {
    main: "Więcej klientów 🔝",
    sub: "Zwiększysz ruch na stronie od klientów z Białegostoku i okolic.",
    desc: "Dotrzesz do osób realnie zainteresowanych Twoją ofertą.",
    more: "Nasze działania SEO są ukierunkowane na pozyskiwanie wartościowego ruchu, który realnie przekłada się na zapytania i sprzedaż. Skupiamy się na frazach, które generują konwersje, a nie tylko ruch dla statystyk.",
  },
  {
    main: "Indywidualna strategia",
    sub: "Otrzymasz plan SEO dopasowany do Twojej branży i celów biznesowych.",
    desc: "Działania szyte na miarę Twojego biznesu.",
    more: "Nie stosujemy gotowych szablonów. Każda strategia powstaje w oparciu o analizę Twojej branży, konkurencji i celów. Dzięki temu masz pewność, że działania SEO są maksymalnie skuteczne.",
  },
  {
    main: "Partnerskie wsparcie",
    sub: "Stały kontakt, raportowanie efektów i wsparcie ekspertów na każdym etapie.",
    desc: "Masz pewność, że nie zostaniesz sam z wyzwaniami SEO.",
    more: "Otrzymasz dedykowanego opiekuna, regularne raporty i szybkie odpowiedzi na pytania. Jesteśmy z Tobą na każdym etapie współpracy, dbając o Twój spokój i rozwój biznesu.",
  },
];

function CoZyskujeszExpandableGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {coZyskujeszStats.map((stat, i) => (
        <div
          key={i}
          className="flex bg-[#f9f9f9] dark:bg-[#181818] rounded-2xl shadow-sm p-6 md:p-8 gap-5 items-start min-w-[260px]"
        >
          {/* Gradientowa ikona */}
          <span className="w-12 h-12 rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 flex items-center justify-center mb-4 p-[10px]">
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          {/* Teksty */}
          <div>
            <div className="font-bold text-premium-dark dark:text-premium-light text-base md:text-lg mb-1">
              {stat.main.replace(' 🔝', '')}
            </div>
            <div className="font-semibold text-premium-purple text-base md:text-lg mb-1">
              {stat.sub}
            </div>
            <div className="text-premium-dark/70 dark:text-premium-light/80 text-base">
              {stat.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BialystokSeoPage; 