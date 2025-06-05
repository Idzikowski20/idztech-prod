import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/utils/AuthProvider';
import { useTheme } from '@/utils/themeContext';
import { Moon, Sun, LogIn, Menu, Globe, TrendingUp, Layout, ShoppingCart, Search, MapPin, FileText, Settings, PenLine, ListChecks } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { isAuthenticated } = useAuth();
  const { theme, toggleDarkMode } = useTheme();
  const location = useLocation();
  
  // Handle menu closing and ensure scrolling is restored
  const handleMenuOpen = (open: boolean) => {
    setIsMenuOpen(open);
    
    // If closing menu, ensure scrolling is restored
    if (!open) {
      // Small delay to ensure animation completes
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 300);
    }
  };
  
  // Cleanup function to ensure body scroll is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Determine text color based on theme
  const textColor = theme === 'light' ? 'text-black' : 'text-white hover:text-black';

  return (
    <Drawer open={isMenuOpen} onOpenChange={handleMenuOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`md:hidden ${textColor} bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}
        >
          <Menu className={`h-[1.2rem] w-[1.2rem] ${theme === 'light' ? 'text-black' : 'text-white'}`} />
          <span className="sr-only">Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className={`h-[85vh] ${theme === 'light' ? 'bg-white' : 'bg-black'} border-t ${theme === 'light' ? 'border-gray-200' : 'border-white/10'} overflow-x-hidden`}>
        <div className="px-6 py-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-2">
            <DrawerTitle className={`text-xl font-bold ${textColor}`}>Menu</DrawerTitle>
          </div>
          <DrawerDescription className="mb-6 text-base text-premium-light/70">Wybierz stronę, do której chcesz przejść.</DrawerDescription>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  toggleDarkMode();
                  trackEvent('toggle_theme', 'ui', `Theme toggled to ${theme === "light" ? "dark" : "light"}`);
                }} 
                className={`${textColor}`}
              >
                {theme === "light" ? 
                  <Moon className="h-[1.2rem] w-[1.2rem] text-black" /> : 
                  <Sun className="h-[1.2rem] w-[1.2rem] text-white" />
                }
                <span className="sr-only">Toggle theme</span>
              </Button>
              
              <Link to={isAuthenticated ? "/admin" : "/login"} onClick={() => {
                setIsMenuOpen(false);
                // Ensure scrolling is restored
                document.body.style.overflow = '';
              }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`${textColor} ${theme === 'light' ? 'hover:bg-gray-100 hover:text-black' : 'hover:bg-white/10 hover:text-white'}`}
                >
                  <LogIn className={`h-[1.2rem] w-[1.2rem] ${theme === 'light' ? 'text-black' : 'text-white'}`} />
                  <span className="sr-only">{isAuthenticated ? "Panel administracyjny" : "Zaloguj"}</span>
                </Button>
              </Link>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto overflow-x-visible pr-2 flex flex-col space-y-2">
            <Link to="/"
              className={`${textColor} text-lg px-3 py-3 rounded-lg transition-colors ${isActive('/') ? 'font-bold' : ''}`}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Start
            </Link>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="offer" className={theme === 'light' ? 'border-gray-200' : 'border-white/10'}>
                <AccordionTrigger className={`${textColor} text-lg px-3 py-2 ${(isActive('/tworzenie-stron-internetowych') || isActive('/sklepy-internetowe') || isActive('/pozycjonowanie-stron') || isActive('/pozycjonowanie-lokalne') || isActive('/audyt-seo') || isActive('/optymalizacja-seo') || isActive('/copywriting-seo') || isActive('/content-plan')) ? 'font-bold' : ''}`}>Oferta</AccordionTrigger>
                <AccordionContent className="px-0 py-0">
                  <div className="bg-neutral-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl p-3 flex flex-col gap-6 overflow-x-hidden">
                    {/* Strony www */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="text-black dark:text-white" size={22} />
                        <span className="font-bold text-base text-premium-purple">Strony www</span>
                      </div>
                      <ul className="flex flex-col gap-1 pl-6">
                        <li>
                          <Link to="/tworzenie-stron-internetowych" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <Layout className="text-black dark:text-white" size={18} />
                            Tworzenie stron internetowych
                          </Link>
                        </li>
                        <li>
                          <Link to="/aplikacje-webowe" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <Layout className="text-black dark:text-white" size={18} />
                            Aplikacje webowe SaaS
                          </Link>
                        </li>
                        <li>
                          <Link to="/sklepy-internetowe" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <ShoppingCart className="text-black dark:text-white" size={18} />
                            Tworzenie sklepów internetowych
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Pozycjonowanie SEO */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="text-black dark:text-white" size={22} />
                        <span className="font-bold text-base text-premium-purple">Pozycjonowanie (SEO)</span>
                      </div>
                      <ul className="flex flex-col gap-1 pl-6">
                        <li>
                          <Link to="/pozycjonowanie-stron" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <Search className="text-black dark:text-white" size={18} />
                            Pozycjonowanie stron internetowych
                          </Link>
                        </li>
                        <li>
                          <Link to="/pozycjonowanie-lokalne" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <MapPin className="text-black dark:text-white" size={18} />
                            Pozycjonowanie lokalne
                          </Link>
                        </li>
                        <li>
                          <Link to="/audyt-seo" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <FileText className="text-black dark:text-white" size={18} />
                            Audyt SEO strony
                          </Link>
                        </li>
                        <li>
                          <Link to="/optymalizacja-seo" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <Settings className="text-black dark:text-white" size={18} />
                            Optymalizacja SEO strony
                          </Link>
                        </li>
                        <li>
                          <Link to="/copywriting-seo" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <PenLine className="text-black dark:text-white" size={18} />
                            Copywriting SEO
                          </Link>
                        </li>
                        <li>
                          <Link to="/content-plan" className="flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white transition" onClick={() => setIsMenuOpen(false)}>
                            <ListChecks className="text-black dark:text-white" size={18} />
                            Content Plan
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <Link to="/projects"
              className={`${textColor} text-lg transition-colors px-3 py-3 rounded-lg ${isActive('/projects') ? 'font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            
            <Link to="/about"
              className={`${textColor} text-lg transition-colors px-3 py-3 rounded-lg ${isActive('/about') ? 'font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              O nas
            </Link>
            
            <Link to="/blog"
              className={`${textColor} text-lg transition-colors px-3 py-3 rounded-lg ${isActive('/blog') ? 'font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link to="/contact"
              className={`${textColor} text-lg transition-colors px-3 py-3 rounded-lg ${isActive('/contact') ? 'font-bold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
          
          <Link to="/contact" className="mt-6" onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}>
            <Button className={`w-full ${theme === 'light' ? 'bg-black text-white' : 'bg-black text-white border border-white/20'} hover:bg-black hover:text-white`}>
              Umów spotkanie
            </Button>
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
