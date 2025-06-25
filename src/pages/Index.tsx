import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import { applyMobileOptimizations } from "@/utils/performanceUtils";
import { useNavigate } from "react-router-dom";
import LocalSeoSection from "@/components/LocalSeoSection";
import { Helmet } from 'react-helmet-async';
import MarqueeDemo from "@/components/magicui/marqueedemo";
import WelcomeHero from "@/components/WelcomeHero";

// Lazy load components with prefetch
const WhyWorkWithUs = lazy(() => import("@/components/WhyWorkWithUs"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));

// Preload critical components
const preloadComponents = () => {
  const componentsToPreload = [
    () => import("@/components/WhyWorkWithUs"),
  ];

  if ('requestIdleCallback' in window) {
    componentsToPreload.forEach(component => {
      requestIdleCallback(() => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.as = 'script';
        prefetchLink.href = component.toString().match(/import\("([^"]+)"\)/)?.[1] || '';
        document.head.appendChild(prefetchLink);
        component();
      });
    });
  } else {
    componentsToPreload.forEach(component => {
      setTimeout(() => component(), 1000);
    });
  }
};

// Minimal loading fallback with skeleton
const LoadingFallback = () => (
  <div className="min-h-[100px] animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg" />
);

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Apply mobile optimizations
    applyMobileOptimizations();

    // Preload critical components
    if (document.readyState === 'complete') {
      preloadComponents();
    } else {
      window.addEventListener('load', preloadComponents);
    }

    // Setup intersection observer for lazy loading
    const setupIntersectionObserver = () => {
      const options = {
        rootMargin: '100px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLImageElement;
            const dataSrc = element.getAttribute('data-src');
            if (dataSrc) {
              element.src = dataSrc;
              element.removeAttribute('data-src');
            }
            observer.unobserve(element);
          }
        });
      }, options);

      document.querySelectorAll('[data-lazy]').forEach(section => {
        observer.observe(section);
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setupIntersectionObserver());
    } else {
      setTimeout(() => setupIntersectionObserver(), 100);
    }

    return () => {
      window.removeEventListener('load', preloadComponents);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nowoczesne strony internetowe, sklep internetowy, pozycjonowanie, Audyt Seo</title>
        <meta name="description" content="Nowoczesne strony internetowe, sklepy internetowe, aplikacje webowe i skuteczne pozycjonowanie SEO. Kompleksowa obsługa firm – od projektu po rozwój i optymalizację." />
        <meta name="keywords" content="tworzenie stron internetowych, strony www, sklepy internetowe, e-commerce, aplikacje webowe, web design, SEO, pozycjonowanie stron, Warszawa, projektowanie stron, landing page, optymalizacja SEO" />
        {/* FAQPage Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Na czym polega pozycjonowanie stron internetowych?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pozycjonowanie to szereg działań mających na celu zwiększenie widoczności strony w wynikach wyszukiwania Google, m.in. optymalizacja techniczna, content marketing, link building."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długo trzeba czekać na efekty pozycjonowania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pierwsze efekty mogą być widoczne po kilku tygodniach, ale pełne rezultaty pojawiają się zwykle po 3-6 miesiącach regularnych działań."
                }
              },
              {
                "@type": "Question",
                "name": "Czy pozycjonowanie jest jednorazowe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie, SEO to proces ciągły. Algorytmy Google i konkurencja stale się zmieniają, dlatego ważna jest regularność działań."
                }
              },
              {
                "@type": "Question",
                "name": "Czy mogę pozycjonować stronę samodzielnie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Możesz, ale skuteczne SEO wymaga wiedzy, narzędzi i doświadczenia. Współpraca z nami pozwala osiągnąć lepsze i szybsze efekty."
                }
              },
              {
                "@type": "Question",
                "name": "Jak mierzycie skuteczność działań SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monitorujemy pozycje fraz kluczowych, ruch organiczny, liczbę konwersji oraz inne wskaźniki KPI."
                }
              }
            ]
          }
        `}</script>
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Strona główna",
                "item": "https://idztech.pl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Strony internetowe",
                "item": "https://idztech.pl/tworzenie-stron-www"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Sklepy internetowe",
                "item": "https://idztech.pl/sklepy-internetowe"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Pozycjonowanie SEO",
                "item": "https://idztech.pl/pozycjonowanie-stron"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Kontakt",
                "item": "https://idztech.pl/contact"
              }
            ]
          }
        `}</script>
      </Helmet>
      <Navbar />
      <Hero />

      <div className="mt-8 md:mt-0">
        <WelcomeHero />
      </div>
      
      <div className="mt-8 md:mt-0">
        <OurServices />
      </div>

      <div data-lazy>
        <Suspense fallback={<LoadingFallback />}>
          <div className="mt-8 md:mt-0">
            <WhyWorkWithUs />
          </div>
        </Suspense>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <LocalSeoSection />
      </Suspense>

      <div data-lazy>
        <Suspense fallback={<LoadingFallback />}>
          <MarqueeDemo />
        </Suspense>
      </div>

      <div data-lazy>
        <Suspense fallback={<LoadingFallback />}>
          <CTA />
        </Suspense>
      </div>

      <div data-lazy>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
