import React from 'react';
import { MessageCircle, XCircle } from 'lucide-react';
import { useTheme } from '@/utils/themeContext';

// Hook do detekcji mobile po zamontowaniu (SSR-safe)
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState<null | boolean>(null);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

interface NotificationProps {
  sender: string;
  message: string;
  time?: string;
  onClose?: () => void;
  isExiting?: boolean;
  onAnimationEnd?: () => void;
  type?: 'error' | 'success' | 'info';
}

const Notification: React.FC<NotificationProps> = ({ sender, message, time = 'Teraz', onClose, isExiting, onAnimationEnd, type }) => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  if (isMobile === null) return null; // Nie renderuj do czasu poznania szerokości
  return (
    <div
      className={
        `fixed z-[9999] flex items-center gap-3
        ${isMobile
          ? `top-0 left-1/2 -translate-x-1/2 w-full max-w-md rounded-b-2xl rounded-t-none px-3 py-3 ${isExiting ? 'animate-slide-out-mobile-top' : 'animate-slide-in-mobile-top'}`
          : `bottom-4 right-4 w-[400px] max-w-[95vw] rounded-2xl px-6 py-4 ${isExiting ? 'animate-slide-out-mobile-bottom' : 'animate-slide-in-mobile-bottom'}`}
        ${theme === 'dark'
          ? 'bg-[#23272b] text-white border border-gray-700/40'
          : 'bg-white text-black border border-gray-200'}
        shadow-2xl shadow-black/20 backdrop-blur-md select-none text-left`
      }
      style={{ fontFamily: 'SF Pro Text, Satoshi, system-ui, sans-serif', minHeight: isMobile ? 64 : 56, backdropFilter: 'blur(5px)' }}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="flex-1 min-w-0 text-left pl-2 md:pl-4">
        <div className="flex items-center gap-2 mb-0.5">
          {/* Ikonka zależna od typu powiadomienia */}
          <span className="flex items-center gap-1">
            {type === 'error' ? (
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <XCircle size={16} className="text-white" />
              </span>
            ) : (
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle size={13} className="text-white fill-white" />
              </span>
            )}
            <span className="uppercase text-[11px] font-semibold tracking-widest text-gray-500 dark:text-gray-300 leading-none">POWIADOMIENIE</span>
          </span>
          <span className="text-[11px] text-gray-400 dark:text-gray-400 leading-none ml-auto">{time}</span>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-2 text-gray-400 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white text-lg font-bold p-0 bg-transparent border-0 outline-none"
              aria-label="Zamknij powiadomienie"
              style={{ lineHeight: 1 }}
            >
              ×
            </button>
          )}
        </div>
        <div className="text-[15px] leading-snug whitespace-pre-line mt-1" style={{fontWeight: 400}}>{message}</div>
      </div>
    </div>
  );
};

export default Notification;

// Dodaj do index.css:
// @keyframes slide-in-mobile { from { transform: translateY(-40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
// .animate-slide-in-mobile { animation: slide-in-mobile 0.4s cubic-bezier(0.4,0,0.2,1); }

// Animacja slide-in-ios (dodaj do index.css):
// @keyframes slide-in-ios { from { transform: translate(-50%, -40px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
// .animate-slide-in-ios { animation: slide-in-ios 0.4s cubic-bezier(0.4,0,0.2,1); } 