import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/utils/AuthProvider';
import { useTheme } from '@/utils/themeContext';
import { Moon, Sun, LogIn, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
const DesktopControls = () => {
  const { isAuthenticated } = useAuth();
  const { theme, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex items-center space-x-4">
    {/* <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        toggleDarkMode();
        trackEvent(
          'toggle_theme',
          'ui',
          `Theme toggled to ${theme === 'light' ? 'dark' : 'light'}`
        );
      }}
      className={`
        transition-colors 
        ${theme === 'light' 
          ? 'hover:scale-105' 
          : 'hover:scale-105'}
      `}
    >
      {theme === 'light' ? (
        <Moon 
          className="h-[1.2rem] w-[1.2rem]" 
          stroke="#000000" 
          fill="none"
        />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" stroke="currentColor" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button> */}
    

      <ShimmerButton
      onClick={() => navigate('/contact')}
      >Umów spotkanie
      </ShimmerButton>

      
      {/* <Link to={isAuthenticated ? "/admin" : "/login"}>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`transition-colors hover:scale-110 ${theme === 'light' 
            ? 'hover:bg-gray-100 hover:text-black text-black' 
            : 'hover:bg-white/10 hover:text-white text-white bg-transparent'}`}
        >
          {theme === 'light' ? (
            <LogIn 
              className="h-[1.2rem] w-[1.2rem]" 
              stroke="#000000" 
              fill="none"
            />
          ) : (
            <LogIn 
              className="h-[1.2rem] w-[1.2rem] " 
              stroke="#FFFFFF" 
              fill="none"
            />
          )}
          <span className="sr-only">{isAuthenticated ? "Panel administracyjny" : "Zaloguj"}</span>
        </Button>
      </Link> */}
    </div>
  );
};

export default DesktopControls;
