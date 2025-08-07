import React, { useEffect, lazy, Suspense, useRef, useState } from "react";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import { applyMobileOptimizations } from "@/utils/performanceUtils";
import { useNavigate } from "react-router-dom";
import LocalSeoSection from "@/components/LocalSeoSection";
import { Helmet } from 'react-helmet-async';
import MarqueeDemo from "@/components/magicui/marqueedemo";
import WelcomeHero from "@/components/WelcomeHero";
import BentoGridThirdDemo from "@/components/bento-grid-demo-3";
import BentoDemo from "@/components/bento-demo";
import { WobbleCard } from "@/components/ui/wobble-card";
import { WobbleCardDemo } from "@/components/Wobble";

// Lazy load components with prefetch
const WhyWorkWithUs = lazy(() => import("@/components/WhyWorkWithUs"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTA = lazy(() => import("@/components/CTA"));

// Komponent LazySection
const LazySection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Ustaw na true i nie resetuj na false
          observer.unobserve(node); // Przestań obserwować po pierwszym pojawieniu się
        }
      },
      { rootMargin: "0px", threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        className +
        " transition-all duration-700 ease-out will-change-transform" +
        (isVisible
          ? " opacity-100 translate-y-0 pointer-events-auto"
          : " opacity-0 translate-y-10 pointer-events-none select-none")
      }
      style={{
        minHeight: 40,
        transitionDelay: isVisible ? `${delay}ms` : "0ms"
      }}
    >
      {children}
    </div>
  );
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
      // window.removeEventListener('load', preloadComponents); // Removed as per edit hint
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
      <Hero />

      <LazySection className="mt-8 md:mt-0" delay={200}>
        <WelcomeHero />
      </LazySection>

      {/* <LazySection className="mt-8 mb-8 md:mt-0" delay={100}>
        <WobbleCardDemo />
      </LazySection> */}

      <LazySection className="mt-8 mb-8 md:mt-0" delay={100}>
        <OurServices />
      </LazySection>


      {/* <LazySection className="mt-8 p-[20px] md:mt-0 flex justify-center align-center w-full" delay={300}>
        <BentoDemo />
      </LazySection> */}
      
      {/* <LazySection className="md:mt-0" delay={400}>
        <BentoGridThirdDemo />
      </LazySection> */}

      <LazySection data-lazy delay={500}>
        <Suspense fallback={<LoadingFallback />}>
          <div className="md:mt-0">
            <WhyWorkWithUs />
          </div>
        </Suspense>
      </LazySection>

      {/* <LazySection delay={600}>
        <Suspense fallback={<LoadingFallback />}>
          <LocalSeoSection />
        </Suspense>
      </LazySection> */}

      <LazySection data-lazy delay={700}>
        <Suspense fallback={<LoadingFallback />}>
          <MarqueeDemo />
        </Suspense>
      </LazySection>

        <Suspense fallback={<LoadingFallback />}>
          <CTA />
        </Suspense>
    </div>
  );
};

export default Index;
