import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "@/utils/themeContext";
import { Link, useNavigate } from "react-router-dom";

const cities = [
  {
    name: "Warszawa",
    image: "/images/warszawa.jpg",
    label: "Warszawa"
  },
  {
    name: "Kraków",
    image: "/images/krakow.jpg",
    label: "Kraków"
  },
  {
    name: "Łódź",
    image: "/images/lodz.jpg",
    label: "Łódź"
  },
  {
    name: "Wrocław",
    image: "/images/wroclaw.jpg",
    label: "Wrocław"
  },
  {
    name: "Poznań",
    image: "/images/poznan.jpg",
    label: "Poznań"
  },
  {
    name: "Gdańsk",
    image: "/images/gdansk.jpg",
    label: "Gdańsk"
  },
  {
    name: "Szczecin",
    image: "/images/szczecin.jpg",
    label: "Szczecin"
  },
  {
    name: "Bydgoszcz",
    image: "/images/bydgoszcz.jpg",
    label: "Bydgoszcz"
  },
  {
    name: "Lublin",
    image: "/images/lublin.jpg",
    label: "Lublin"
  },
  {
    name: "Białystok",
    image: "/images/bialystok.jpg",
    label: "Białystok"
  },
  {
    name: "Katowice",
    image: "/images/katowice.jpg",
    label: "Katowice"
  },
  {
    name: "Gdynia",
    image: "/images/gdynia.jpg",
    label: "Gdynia"
  },
  {
    name: "Częstochowa",
    image: "/images/czestochowa.jpg",
    label: "Częstochowa"
  },
  {
    name: "Radom",
    image: "/images/radom.jpg",
    label: "Radom"
  },
  {
    name: "Sosnowiec",
    image: "/images/sosnowiec.jpg",
    label: "Sosnowiec"
  },
  {
    name: "Toruń",
    image: "/images/torun.jpg",
    label: "Toruń"
  },
  {
    name: "Kielce",
    image: "/images/kielce.jpg",
    label: "Kielce"
  },
  {
    name: "Gliwice",
    image: "/images/gliwice.webp",
    label: "Gliwice"
  },
  {
    name: "Zabrze",
    image: "/images/zabrze.webp",
    label: "Zabrze"
  },
  {
    name: "Olsztyn",
    image: "/images/olsztyn.jpg",
    label: "Olsztyn"
  },
  {
    name: "Bielsko-Biała",
    image: "/images/bielsko-biala.jpg",
    label: "Bielsko-Biała"
  },
  {
    name: "Rzeszów",
    image: "/images/rzeszow.jpg",
    label: "Rzeszów"
  },
  {
    name: "Ruda Śląska",
    image: "/images/ruda-slaska.jpg",
    label: "Ruda Śląska"
  },
  {
    name: "Rybnik",
    image: "/images/rybnik.jpg",
    label: "Rybnik"
  },
  {
    name: "Tychy",
    image: "/images/tychy.jpg",
    label: "Tychy"
  },
  {
    name: "Dąbrowa Górnicza",
    image: "/images/dabrowa-gornicza.jpg",
    label: "Dąbrowa Górnicza"
  },
  {
    name: "Płock",
    image: "/images/plock.jpg",
    label: "Płock"
  },
  {
    name: "Elbląg",
    image: "/images/elbag.jpg",
    label: "Elbląg"
  },
  {
    name: "Opole",
    image: "/images/opole.jpg",
    label: "Opole"
  },
  {
    name: "Gorzów Wielkopolski",
    image: "/images/gorzow-wielkopolski.jpg",
    label: "Gorzów Wielkopolski"
  },
  {
    name: "Włocławek",
    image: "/images/wloclawek.jpg",
    label: "Włocławek"
  },
  {
    name: "Zielona Góra",
    image: "/images/zielona-gora.png",
    label: "Zielona Góra"
  },
];

const defaultCity = cities[0];

const formatCityPath = (cityName: string): string => {
  const cityMap: { [key: string]: string } = {
    'Warszawa': 'warszawa',
    'Kraków': 'krakow',
    'Łódź': 'lodz',
    'Wrocław': 'wroclaw',
    'Poznań': 'poznan',
    'Gdańsk': 'gdansk',
    'Szczecin': 'szczecin',
    'Bydgoszcz': 'bydgoszcz',
    'Lublin': 'lublin',
    'Białystok': 'bialystok',
    'Katowice': 'katowice',
    'Gdynia': 'gdynia',
    'Częstochowa': 'czestochowa',
    'Radom': 'radom',
    'Sosnowiec': 'sosnowiec',
    'Toruń': 'torun',
    'Kielce': 'kielce',
    'Gliwice': 'gliwice',
    'Zabrze': 'zabrze',
    'Olsztyn': 'olsztyn',
    'Bielsko-Biała': 'bielsko-biala',
    'Rzeszów': 'rzeszow',
    'Ruda Śląska': 'ruda-slaska',
    'Rybnik': 'rybnik',
    'Tychy': 'tychy',
    'Dąbrowa Górnicza': 'dabrowa-gornicza',
    'Płock': 'plock',
    'Elbląg': 'elblag',
    'Opole': 'opole',
    'Gorzów Wielkopolski': 'gorzow-wielkopolski',
    'Włocławek': 'wloclawek',
    'Zielona Góra': 'zielona-gora'
  };
  
  return cityMap[cityName] || cityName.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const LocalSeoSection = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeCity, setActiveCity] = useState(defaultCity);
  const [isFading, setIsFading] = useState(false);

  const handleCityHover = (city) => {
    if (city.name === activeCity.name) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveCity(city);
      setIsFading(false);
    }, 200);
  };

  return (
    <section className="w-full py-12 md:py-24 relative max-md:px-5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Nagłówek i opis */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-sm bg-premium-purple block" />
              <span className="uppercase text-xs font-semibold tracking-wider text-premium-purple">Pozycjonowanie lokalne</span>
            </div>
            <h4 className="text-3xl md:text-4xl font-bold mb-3 text-premium-dark dark:text-premium-light">
              Zdobądź klientów w swoim mieście.<br />Rozwiń biznes lokalnie i online!
            </h4>
          </div>
        </div>
        <hr className="my-8 border-0 h-px light:bg-premium-dark/10 dark:bg-transparent dark:border dark:border-white/10" />
        {/* Główna sekcja */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Zdjęcie miasta */}
          <div className="flex-1 flex items-center justify-flex-start">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg bg-white group">
              <img
                src={activeCity.image}
                alt={activeCity.label}
                className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:blur-sm ${isFading ? 'opacity-0' : 'opacity-100'}`}
                style={{ minHeight: 320 }}
              />
              <span className="absolute left-4 bottom-4 bg-premium-light/50 backdrop-blur-sm dark:text-black px-6 py-2 rounded-md font-semibold shadow">
                {activeCity.label}
              </span>
            </div>
          </div>
          {/* Lista miast */}
          <div className="flex-1 flex flex-col justify-center max-md:max-h-[270px]">
            <ul className="divide-y divide-premium-light/20 max-h-[420px] overflow-y-auto custom-scrollbar pr-[30px]">
              {cities.map(city => (
                <li
                  key={city.name}
                  className="flex items-center justify-between py-7 px-2 group cursor-pointer transition-colors"
                  onMouseEnter={() => handleCityHover(city)}
                  onFocus={() => handleCityHover(city)}
                  onClick={() => navigate(`/pozycjonowanie/${formatCityPath(city.name)}`)}
                  tabIndex={0}
                >
                  <span className="text-xl font-normal group-hover:text-premium-purple transition-colors">Pozycjonowanie {city.name}</span>
                  <Button 
                    className={`border border-gray-200 rounded-full transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black' : 'borderborder-gray-200 text-slate-50 hover:text-white'}`} 
                    onClick={() => navigate(`/pozycjonowanie/${formatCityPath(city.name)}`)}
                  >
                    →
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <div className="text-center mt-8 text-premium-light/70 text-base">
          Brakuje Twojego miasta? Nic się nie martw – u Ciebie też zadziałamy!
        </div>
        <Link to="/pozycjonowanie-lokalne">
                <Button
                  className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-md mt-4
                    ${theme === 'light' ? 'bg-black text-white hover:bg-black hover:text-white' : 'text-black-important'}`}
                >
                  Dowiedz się więcej
                </Button>
              </Link>
        </div>
      </div>
    </section>
  );
};

export default LocalSeoSection; 