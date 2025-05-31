import React, { useState, useRef } from "react";

const stats = [
  {
    value: "+46%",
    title: "Zapytań trafiających do Google to wyszukiwania lokalne",
    desc: "Liczby nie kłamią. Bądź tam, gdzie Twoi klienci.",
    icon: <span className="inline-block w-6 h-6 rounded bg-premium-purple text-white flex items-center justify-center mr-3 text-lg">■</span>,
    main: "46%",
    sub: "Zapytań trafiających do Google to wyszukiwania lokalne",
    more: "Lokalne SEO to nie tylko frazy z nazwą miasta. To także optymalizacja wizytówki Google, map, opinii i obecności w lokalnych katalogach. Dzięki temu Twoja firma pojawia się tam, gdzie klienci naprawdę szukają usług."
  },
  {
    value: "500 000",
    title: "Przedsiębiorców w Polsce korzysta z usług SEM",
    desc: "Wielotorowe działania sprawdzają się najlepiej. SEO i SEM to sprawdzone sposoby na sukces na lokalnym rynku.",
    icon: <span className="inline-block w-6 h-6 rounded bg-premium-purple text-white flex items-center justify-center mr-3 text-lg">■</span>,
    main: "500.000",
    sub: "Przedsiębiorców w Polsce korzysta z usług SEM",
    more: "Kampanie SEM pozwalają natychmiast zwiększyć widoczność w Google. Połączenie SEO i SEM daje efekt synergii – szybkie efekty reklam i długofalowy wzrost pozycji organicznych."
  },
  {
    value: "+96%",
    title: "Przedsiębiorców pozytywnie ocenia efekty działań digital marketingu",
    desc: "To potwierdza, że inwestycja w profesjonalne SEO i marketing online naprawdę się opłaca.",
    icon: <span className="inline-block w-6 h-6 rounded bg-premium-purple text-white flex items-center justify-center mr-3 text-lg">■</span>,
    main: "+96%",
    sub: "Przedsiębiorców pozytywnie ocenia efekty działań digital marketingu",
    more: "Firmy, które inwestują w marketing internetowy, szybciej zdobywają zaufanie klientów i budują rozpoznawalność marki. To przekłada się na większą liczbę zapytań i wyższą sprzedaż."
  },
  {
    value: "+60%",
    title: "Użytkowników klika w wyniki lokalne",
    desc: "Dzięki pozycjonowaniu zwiększysz swoje szanse na dotarcie do swojej grupy docelowej.",
    icon: <span className="inline-block w-6 h-6 rounded bg-premium-purple text-white flex items-center justify-center mr-3 text-lg">■</span>,
    main: "+60%",
    sub: "Użytkowników klika w wyniki lokalne",
    more: "Użytkownicy coraz częściej wybierają firmy z okolicy. Dzięki pozycjonowaniu lokalnemu możesz być pierwszy na liście, gdy klient szuka usług w Twoim mieście."
  },
];

const PlusIcon = (
  <span className="inline-block w-6 h-6 rounded-full bg-[#886be2] text-white flex items-center justify-center mr-3 text-lg font-bold transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg transition-transform duration-200">
    +
  </span>
);

const CheckIcon = (
  <span className="inline-block w-6 h-6 rounded-full bg-[#886be2] flex items-center justify-center mr-3 text-lg font-bold transition-all duration-300">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 9.5L8 12.5L13 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const StatsExpandableGrid = () => {
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="grid md:grid-cols-2 gap-14">
      {stats.map((stat, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`bg-white dark:bg-premium-dark/80 rounded-2xl border border-premium-light/30 shadow-lg p-8 transition-all duration-300 cursor-pointer relative group ${isOpen ? 'ring-2 ring-premium-purple/40' : ''}`}
            onClick={() => setOpen(isOpen ? null : i)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(isOpen ? null : i); }}
            aria-expanded={isOpen}
            ref={el => refs.current[i] = el}
          >
            <div className="flex items-center mb-2">
              <span className="icon-wrapper transition-all duration-300">
                {isOpen ? (
                  PlusIcon
                ) : (
                  <>
                    <span className="block group-hover:hidden">{CheckIcon}</span>
                    <span className="hidden group-hover:block">{PlusIcon}</span>
                  </>
                )}
              </span>
              <span className="text-4xl font-bold font-mono text-premium-dark dark:text-white tracking-tight">
                {stat.main}
                {stat.main.trim().endsWith('%') && (
                  <span className="ml-2 align-middle text-premium-purple text-2xl">🔝</span>
                )}
              </span>
            </div>
            <hr className="my-4 border-premium-light/30" />
            <div className="text-xl font-semibold text-premium-dark dark:text-white mb-2">{stat.sub}</div>
            <div
              className="text-premium-light/70 text-base mb-2 transition-all duration-500 overflow-hidden"
              style={isOpen ? { maxHeight: refs.current[i]?.scrollHeight ?? 200, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
            >
              {stat.more}
            </div>
            {!isOpen && (
              <div className="text-premium-light/60 text-base transition-all duration-300">
                {stat.desc}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StatsExpandableGrid; 