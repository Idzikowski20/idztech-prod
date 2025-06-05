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
    value: "500K",
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

function GradientProgress({ value, label }) {
  // value: liczba od 0 do 100
  const radius = 28;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const percent = Math.max(0, Math.min(100, parseFloat(value.toString().replace(/[^\d.]/g, ''))));
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  return (
    <svg width={radius * 2} height={radius * 2} className="block">
      <defs>
        <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ea8fe" />
          <stop offset="100%" stopColor="#a084fa" />
        </linearGradient>
      </defs>
      <circle
        stroke="#edeaff"
        fill="none"
        strokeWidth={stroke}
        cx={radius}
        cy={radius}
        r={normalizedRadius}
      />
      <circle
        stroke="url(#circleGradient)"
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="1.1rem"
        fontWeight="bold"
        className="fill-[#18182f] dark:fill-white"
      >
        {label}
      </text>
    </svg>
  );
}

const StatsExpandableGrid = () => {
  const [open, setOpen] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex bg-[#f6f8ff] dark:bg-[#23213a] rounded-2xl shadow-lg p-8 md:p-12 gap-7 items-start min-w-[260px]"
        >
          {/* Gradientowy progress */}
          <div className="flex flex-col items-center justify-center">
            {/^\+?\d+%$/.test(stat.value) ? (
              <GradientProgress value={stat.value.replace(/[^\d]/g, '')} label={stat.value.replace('+', '')} />
            ) : (
              <span className="w-16 h-16 flex items-center justify-center rounded-xl bg-wave bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 text-white text-2xl font-bold font-mono mb-1">
                {stat.value}
              </span>
            )}
            {/* Mały label, np. TOP, strzałka itp. */}
            {i === 0 && <span className="text-premium-purple text-xs font-semibold flex items-center gap-1"><svg width='16' height='16' fill='none' viewBox='0 0 16 16'><path d='M3 9l4-4 3.5 3.5L13 6' stroke='#8350e8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg>TOP</span>}
            {i === 1 && <span className="text-premium-purple text-xs font-semibold">SEM</span>}
            {i === 2 && <span className="text-premium-purple text-xs font-semibold flex items-center gap-1"><svg width='16' height='16' fill='none' viewBox='0 0 16 16'><path d='M3 9l4-4 3.5 3.5L13 6' stroke='#8350e8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg>TOP</span>}
            {i === 3 && <span className="text-premium-purple text-xs font-semibold flex items-center gap-1"><svg width='16' height='16' fill='none' viewBox='0 0 16 16'><path d='M3 9l4-4 3.5 3.5L13 6' stroke='#8350e8' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg>TOP</span>}
          </div>
          {/* Teksty */}
          <div>
            <div className="font-bold text-premium-dark dark:text-premium-light text-base md:text-lg mb-1">
              {stat.title}
            </div>
            <div className="text-premium-dark/70 dark:text-premium-light/80 text-base mb-1">
              {stat.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsExpandableGrid; 