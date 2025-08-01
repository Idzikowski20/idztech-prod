
import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@/utils/themeContext';
import Brand from './Brand';
import DesktopNavigation from './DesktopNavigation';
import DesktopControls from './DesktopControls';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  
  // Optimize scroll handler with useCallback to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);
  
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for page that might be loaded scrolled down
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Handle body scroll when mobile menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Immediate restore of scrolling to prevent UI issues
      document.body.style.overflow = '';
    }
    
    // Always clean up by restoring scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  return (
    <nav className='fixed w-full z-50 transition-all duration-300 top-0 mt-3'>
      <div className="border border-width-[1px] border-[#80808030] container backdrop-blur-sm shadow-xl mx-auto px-4 md:px-6 flex items-center justify-between bg-gradient-to-br from-premium-blue-500 via-[#000000] transition-opacity text-white rounded-full py-2">
        <Brand />
        
        {/* Desktop Navigation */}
        <DesktopNavigation />

        <div className="flex items-center space-x-4">
          {/* Desktop-only buttons */}
          <DesktopControls />
          
          {/* Mobile Menu Button */}
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
