import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import { applyMobileOptimizations } from "@/utils/performanceUtils";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      <Navbar />
      <Hero />
      
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

      <div data-lazy>
        <Suspense fallback={<LoadingFallback />}>
          <div className="mt-8 md:mt-0">
            <Testimonials />
          </div>
        </Suspense>
      </div>

      <div data-lazy>
        <Suspense fallback={<LoadingFallback />}>
          <div className="mt-8 md:mt-0">
            <FAQ />
          </div>
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
