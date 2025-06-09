import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/themeContext';

const COOKIE_KEY = 'cookieConsent';

type Consent = {
  functional: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

const defaultConsent: Consent = {
  functional: true,
  preferences: false,
  statistics: false,
  marketing: false,
};

function updateConsentMode(consent: Consent) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'analytics_storage': consent.statistics ? 'granted' : 'denied',
      'ad_storage': consent.marketing ? 'granted' : 'denied',
      'ad_user_data': consent.marketing ? 'granted' : 'denied',
      'ad_personalization': consent.marketing ? 'granted' : 'denied',
    });
  }
}

const CookieBanner: React.FC = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaultConsent);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const allGranted = { ...defaultConsent, preferences: true, statistics: true, marketing: true };
    setConsent(allGranted);
    localStorage.setItem(COOKIE_KEY, JSON.stringify(allGranted));
    updateConsentMode(allGranted);
    setShowBanner(false);
  };

  const handleReject = () => {
    setConsent(defaultConsent);
    localStorage.setItem(COOKIE_KEY, JSON.stringify(defaultConsent));
    updateConsentMode(defaultConsent);
    setShowBanner(false);
  };

  const handleSave = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
    updateConsentMode(consent);
    setShowBanner(false);
  };

  const handleToggle = (key: keyof Consent) => {
    if (key === 'functional') return; // functional always on
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  // Detekcja mobile (max-width: 640px)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640;

  return (
    <div
      className={
        isMobile
          ? 'fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-auto'
          : 'fixed bottom-6 right-0 z-50 pointer-events-auto'
      }
      style={isMobile ? { margin: 10 } : { maxWidth: '30rem', margin: '10px' }}
    >
      <div
        className={`rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors
          ${theme === 'dark' ? 'bg-[#0e0e11] text-white' : 'bg-white text-gray-900'}`}
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">Zarządzaj zgodą</h2>
          <p className="text-sm mb-4">
            Aby zapewnić jak najlepsze wrażenia, korzystamy z technologii, takich jak pliki cookie, do przechowywania i/lub uzyskiwania dostępu do informacji o urządzeniu. Zgoda na te technologie pozwoli nam przetwarzać dane, takie jak zachowanie podczas przeglądania lub unikalne identyfikatory na tej stronie. Brak wyrażenia zgody lub wycofanie zgody może niekorzystnie wpłynąć na niektóre cechy i funkcje.
          </p>
          <button
            className="text-sm underline mb-4 block"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {open ? 'Ukryj preferencje' : 'Zobacz preferencje'}
          </button>
          {open && (
            <div className="space-y-2 mb-4 p-4 rounded-lg bg-white/80 dark:bg-[#18181b]/80 shadow-sm">
              <AccordionSection
                title="Funkcjonalne"
                description="Zawsze aktywne. Niezbędne do działania strony."
                checked={true}
                disabled
              />
              <AccordionSection
                title="Preferencje"
                description="Przechowywanie lub dostęp techniczny jest niezbędny do uzasadnionego celu przechowywania preferencji."
                checked={consent.preferences}
                onChange={() => handleToggle('preferences')}
              />
              <AccordionSection
                title="Statystyka"
                description="Przechowywanie techniczne lub dostęp, który jest używany wyłącznie do celów statystycznych."
                checked={consent.statistics}
                onChange={() => handleToggle('statistics')}
              />
              <AccordionSection
                title="Marketing"
                description="Przechowywanie lub dostęp techniczny jest wymagany do tworzenia profili użytkowników w celu wysyłania reklam lub śledzenia użytkownika na stronie."
                checked={consent.marketing}
                onChange={() => handleToggle('marketing')}
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-center">
            <button
              className="bg-wave w-auto min-w-[120px] bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:text-white transition-opacity text-white rounded-xl  font-semibold"
              onClick={handleAccept}
            >
              Akceptuj
            </button>
            <button
              className={`border border-gray-200 rounded-xl w-auto min-w-[120px]  font-semibold transition-all duration-800 bg-transparent ${theme === 'light' ? 'border border-gray-200 text-black hover:scale-105' : 'borderborder-gray-200 text-slate-50 hover:scale-105 hover:text-white'}`}
              onClick={handleReject}
            >
              Odrzuć
            </button>
            {open && (
              <button
                className="bg-wave w-auto min-w-[120px] bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:text-white transition-opacity text-white rounded-xl  font-semibold"
                onClick={handleSave}
              >
                Zapisz preferencje
              </button>
            )}
          </div>
          <div className="flex justify-center gap-4 mt-4 text-xs opacity-70">
            <a href="/cookie-policy" className="underline">Cookie Policy</a>
            <a href="/privacy-policy" className="underline">Privacy Statement</a>
          </div>
        </div>
      </div>
    </div>
  );
};

// AccordionSection jako podkomponent
const AccordionSection: React.FC<{
  title: string;
  description: string;
  checked: boolean;
  onChange?: () => void;
  disabled?: boolean;
}> = ({ title, description, checked, onChange, disabled }) => (
  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
    <div>
      <div className="font-medium text-sm">{title} {disabled && <span className="text-green-500 ml-2">Zawsze aktywne</span>}</div>
      <div className="text-xs opacity-80">{description}</div>
    </div>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className="w-5 h-5 accent-blue-500 cursor-pointer disabled:opacity-50"
    />
  </div>
);

export default CookieBanner; 