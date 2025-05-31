import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Check, ChevronRight, MapPin, Star, FileText, Settings, Target, TrendingUp, Phone, Building, Utensils, Store, Flower, Stethoscope, Gavel, HardHat, Car, Dumbbell, Home, ArrowRight } from "lucide-react";
import SplineSEO from "@/components/SplineSEO";
import { useTheme } from '@/utils/themeContext';
import { useNavigate } from "react-router-dom";
import GlobalCTA from "@/components/GlobalCTA";
import { Helmet } from 'react-helmet-async';
import FAQAccordion from '@/components/FAQAccordion';

const LocalSeo = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-premium-dark">
      <Helmet>
        <title>Pozycjonowanie lokalne |Local SEO dla firm | IDZTECH</title>
        <meta name="description" content="Zwiększ widoczność swojej firmy w lokalnych wynikach Google. Skuteczne pozycjonowanie lokalne (Local SEO) w Warszawie – Google Maps, wizytówka Google, opinie." />
        <meta name="keywords" content="pozycjonowanie lokalne, local SEO, SEO Warszawa, Google Maps, wizytówka Google, pozycjonowanie firm, SEO dla biznesu, optymalizacja lokalna, pozycjonowanie w Google" />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - Pozycjonowanie lokalne" />
        <meta property="og:description" content="Zwiększamy widoczność Twojego biznesu w lokalnych wynikach wyszukiwania Google, przyciągając klientów z Twojego obszaru działania." />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/pozycjonowanie-lokalne" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDZTECH - Pozycjonowanie lokalne" />
        <meta name="twitter:description" content="Zwiększamy widoczność Twojego biznesu w lokalnych wynikach wyszukiwania Google, przyciągając klientów z Twojego obszaru działania." />
        <meta name="twitter:image" content="https://idztech.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://idztech.pl/pozycjonowanie-lokalne" />
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
              <span className="text-premium-blue font-medium">Lokalne SEO</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">Pozycjonowanie lokalne</h1>
              <p className="text-premium-light/70 text-lg mb-8">
                Zwiększamy widoczność Twojego biznesu w lokalnych wynikach wyszukiwania Google,
                przyciągając klientów z Twojego obszaru działania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button className="bg-premium-gradient hover:text-white transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/contact')}>
                  Skontaktuj się z nami
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button className={`border border-gray-200 rounded-full px-8 py-6 transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`} onClick={() => navigate('/projects')}>
                  Zobacz nasze realizacje
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
      
      {/* What is Local SEO Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-premium-blue font-medium">Czym jest</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Pozycjonowanie lokalne</h2>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col items-center text-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <p className="text-premium-light/90 text-lg mb-6">
                Pozycjonowanie lokalne (Local SEO) to zestaw działań, które mają na celu zwiększenie widoczności 
                Twojej firmy w lokalnych wynikach wyszukiwania Google oraz w Google Maps.
              </p>
              
              <p className="text-premium-light/80 mb-6">
                Jest to kluczowe dla firm, które obsługują klientów w określonej lokalizacji geograficznej, 
                takich jak restauracje, sklepy stacjonarne, salony fryzjerskie, gabinety lekarskie, kancelarie prawne 
                czy firmy remontowe.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <MapPin className="text-premium-blue mr-2" size={24} />
                    Lokalne wyniki wyszukiwania
                  </h3>
                  <p className="text-premium-light/70">
                    Gdy użytkownik szuka lokalnego produktu lub usługi, Google pokazuje "paczkę lokalną" 
                    z trzema najbardziej istotnymi firmami na mapie. Nasze działania mają na celu 
                    umieszczenie Twojej firmy w tej eksponowanej sekcji.
                  </p>
                </div>
                
                <div className="border border-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="text-premium-pink mr-2" size={24} />
                    Google Business Profile
                  </h3>
                  <p className="text-premium-light/70">
                    Zarządzamy i optymalizujemy Twój profil firmy w Google, dbając o kompletność informacji, 
                    aktualność danych, pozyskiwanie i zarządzanie opiniami oraz regularną 
                    publikację postów i ofert.
                  </p>
                </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Kompleksowe pozycjonowanie lokalne</h2>
            <p className="text-premium-light/70 text-lg">
              Oferujemy pełen zakres usług z zakresu Local SEO, aby Twój biznes był widoczny dla lokalnych klientów.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-purple to-premium-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Optymalizacja Google Business Profile</h3>
              <p className="text-premium-light/70 mb-4">
                Kompleksowa konfiguracja i optymalizacja wizytówki Google Twojej firmy, aby przyciągać więcej klientów.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-purple mr-2" />
                  <span className="text-premium-light/70 text-sm">Weryfikacja i uzupełnienie danych</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-purple mr-2" />
                  <span className="text-premium-light/70 text-sm">Dodawanie zdjęć i filmów</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-purple mr-2" />
                  <span className="text-premium-light/70 text-sm">Regularne publikacje i oferty</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-blue to-premium-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zarządzanie opiniami</h3>
              <p className="text-premium-light/70 mb-4">
                Aktywne pozyskiwanie i zarządzanie opiniami klientów, które są kluczowe dla pozycjonowania lokalnego.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Zachęcanie klientów do wystawiania opinii</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Odpowiadanie na opinie</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Monitoring reputacji online</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-pink to-premium-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cyfrowy NAP</h3>
              <p className="text-premium-light/70 mb-4">
                Dbamy o spójność danych NAP (nazwa, adres, telefon) we wszystkich źródłach online.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Audyt spójności danych NAP</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Korekta niespójności</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Monitorowanie zmian</span>
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-purple to-premium-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Katalogi lokalne</h3>
              <p className="text-premium-light/70 mb-4">
                Dodajemy Twoją firmę do najważniejszych katalogów lokalnych i branżowych.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-purple mr-2" />
                  <span className="text-premium-light/70 text-sm">Selekcja najlepszych katalogów</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-purple mr-2" />
                  <span className="text-premium-light/70 text-sm">Spójne informacje we wszystkich źródłach</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-purple mr-2" />
                  <span className="text-premium-light/70 text-sm">Budowa cytatów lokalnych</span>
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-blue to-premium-pink flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lokalny content marketing</h3>
              <p className="text-premium-light/70 mb-4">
                Tworzenie treści zorientowanych na lokalnych klientów i problemy specyficzne dla regionu.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Tworzenie stron z danymi lokalnymi</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Blog z lokalną tematyką</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-blue mr-2" />
                  <span className="text-premium-light/70 text-sm">Lokalne case studies</span>
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-premium-pink to-premium-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Settings className="text-premium-light" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Optymalizacja on-page</h3>
              <p className="text-premium-light/70 mb-4">
                Dostosowanie strony do lokalnych zapytań i potrzeb użytkowników z Twojego obszaru.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Optymalizacja pod lokalne słowa kluczowe</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Schema markup dla lokalnego biznesu</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-premium-pink mr-2" />
                  <span className="text-premium-light/70 text-sm">Lokalizowanie meta tagów</span>
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
            <span className="text-premium-purple font-medium">Korzyści</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Dlaczego warto inwestować w Local SEO</h2>
            <p className="text-premium-light/70 text-lg">
              Pozycjonowanie lokalne to jedna z najbardziej opłacalnych strategii marketingowych dla firm działających lokalnie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-purple to-premium-blue mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-premium-light" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Dotarcie do lokalnych klientów</h3>
              <p className="text-premium-light/70 text-center">
                Wyświetlaj się w wynikach wyszukiwania osobom, które są blisko Twojej firmy i szukają Twoich usług.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-blue to-premium-pink mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="text-premium-light" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Budowa zaufania</h3>
              <p className="text-premium-light/70 text-center">
                Pozytywne opinie i wysoka pozycja w lokalnych wynikach wyszukiwania budują wiarygodność Twojej firmy.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-pink to-premium-purple mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-premium-light" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Więcej telefonów i wizyt</h3>
              <p className="text-premium-light/70 text-center">
                Google Business Profile umożliwia bezpośredni kontakt z Twoją firmą przez telefon lub wskazuje drogę.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-purple to-premium-blue mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-premium-light" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Wysoka konwersja</h3>
              <p className="text-premium-light/70 text-center">
                Lokalni klienci szukający usług mają wysoką intencję zakupową i często są gotowi do podjęcia szybkiej decyzji.
              </p>
            </div>
            
            {/* Benefit 5 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-blue to-premium-pink mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-premium-light" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Przewaga konkurencyjna</h3>
              <p className="text-premium-light/70 text-center">
                Wyprzedź lokalną konkurencję, która może nie wykorzystywać w pełni potencjału marketingu lokalnego.
              </p>
            </div>
            
            {/* Benefit 6 */}
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col  group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-pink to-premium-purple mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="text-premium-light" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Optymalizacja mobilna</h3>
              <p className="text-premium-light/70 text-center">
                Lokalne wyniki są szczególnie ważne dla użytkowników mobilnych, którzy szukają rozwiązań "tu i teraz".
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* For which businesses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-premium-blue font-medium">Dla kogo</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6">Dla jakich firm Local SEO jest niezbędne</h2>
            <p className="text-premium-light/70 text-lg">
              Pozycjonowanie lokalne jest szczególnie ważne dla firm, które obsługują klientów w określonej lokalizacji.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-purple to-premium-blue mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Utensils size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Restauracje i kawiarnie</h3>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-blue to-premium-pink mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Store size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Sklepy stacjonarne</h3>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-pink to-premium-purple mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flower size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Salony piękności</h3>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-blue to-premium-purple mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Gabinety medyczne</h3>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-purple to-premium-blue mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gavel size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Kancelarie prawne</h3>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-blue to-premium-pink mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HardHat size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Firmy budowlane</h3>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-pink to-premium-purple mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Car size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Warsztaty samochodowe</h3>
            </div>
            
            <div className={`backdrop-blur-sm border rounded-xl p-6 flex flex-col justify-center items-center group ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}`}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-premium-purple to-premium-blue mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell size={32} className="text-premium-light" />
              </div>
              <h3 className="font-medium mb-2 text-center">Siłownie i kluby fitness</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQAccordion
        title="Najczęściej zadawane pytania o pozycjonowanie lokalne"
        items={[
          {
            question: 'Czym różni się pozycjonowanie lokalne od ogólnego SEO?',
            answer: 'Pozycjonowanie lokalne skupia się na widoczności firmy w wynikach wyszukiwania dla określonej lokalizacji, np. miasta lub regionu. Obejmuje działania w Google Maps, wizytówce Google i lokalnych katalogach.'
          },
          {
            question: 'Dla jakich firm Local SEO jest szczególnie ważne?',
            answer: 'Dla firm obsługujących klientów w określonym obszarze – restauracji, sklepów stacjonarnych, salonów usługowych, gabinetów, warsztatów, kancelarii, siłowni itp.'
          },
          {
            question: 'Jakie są najważniejsze elementy skutecznego Local SEO?',
            answer: 'Optymalizacja wizytówki Google, spójność danych NAP, pozyskiwanie opinii, lokalny content marketing, obecność w katalogach i optymalizacja strony pod zapytania lokalne.'
          },
          {
            question: 'Czy mogę samodzielnie zarządzać Google Business Profile?',
            answer: 'Tak, ale profesjonalna optymalizacja i regularne działania (opinie, posty, monitoring) przynoszą lepsze efekty.'
          },
          {
            question: 'Jak szybko zobaczę efekty pozycjonowania lokalnego?',
            answer: 'Pierwsze efekty mogą być widoczne po kilku tygodniach, pełne rezultaty po 2-3 miesiącach regularnych działań.'
          },
          {
            question: 'Czy pomagacie w pozyskiwaniu opinii i zarządzaniu wizytówką Google?',
            answer: 'Tak, pomagamy w pozyskiwaniu opinii, optymalizacji i zarządzaniu wizytówką Google Business Profile.'
          }
        ]}
        className="mb-0"
      />
      
      {/* CTA Section */}
      <GlobalCTA
        title="Zwiększ widoczność Twojego biznesu lokalnie"
        description="Skontaktuj się z nami, aby otrzymać bezpłatną analizę lokalnej widoczności Twojej firmy i indywidualną ofertę pozycjonowania."
        buttons={[
          <Button 
            className="bg-premium-gradient hover:opacity-90 transition-opacity animate-fade-in group relative overflow-hidden"
            style={{animationDelay: "0.4s"}}
            size="lg"
            onClick={() => navigate('/contact')}
            key="cta-localseo"
          >
            <span className="relative z-10 text-white">Zamów darmową analizę</span>
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        ]}
      />
      
      <Footer />
    </div>
  );
};

export default LocalSeo;
