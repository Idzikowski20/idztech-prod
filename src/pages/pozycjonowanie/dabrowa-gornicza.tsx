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

const HERO_IMAGE = "/images/dabrowa-gornicza.jpg";
const CHARTS_IMAGE = "/images/charts.webp";

const DabrowaGorniczaSeoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pozycjonowanie stron Dąbrowa Górnicza | Pozycjonowanie strony internetowej, SEO, tworzenie stron, sklep internetowy</title>
        <meta name="description" content="Pozycjonowanie stron internetowych Dąbrowa Górnicza – skuteczne SEO, optymalizacja stron, tworzenie stron internetowych, sklepów internetowych i stron www. Zwiększ widoczność w Google!" />
        <meta name="keywords" content="pozycjonowanie stron Dąbrowa Górnicza, pozycjonowanie strony, pozycjonowanie stron internetowych, SEO Dąbrowa Górnicza, tworzenie stron internetowych, sklep internetowy, strona internetowa, pozycjonowanie stron SEO, strona www" />
        <link rel="canonical" href="https://idztech.pl/pozycjonowanie/dabrowa-gornicza" />
      </Helmet>
      <Navbar />
      {/* HERO SECTION - 2 kolumny */}
      <section className="w-full py-16 md:py-24 relative pt-9r">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Lewa kolumna */}
          <div className="flex-1 w-full max-w-xl relative">
            <span className="uppercase text-sm font-semibold tracking-wider text-premium-purple mb-4 block">SEO</span>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-premium-dark dark:text-premium-light leading-tight">
              Pozycjonowanie stron internetowych <span className="text-premium-purple">Dąbrowa Górnicza</span>
            </h1>
            <p className="text-lg text-premium-light/80 mb-8">
              Skuteczne pozycjonowanie strony internetowej w Dąbrowie Górniczej – zwiększamy widoczność Twojej firmy w Google, pozyskujemy lokalnych klientów i budujemy trwałą obecność Twojej marki online. Oferujemy także tworzenie stron internetowych, sklepów internetowych oraz kompleksowe SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-4 font-semibold text-base shadow-md"
                onClick={() => navigate('/contact')}
              >
                Zamów pozycjonowanie stron dabrowa-gornicza
              </button>
            </div>
          </div>
          {/* Prawa kolumna */}
          <div className="flex-1 w-full flex items-center justify-center relative">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src={HERO_IMAGE}
                alt="Panorama Dąbrowy Górniczej"
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
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Dlaczego warto?</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Pozycjonowanie stron internetowych</h3>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Pozycjonowanie stron internetowych (SEO) w Dąbrowie Górniczej to gwarancja większej widoczności w Google, większej liczby klientów i przewagi nad konkurencją. Oferujemy także tworzenie stron www oraz sklepów internetowych, które są zoptymalizowane pod SEO.
            </p>
          </div>

          {/* GRID 2x2 */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Kafelek 1 */}
            <div className="flex-1 bg-[#f6f8ff] dark:bg-[#23213a] rounded-2xl shadow-lg p-6 md:p-8 flex items-center gap-5 min-w-[260px]">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#8350e8] to-[#7f6aff]">
                <FaChartLine className="text-white text-2xl" />
              </span>
              <div>
                <span className="block font-semibold text-premium-dark dark:text-premium-light text-base">Zwiększamy Twoją</span>
                <span className="block font-bold text-lg text-premium-purple">Widoczność strony internetowej</span>
                <p className="text-premium-dark/80 dark:text-premium-light/80 text-base mt-2">Kompleksowa strategia SEO i pozycjonowania stron internetowych pozwoli Ci prześcignąć konkurencję na rynku Dąbrowy Górniczej.</p>
              </div>
            </div>
            {/* Kafelek 2 */}
            <div className="flex-1 bg-[#f6f8ff] dark:bg-[#23213a] rounded-2xl shadow-lg p-6 md:p-8 flex items-center gap-5 min-w-[260px]">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#8350e8] to-[#7f6aff]">
                <FaUserCheck className="text-white text-2xl" />
              </span>
              <div>
                <span className="block font-semibold text-premium-dark dark:text-premium-light text-base">Zwiększamy Twój</span>
                <span className="block font-bold text-lg text-premium-purple">Ruch na stronie www</span>
                <p className="text-premium-dark/80 dark:text-premium-light/80 text-base mt-2">Odpowiednie działania SEO i pozycjonowanie strony internetowej ściągną na Twoją stronę www oraz sklep internetowy klientów z Dąbrowy Górniczej i okolic.</p>
              </div>
            </div>
          </div>
          {/* Kafelek szeroki na całą szerokość */}
          <div className="mt-8 bg-[#f6f8ff] dark:bg-[#23213a] rounded-2xl shadow-lg p-6 md:p-10 flex items-center gap-5 min-w-[260px]">
            <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#8350e8] to-[#7f6aff]">
              <FaClipboardCheck className="text-white text-2xl" />
            </span>
            <div>
              <span className="block font-semibold text-premium-dark dark:text-premium-light text-base">Zwiększamy Twoją</span>
              <span className="block font-bold text-lg text-premium-purple">Sprzedaż w sklepie internetowym</span>
              <p className="text-premium-dark/80 dark:text-premium-light/80 text-base mt-2">Wiemy, jakie kroki wykonać, by Twój sklep internetowy i strona internetowa w Dąbrowie Górniczej generowały większe przychody i rozwijały się z miesiąca na miesiąc dzięki skutecznemu pozycjonowaniu stron SEO.</p>
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
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Korzyści z pozycjonowania stron internetowych i SEO w Dąbrowie Górniczej</span>
            </div>
            <h4 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Poznaj realne korzyści współpracy z <h4 className="text-premium-purple">IDZTECH</h4></h4>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Oto, co zyskasz wybierając naszą ofertę: pozycjonowanie stron internetowych, SEO, tworzenie stron www i sklepów internetowych w Dąbrowie Górniczej.
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
                <p className="text-premium-dark/80 dark:text-premium-light/80">Szczegółowa analiza Twojej strony i konkurencji w Dąbrowie Górniczej.</p>
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
          title="Najczęściej zadawane pytania o pozycjonowanie stron internetowych, SEO i tworzenie stron w Dąbrowie Górniczej"
          items={[
            {
              question: 'Na czym polega pozycjonowanie stron internetowych w Dąbrowie Górniczej?',
              answer: 'Pozycjonowanie stron internetowych (SEO) to działania mające na celu zwiększenie widoczności strony www lub sklepu internetowego w wynikach Google. Obejmuje optymalizację techniczną, content marketing i link building.'
            },
            {
              question: 'Czy oferujecie także tworzenie stron internetowych i sklepów internetowych?',
              answer: 'Tak, projektujemy i wdrażamy nowoczesne strony internetowe oraz sklepy internetowe zoptymalizowane pod SEO.'
            },
            {
              question: 'Ile kosztuje pozycjonowanie strony internetowej?',
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
        title="Gotowy na zwiększenie widoczności w Dąbrowie Górniczej?"
        description="Skontaktuj się z nami i umów się na bezpłatną konsultację. Omówimy Twoje potrzeby i zaproponujemy optymalne rozwiązanie dla Twojego biznesu."
        buttons={[
          <Button 
            size="lg" 
            className="bg-premium-gradient hover:opacity-90 transition-opacity animate-fade-in group relative overflow-hidden"
            style={{animationDelay: "0.4s"}}
            onClick={() => window.location.href = '/contact'}
            key="cta-contact"
          >
            <span className="relative z-10 text-white">Skontaktuj się z nami</span>
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
    desc: "Będziesz o krok przed konkurencją w Dąbrowie Górniczej.",
    more: "Dzięki naszym strategiom SEO nie tylko dogonisz, ale i prześcigniesz największych graczy w Twojej branży. Otrzymasz indywidualne rekomendacje, które pozwolą Ci stale utrzymywać przewagę nad konkurencją.",
  },
  {
    main: "Więcej klientów 🔝",
    sub: "Zwiększysz ruch na stronie od klientów z Dąbrowy Górniczej i okolic.",
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

export default DabrowaGorniczaSeoPage; 