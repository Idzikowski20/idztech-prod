import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import StatsExpandableGrid from "../../components/StatsExpandableGrid";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import FAQAccordion from "../../components/FAQAccordion";
import GlobalCTA from "@/components/GlobalCTA";
import { Button } from '@/components/ui/button';
import LocalSeoSection from "@/components/LocalSeoSection";
import HeroScrollDemo from "@/components/ui/container-scroll-animation-demo";

const HERO_IMAGE = "/images/wloclawek.jpg";
const CHARTS_IMAGE = "/images/charts.webp";

const WloclawekSeoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pozycjonowanie Włocławek - Skuteczne SEO lokalne | IDZTECH</title>
        <meta name="description" content="Zwiększ widoczność swojej firmy we Włocławku. Skuteczne pozycjonowanie lokalne, które przyciąga klientów z Twojego miasta. Sprawdź ofertę!" />
        <link rel="canonical" href="https://idztech.pl/pozycjonowanie/wloclawek" />
      </Helmet>
      <Navbar />
      {/* HERO SECTION - 2 kolumny */}
      <section className="w-full py-16 md:py-24 relative pt-9r">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Lewa kolumna */}
          <div className="flex-1 w-full max-w-xl relative">
            <span className="uppercase text-sm font-semibold tracking-wider text-premium-purple mb-4 block">SEO</span>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-premium-dark dark:text-premium-light leading-tight">
              Pozycjonowanie stron internetowych <span className="text-premium-purple">Włocławek</span>
            </h1>
            <p className="text-lg text-premium-light/80 mb-8">
              Zwiększamy widoczność Twojej firmy w Google, pozyskujemy lokalnych klientów i budujemy trwałą obecność Twojej marki we Włocławku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-4 font-semibold text-base shadow-md"
                onClick={() => navigate('/contact')}
              >
                Zamów pozycjonowanie
              </button>
            </div>
          </div>
          {/* Prawa kolumna */}
          <div className="flex-1 w-full flex items-center justify-center relative">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src={HERO_IMAGE}
                alt="Panorama Włocławka"
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
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Pozycjonowanie stron internetowych</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">Dlaczego warto pozycjonować stronę internetową?</h2>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Lata doświadczenia w branży pozwoliły nam wypracować rozwiązania, które są skuteczne i przekładają się na realne wyniki dla firm z Włocławka.
            </p>
          </div>

          {/* GRID 2x2 */}
          <div className="grid md:grid-cols-2 gap-14">
            {/* Karta 1 */}
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8 transition-all duration-300 relative group">
              <h3 className="text-2xl">Zwiększymy twoją</h3>
              <h3 className="text-2xl font-bold text-premium-purple mb-2">Widoczność 🔝</h3>
              <p className="text-premium-dark dark:text-premium-light mb-4">Kompleksowa strategia SEO pozwoli Ci prześcignąć konkurencję na lokalnym rynku Włocławka.</p>
              <img src="/images/widocznosc.webp" alt="Widoczność" className="w-full h-[16rem] object-contain self-end opacity-80" />
            </div>
            {/* Karta 2 */}
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8 transition-all duration-300 relative group">
              <h3 className="text-2xl">Zwiększymy twój</h3>
              <h3 className="text-2xl font-bold text-premium-purple mb-2">Ruch 🔝</h3>
              <p className="text-premium-dark dark:text-premium-light mb-4">Odpowiednie działania SEO ściągną na Twoją stronę klientów z Włocławka i okolic.</p>
              <img src="/images/ruch.webp" alt="Ruch" className="w-full h-[16rem] object-contain self-start opacity-80" />
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
                <h3 className="text-2xl">Zwiększymy twoją</h3>
                <h3 className="text-2xl font-bold text-premium-purple mb-2">Sprzedaż 🔝</h3>
                <p className="text-premium-dark dark:text-premium-light text-base">
                  Wiemy, jakie kroki wykonać, by Twój biznes we Włocławku generował większe przychody i rozwijał się z miesiąca na miesiąc.
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
              Wiemy też, jak do nich dotrzeć i na jakie rozwiązania postawić, by Twój biznes we Włocławku generował jeszcze lepsze wyniki.
            </p>
          </div>

          {/* KAFELKI GRID */}
          <StatsExpandableGrid />
        </div>
      </section>

      {/* CO ZYSKUJESZ */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Co zyskujesz</span>
            </div>
            <h4 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">
              Poznaj realne korzyści współpracy z <span className="text-premium-purple">IDZTECH</span>
            </h4>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Oto, co zyskasz wybierając naszą ofertę <span className="text-premium-purple">Pozycjonowanie Włocławek</span>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Karty z korzyściami */}
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8">
              <h5 className="text-xl font-bold text-premium-purple mb-4">Więcej klientów lokalnych</h5>
              <p className="text-premium-dark dark:text-premium-light">
                Dzięki skutecznemu pozycjonowaniu lokalnemu, Twoja firma będzie widoczna dla potencjalnych klientów z Włocławka i okolic.
              </p>
            </div>
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8">
              <h5 className="text-xl font-bold text-premium-purple mb-4">Większa sprzedaż</h5>
              <p className="text-premium-dark dark:text-premium-light">
                Zwiększony ruch na stronie i lepsza widoczność w Google przełożą się na większą liczbę zapytań i sprzedaży.
              </p>
            </div>
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8">
              <h5 className="text-xl font-bold text-premium-purple mb-4">Przewaga nad konkurencją</h5>
              <p className="text-premium-dark dark:text-premium-light">
                Wyprzedź konkurencję w wynikach wyszukiwania i zdobądź więcej klientów we Włocławku.
              </p>
            </div>
            <div className="bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8">
              <h5 className="text-xl font-bold text-premium-purple mb-4">Stały rozwój</h5>
              <p className="text-premium-dark dark:text-premium-light">
                Regularne raporty i analizy pozwolą Ci śledzić postępy i rozwijać biznes we Włocławku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 bg-premium-light/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">FAQ</span>
            </div>
            <h4 className="text-2xl md:text-4xl font-bold mb-2 text-premium-dark dark:text-premium-light">
              Często zadawane pytania
            </h4>
            <p className="text-premium-light/70 text-base max-w-2xl">
              Odpowiedzi na najczęściej zadawane pytania dotyczące pozycjonowania lokalnego we Włocławku.
            </p>
          </div>
          <FAQAccordion
            items={[
              {
                question: 'Czym jest pozycjonowanie lokalne we Włocławku?',
                answer: 'Pozycjonowanie lokalne we Włocławku to zestaw działań SEO ukierunkowanych na zwiększenie widoczności Twojej firmy w wynikach wyszukiwania dla użytkowników z Włocławka i okolic.'
              },
              {
                question: 'Jak długo trwa pozycjonowanie lokalne we Włocławku?',
                answer: 'Pierwsze efekty mogą być widoczne po kilku tygodniach, ale pełne rezultaty pojawiają się zwykle po 3-6 miesiącach regularnych działań.'
              },
              {
                question: 'Czy pozycjonowanie lokalne działa dla każdej branży?',
                answer: 'Tak, pozycjonowanie lokalne jest skuteczne dla większości firm działających we Włocławku, szczególnie dla tych, które obsługują klientów lokalnie.'
              },
              {
                question: 'Jak mierzycie skuteczność pozycjonowania?',
                answer: 'Monitorujemy pozycje w Google, ruch na stronie, liczbę zapytań i konwersji, a także widoczność w Google Maps.'
              },
              {
                question: 'Czy mogę samodzielnie pozycjonować firmę we Włocławku?',
                answer: 'Możesz, ale profesjonalne pozycjonowanie wymaga wiedzy, narzędzi i doświadczenia. Współpraca z nami pozwala osiągnąć lepsze i szybsze efekty.'
              }
            ]}
            className="mb-0"
          />
        </div>
      </section>

      <LocalSeoSection />
      <GlobalCTA 
        title="Zacznij pozycjonowanie we Włocławku już dziś!"
        description="Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej firmie osiągnąć lepsze wyniki w wyszukiwarkach."
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

export default WloclawekSeoPage; 