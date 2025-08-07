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
import { Globe, TrendingUp } from 'lucide-react';

// TypeScript interface for the NavigationMenuLink component
interface NavigationMenuLinkProps {
  asChild?: boolean;
  children: React.ReactNode;
}

const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({ asChild, children }) => {
  return <>{children}</>;
};

const DesktopNavigation = () => {
  const location = useLocation();

  const activeClass =
    'bg-gradient-to-br  via-[#9288ff] shadow-md text-white hover:bg-neutral-400 hover:text-white rounded-full px-4 py-2 transition-colors duration-300';

  const linkClass = cn(
    "transition-colors duration-300 px-4 py-2 rounded-full",
    'text-white hover:bg-[#604b9b] hover:text-black hover:shadow-md'
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
              className="
                transition-colors duration-300 px-4 py-2 rounded-full bg-transparent
                text-black hover:bg-gray-100 hover:text-white">
              Usługi
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-row rounded-xl px-0 py-0 min-w-[700px] max-w-[900px] bg-[#0c0c14] border backdrop-blur-sm  border-width-[1px] border-[#80808030]">
                {/* Strony www - lewa kolumna */}
                <div className="flex flex-col flex-1 items-start justify-start px-8 py-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-neutral-700 dark:text-neutral-200" size={32} />
                    <span className="font-bold text-xl text-main dark:text-neutral-100">Development</span>
                  </div>
                  <ul className="flex flex-col gap-4 w-full">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/tworzenie-stron-internetowych" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <div className='p-2'>
                            <span className="font-semibold text-black dark:text-neutral-100">Strony internetowe</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Profesjonalne projektowanie i tworzenie stron www responsywne strony firmowe, landing page i web design dla biznesu</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/aplikacje-webowe" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <div className='p-2'>
                            <span className="font-semibold text-black dark:text-neutral-100">Aplikacje webowe</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Nowoczesne aplikacje webowe na zamówienie rozwój aplikacji internetowych, platformy webowe <br></br>  i oprogramowanie dla firm - Aplikacje internetowe</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/sklepy-internetowe" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <div className='p-2'>
                            <span className="font-semibold text-black dark:text-neutral-100">Sklepy internetowe</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Kompleksowe rozwiązania e-commerce tworzenie <br></br>  i optymalizacja sklepów online (Shopify, WooCommerce)</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                {/* Border środkowy */}
                <div className="w-px my-8 bg-gray-300/20" />
                {/* Pozycjonowanie SEO - prawa kolumna */}
                <div className="flex flex-col flex-1 items-start justify-start px-8 py-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-neutral-700 dark:text-neutral-200" size={32} />
                    <span className="font-bold text-xl text-main dark:text-neutral-100">Seo</span>
                  </div>
                  <ul className="flex flex-col gap-4 w-full">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/pozycjonowanie-stron" className="flex items-start gap-3 rounded-lg px-0 py-0 transition hover:bg-neutral-100 dark:hover:bg-neutral-800">
                          <div className='p-2'>
                            <span className="font-semibold text-black dark:text-neutral-100">Pozycjonowanie stron</span>
                            <div className="text-xs text-neutral-600 dark:text-neutral-300">Kompleksowe pozycjonowanie SEO optymalizacja, link building i strategie Google dla firm</div>
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
            <Link to="/projects" className={"hover:text-black" + cn(linkClass, isActive('/projects') && activeClass)}>
              Portfolio
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/about" className={"hover:text-black" + cn(linkClass, isActive('/about') && activeClass)}>
              O nas
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/blog" className={"hover:text-black" + cn(linkClass, isActive('/blog') && activeClass)}>
              Blog
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/contact" className={"hover:text-black" + cn(linkClass, isActive('/contact') && activeClass)}>
              Kontakt
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNavigation;
