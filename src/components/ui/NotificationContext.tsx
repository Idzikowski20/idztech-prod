import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import Notification from './Notification';

interface NotificationData {
  sender: string;
  message: string;
  time?: string;
  type?: 'error' | 'success' | 'info';
}

interface NotificationContextType {
  showNotification: (data: NotificationData) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationData | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showNotification = useCallback((data: NotificationData) => {
    setNotification(data);
    setIsExiting(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsExiting(true), 15000);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
  };

  const handleAnimationEnd = () => {
    if (isExiting) {
      setNotification(null);
      setIsExiting(false);
    }
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          sender={notification.sender}
          message={notification.message}
          time={notification.time}
          onClose={handleClose}
          isExiting={isExiting}
          onAnimationEnd={handleAnimationEnd}
          type={notification.type}
        />
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotification musi być użyty wewnątrz <NotificationProvider>');
  return ctx;
}; 