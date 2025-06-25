import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useTheme } from '@/utils/themeContext';
import { Globe, TrendingUp, Layout, ShoppingCart, Search, MapPin, FileText, Settings, PenLine, ListChecks } from 'lucide-react';

// TypeScript interface for the NavigationMenuLink component
interface NavigationMenuLinkProps {
  asChild?: boolean;
  children: React.ReactNode;
}

const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({ asChild, children }) => {
  return <>{children}</>;
};

const DesktopNavigation = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const activeClass =
    'border border-[#ffffff42] text-white hover:bg-white/10 hover:text-white rounded-full px-4 py-2 transition-colors duration-300';

  const linkClass = cn(
    "transition-colors duration-300 px-4 py-2 rounded-full",
    theme === 'light'
      ? 'text-black hover:bg-gray-100 hover:text-black'
      : 'text-white hover:bg-white/10 hover:text-white'
  );

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="hidden lg:flex items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={cn(linkClass, isActive('/') && activeClass)}>
              Start
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                'transition-colors duration-300 px-4 py-2 rounded-full',
                theme === 'light'
                  ? 'text-black hover:bg-gray-100 hover:text-black'
                  : 'text-white hover:bg-white/10 hover:text-white'
              )}
            >
              Usługi
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-row bg-white dark:bg-neutral-900 rounded-xl px-0 py-0 min-w-[700px] max-w-[900px]">
                {/* Strony www - lewa kolumna */}
                <div className="flex flex-col flex-1 items-start justify-start px-8 py-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-neutral-700 dark:text-neutral-200" size={32} />
                    <span className="font-bold text-xl text-premium-purple dark:text-neutral-100">Strony internetowe</span>
                  </div>
                  <ul className="flex flex-col gap-4 w-full">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/tworzenie-stron-internetowych" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <Layout className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Tworzenie stron internetowych</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Profesjonalne projektowanie i tworzenie stron www - responsywne strony firmowe, landing page i web design dla biznesu</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/aplikacje-webowe" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <Layout className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Aplikacje webowe SaaS</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Nowoczesne aplikacje webowe na zamówienie – rozwój aplikacji internetowych, platformy webowe i oprogramowanie dla firm - Aplikacje internetowe</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/sklepy-internetowe" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <ShoppingCart className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Sklepy internetowe</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Kompleksowe rozwiązania e-commerce - tworzenie i optymalizacja sklepów online (Shopify, WooCommerce)</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                {/* Border środkowy */}
                <div className="w-px my-8 bg-gray-300/50" />
                {/* Pozycjonowanie SEO - prawa kolumna */}
                <div className="flex flex-col flex-1 items-start justify-start px-8 py-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-neutral-700 dark:text-neutral-200" size={32} />
                    <span className="font-bold text-xl text-premium-purple dark:text-neutral-100">Pozycjonowanie SEO</span>
                  </div>
                  <ul className="flex flex-col gap-4 w-full">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/pozycjonowanie-stron" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <Search className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Pozycjonowanie stron</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Kompleksowe pozycjonowanie SEO - optymalizacja, link building i strategie Google dla firm</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/pozycjonowanie-lokalne" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <MapPin className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Pozycjonowanie lokalne</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Optymalizacja lokalnego SEO - Google Maps, opinie i widoczność w lokalnych wynikach</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/audyt-seo" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <FileText className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Audyt Seo strony</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Kompleksowy audyt SEO - analiza techniczna, treści i konkurencji z rekomendacjami</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/optymalizacja-seo" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <Settings className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Optymalizacja Seo strony</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Profesjonalna optymalizacja SEO - techniczna, treści, UX i mobilna dla lepszych wyników</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/copywriting-seo" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <PenLine className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Copywriting Seo</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Profesjonalny copywriting SEO - treści pod pozycjonowanie dla stron, sklepów i blogów</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/content-plan" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <ListChecks className="text-neutral-700 dark:text-neutral-200 mt-1" size={22} />
                          <div>
                            <span className="font-semibold text-black dark:text-neutral-100">Content Plan</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Strategia content marketing - plan treści i harmonogram publikacji pod SEO</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/projects" className={cn(linkClass, isActive('/projects') && activeClass)}>
              Portfolio
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/about" className={cn(linkClass, isActive('/about') && activeClass)}>
              O nas
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/blog" className={cn(linkClass, isActive('/blog') && activeClass)}>
              Blog
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/contact" className={cn(linkClass, isActive('/contact') && activeClass)}>
              Kontakt
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNavigation;
