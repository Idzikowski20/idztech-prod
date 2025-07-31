
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mountStagewiseToolbar } from '../stagewise-toolbar';

/**
 * Custom hook that scrolls to the top of the page on route changes
 * or when the page is reloaded
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Execute stagewise toolbar script on every route change
    mountStagewiseToolbar();
  }, [pathname]);
};
