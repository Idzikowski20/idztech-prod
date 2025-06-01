import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import StatsExpandableGrid from "../../components/StatsExpandableGrid";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';
import { FaChartLine, FaUserCheck, FaClipboardCheck, FaHandshake, FaRegSquare } from 'react-icons/fa';
import FAQAccordion from "../../components/FAQAccordion";
import GlobalCTA from "@/components/GlobalCTA";
import { Button } from '@/components/ui/button';
import LocalSeoSection from "@/components/LocalSeoSection";
import HeroScrollDemo from "@/components/ui/container-scroll-animation-demo";

const HERO_IMAGE = "/images/lodz.jpg";
const CHARTS_IMAGE = "/images/charts.webp";

const LodzSeoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pozycjonowanie stron Łódź | Pozycjonowanie strony internetowej, SEO, tworzenie stron, sklep internetowy</title>
        <meta name="description" content="Pozycjonowanie stron internetowych Łódź – skuteczne SEO, optymalizacja stron, tworzenie stron internetowych, sklepów internetowych i stron www. Zwiększ widoczność w Google!" />
        <meta name="keywords" content="pozycjonowanie stron Łódź, pozycjonowanie strony, pozycjonowanie stron internetowych, SEO Łódź, tworzenie stron internetowych, sklep internetowy, strona internetowa, pozycjonowanie stron SEO, strona www" />
        <link rel="canonical" href="https://idztech.pl/pozycjonowanie/lodz" />
      </Helmet>
      <Navbar />
      {/* HERO SECTION - 2 kolumny */}
      <section className="w-full py-16 md:py-24 relative pt-9r">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Lewa kolumna */}
          <div className="flex-1 w-full max-w-xl relative">
            <span className="uppercase text-sm font-semibold tracking-wider text-premium-purple mb-4 block">SEO</span>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-premium-dark dark:text-premium-light leading-tight">
              Pozycjonowanie stron internetowych <span className="text-premium-purple">Łódź</span>
            </h1>
            <p className="text-lg text-premium-light/80 mb-8">
              Skuteczne pozycjonowanie strony internetowej w Łodzi – zwiększamy widoczność Twojej firmy w Google, pozyskujemy lokalnych klientów i budujemy trwałą obecność Twojej marki online. Oferujemy także tworzenie stron internetowych, sklepów internetowych oraz kompleksowe SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-4 font-semibold text-base shadow-md"
                onClick={() => navigate('/contact')}
              >
                Zamów pozycjonowanie stron lodz
              </button>
            </div>
          </div>
          {/* Prawa kolumna */}
          <div className="flex-1 w-full flex items-center justify-center relative">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src={HERO_IMAGE}
                alt="Panorama Łodzi"
                className="w-full h-72 md:h-96 object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

            {/* Nowa sekcja: Czym jest SEO i jak może pomóc Twojej firmie? */}
            <section className="py-16 bg-premium-dark text-premium-light">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
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

      {/* DLACZEGO WARTO */}
      <section className="w-full py-16 mb-[8rem]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Dlaczego warto pozycjonować stronę internetową?</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Pozycjonowanie stron internetowych</h2>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Pozycjonowanie stron internetowych (SEO) w Łodzi to gwarancja większej widoczności w Google, większej liczby klientów i przewagi nad konkurencją. Oferujemy także tworzenie stron www oraz sklepów internetowych, które są zoptymalizowane pod SEO.
            </p>
          </div>

          {/* GRID 2x2 */}
          <div className="grid md:grid-cols-2 gap-14">
            {/* Karta 1 */}
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8 transition-all duration-300  relative group">
              <h3 className="text-2xl">Zwiększymy Twoją</h3><h3 className="text-2xl font-bold text-premium-purple mb-2">Widoczność strony internetowej 🔝</h3>
              <p className="text-premium-dark dark:text-premium-light mb-4">Kompleksowa strategia SEO i pozycjonowania stron internetowych pozwoli Ci prześcignąć konkurencję na rynku Łodzi.</p>
            </div>
            {/* Karta 2 */}
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8 transition-all duration-300  relative group">
            <h3 className="text-2xl">Zwiększymy Twój</h3><h3 className="text-2xl font-bold text-premium-purple mb-2">Ruch na stronie www 🔝</h3>
              <p className="text-premium-dark dark:text-premium-light mb-4">Odpowiednie działania SEO i pozycjonowanie strony internetowej ściągną na Twoją stronę www oraz sklep internetowy klientów z Łodzi i okolic.</p>
            </div>
            {/* Kafelek z wykresem i sprzedażą na całą szerokość */}
            <div className="md:col-span-2 bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={[
                    { name: 'STY', konkurencja: 120, idztech: 120 },
                    { name: 'LUT', konkurencja: 110, idztech: 140 },
                    { name: 'MAR', konkurencja: 115, idztech: 170 },
                    { name: 'KWI', konkurencja: 100, idztech: 200 },
                    { name: 'MAJ', konkurencja: 105, idztech: 240 },
                    { name: 'CZE', konkurencja: 110, idztech: 300 },
                    { name: 'LIP', konkurencja: 120, idztech: 340 },
                    { name: 'SIE', konkurencja: 130, idztech: 380 },
                    { name: 'WRZ', konkurencja: 140, idztech: 420 },
                  ]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorIdztech" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8350e8" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#8350e8" stopOpacity={1} />
                      </linearGradient>
                      <linearGradient id="colorKonkurencja" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#bdbdbd" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#bdbdbd" stopOpacity={0.7} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ececec" />
                    <XAxis dataKey="name" tick={{ fill: '#8884d8', fontWeight: 600 }} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ background: '#fff', borderRadius: 8, border: 'none', color: '#222' }} />
                    <Legend verticalAlign="top" align="right" iconType="plainline" wrapperStyle={{ paddingBottom: 10 }} />
                    <Line type="monotone" dataKey="konkurencja" stroke="#bdbdbd" strokeWidth={3} dot={false} strokeDasharray="5 5" name="Konkurencja" />
                    <Line type="monotone" dataKey="idztech" stroke="url(#colorIdztech)" strokeWidth={4} dot={false} name="IDZTECH" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center">
              <h3 className="text-2xl">Zwiększymy Twoją</h3><h3 className="text-2xl font-bold text-premium-purple mb-2">Sprzedaż w sklepie internetowym 🔝</h3>
                <p className="text-premium-dark dark:text-premium-light text-base">
                  Wiemy, jakie kroki wykonać, by Twój sklep internetowy i strona internetowa w Łodzi generowały większe przychody i rozwijały się z miesiąca na miesiąc dzięki skutecznemu pozycjonowaniu stron SEO.
                </p>
              </div>
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
            <h3 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Wiemy, gdzie są Twoi klienci</h3>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Wiemy też, jak do nich dotrzeć i na jakie rozwiązania postawić, by Twój biznes generował jeszcze lepsze wyniki.
            </p>
          </div>

          {/* KAFELKI GRID */}
          <StatsExpandableGrid />
        </div>
      </section>

      {/* CO ZYSKUJESZ - w stylu statystyk */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Korzyści z pozycjonowania stron internetowych i SEO w Łodzi</span>
            </div>
            <h4 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Poznaj realne korzyści współpracy z <h4 className="text-premium-purple">IDZTECH</h4></h4>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Oto, co zyskasz wybierając naszą ofertę: pozycjonowanie stron internetowych, SEO, tworzenie stron www i sklepów internetowych w Łodzi.
            </p>
          </div>
          <CoZyskujeszExpandableGrid />
        </div>
      </section>

      <section className="w-full py-16">
      <HeroScrollDemo />
      </section>

      <section className="mb-12">
        <h5 className="text-2xl font-semibold mb-8 text-premium-dark dark:text-premium-light text-center">Jak wygląda współpraca?</h5>
        <div className="relative max-w-[60rem] mx-auto">
          {/* pionowa linia */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-premium-purple/20 -translate-x-1/2 z-0 hidden md:block" />
          <div className="flex flex-col gap-10">
            {/* Etap 1 */}
            <div className="flex md:justify-start md:pl-0 md:pr-16 relative z-10">
              <div className="bg-white dark:bg-premium-dark rounded-2xl shadow-lg p-6 w-full md:w-2/3 border-l-4 border-premium-purple">
                <div className="flex items-center mb-2">
                  <span className="text-premium-purple font-bold text-lg mr-3">1</span>
                  <span className="font-semibold text-premium-dark dark:text-premium-light">Analiza strony i konkurencji</span>
                </div>
                <p className="text-premium-dark/80 dark:text-premium-light/80">Szczegółowa analiza Twojej strony i konkurencji w Łodzi.</p>
              </div>
            </div>
            {/* Etap 2 */}
            <div className="flex md:justify-end md:pl-16 md:pr-0 relative z-10">
              <div className="bg-white dark:bg-premium-dark rounded-2xl shadow-lg p-6 w-full md:w-2/3 border-r-4 border-premium-purple md:text-right">
                <div className="flex items-center mb-2 md:justify-end">
                  <span className="font-semibold text-premium-dark dark:text-premium-light mr-3 md:mr-0 md:ml-3">Opracowanie strategii SEO</span>
                  <span className="text-premium-purple font-bold text-lg pl-2">2</span>
                </div>
                <p className="text-premium-dark/80 dark:text-premium-light/80">Tworzymy indywidualną strategię SEO dopasowaną do Twoich celów.</p>
              </div>
            </div>
            {/* Etap 3 */}
            <div className="flex md:justify-start md:pl-0 md:pr-16 relative z-10">
              <div className="bg-white dark:bg-premium-dark rounded-2xl shadow-lg p-6 w-full md:w-2/3 border-l-4 border-premium-purple">
                <div className="flex items-center mb-2">
                  <span className="text-premium-purple font-bold text-lg mr-3">3</span>
                  <span className="font-semibold text-premium-dark dark:text-premium-light">Optymalizacja strony</span>
                </div>
                <p className="text-premium-dark/80 dark:text-premium-light/80">Wdrażamy techniczne i contentowe zmiany na stronie.</p>
              </div>
            </div>
            {/* Etap 4 */}
            <div className="flex md:justify-end md:pl-16 md:pr-0 relative z-10">
              <div className="bg-white dark:bg-premium-dark rounded-2xl shadow-lg p-6 w-full md:w-2/3 border-r-4 border-premium-purple md:text-right">
                <div className="flex items-center mb-2 md:justify-end">
                  <span className="font-semibold text-premium-dark dark:text-premium-light mr-3 md:mr-0 md:ml-3">Budowa profilu linków</span>
                  <span className="text-premium-purple font-bold text-lg pl-2">4</span>
                </div>
                <p className="text-premium-dark/80 dark:text-premium-light/80">Tworzymy i rozwijamy profil linków lokalnych dla Twojej firmy.</p>
              </div>
            </div>
            {/* Etap 5 */}
            <div className="flex md:justify-start md:pl-0 md:pr-16 relative z-10">
              <div className="bg-white dark:bg-premium-dark rounded-2xl shadow-lg p-6 w-full md:w-2/3 border-l-4 border-premium-purple">
                <div className="flex items-center mb-2">
                  <span className="text-premium-purple font-bold text-lg mr-3">5</span>
                  <span className="font-semibold text-premium-dark dark:text-premium-light">Monitoring i raportowanie</span>
                </div>
                <p className="text-premium-dark/80 dark:text-premium-light/80">Stały monitoring efektów i regularne raporty z postępów.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <FAQAccordion
          title="Najczęściej zadawane pytania o pozycjonowanie stron internetowych, SEO i tworzenie stron w Łodzi"
          items={[
            {
              question: 'Na czym polega pozycjonowanie stron internetowych w Łodzi?',
              answer: 'Pozycjonowanie stron internetowych (SEO) to działania mające na celu zwiększenie widoczności strony www lub sklepu internetowego w wynikach Google. Obejmuje optymalizację techniczną, content marketing i link building.'
            },
            {
              question: 'Czy oferujecie także tworzenie stron internetowych i sklepów internetowych?',
              answer: 'Tak, projektujemy i wdrażamy nowoczesne strony internetowe oraz sklepy internetowe zoptymalizowane pod SEO.'
            },
            {
              question: 'Ile kosztuje pozycjonowanie strony internetowej w Łodzi?',
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
        title="Zamów skuteczne pozycjonowanie stron w Łodzi"
        description="Zwiększ widoczność swojej firmy w Google. Skontaktuj się z nami i otrzymaj darmową wycenę SEO, tworzenia strony internetowej lub sklepu online."
        buttons={[
          <Button
            size="lg"
            className="bg-premium-gradient hover:opacity-90 transition-opacity animate-fade-in group relative overflow-hidden"
            onClick={() => window.location.href = '/contact'}
            key="cta-contact"
          >
            <span className="relative z-10 text-white">Bezpłatna wycena</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
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
    desc: "Będziesz o krok przed konkurencją w Łodzi.",
    more: "Dzięki naszym strategiom SEO nie tylko dogonisz, ale i prześcigniesz największych graczy w Twojej branży. Otrzymasz indywidualne rekomendacje, które pozwolą Ci stale utrzymywać przewagę nad konkurencją.",
  },
  {
    main: "Więcej klientów 🔝",
    sub: "Zwiększysz ruch na stronie od klientów z Łodzi i okolic.",
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

const CheckIcon = (
  <span className="inline-block w-6 h-6 rounded-full bg-[#886be2] flex items-center justify-center mr-3 text-lg font-bold transition-all duration-300">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 9.5L8 12.5L13 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const PlusIcon = (
  <span className="inline-block w-6 h-6 rounded-full bg-[#886be2] text-white flex items-center justify-center mr-3 text-lg font-bold transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg transition-transform duration-200">
    +
  </span>
);

function CoZyskujeszExpandableGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="grid md:grid-cols-2 gap-14">
      {coZyskujeszStats.map((stat, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 p-8 flex items-start gap-6 shadow-xl min-h-[180px] transition-all duration-300 cursor-pointer group ${isOpen ? 'ring-2 ring-premium-purple/40' : ''}`}
            onClick={() => setOpen(isOpen ? null : i)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(isOpen ? null : i); }}
            aria-expanded={isOpen}
            ref={el => refs.current[i] = el}
          >
            <span className="icon-wrapper transition-all duration-300 mt-1">
              {isOpen ? (
                PlusIcon
              ) : (
                <>
                  <span className="block group-hover:hidden">{CheckIcon}</span>
                  <span className="hidden group-hover:block">{PlusIcon}</span>
                </>
              )}
            </span>
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-extrabold text-premium-dark dark:text-premium-light">{stat.main}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-premium-dark dark:text-premium-light mb-1">{stat.sub}</h3>
              <div
                className="text-premium-dark/60 dark:text-premium-light/60 text-base transition-all duration-500 overflow-hidden"
                style={isOpen ? { maxHeight: refs.current[i]?.scrollHeight ?? 200, opacity: 1, marginTop: 8 } : { maxHeight: 0, opacity: 0, marginTop: 0 }}
              >
                {stat.more}
              </div>
              {!isOpen && (
                <p className="text-premium-dark/60 dark:text-premium-light/60 text-base">{stat.desc}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LodzSeoPage; 