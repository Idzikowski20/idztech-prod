"use client";
import * as React from "react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { PointerHighlightDemo } from "./ui/pointer-highlightswelcomehero";

function WelcomeHero() {
  return (
    <>
    <section
      className="relative flex overflow-hidden flex-col justify-center items-center px-20 py-24 rounded-[40px] max-md:px-5 bg-center bg-[length:100%_100%]"
      style={{ backgroundImage: "url('/images/bg-smoke.png')" }}
      aria-label="Bento grid gallery"
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-full w-[1308px]">
      <div className="text-center mb-12">

          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <h2>Tworzymy dopracowane w każdym</h2>
          <div className="flex justify-center items-center w-full">
            <h2 className="relative z-10 p-1 text-main">pikselu</h2><br></br>
            <h2 className="p-1">doświadczenia</h2>
          </div>
        </div>
          <p className="text-left mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
          Projektujemy nowoczesne, przyjazne dla użytkownika strony internetowe, które łączą kreatywność z funkcjonalnością. Gwarantuję płynne, angażujące wrażenia, które przyciągają uwagę <br></br> i  skutecznie konwertują.
          </p>
        </div>

        <div className="max-md:h-[1250px] max-md:max-w-full">
          <div className="h-full flex gap-5 max-md:flex-col">
            <div className="h-full max-md:ml-0 max-md:w-full">
              <picture>
                <source srcSet="/images/bentogrid2mobile.svg" media="(max-width: 768px)" />
                <img
                  src="/images/bentogrid2.svg"
                  alt="Featured gallery image"
                  className="h-full object-contain max-md:object-cover grow w-full rounded-2xl aspect-[1.52]"
                />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section
      className="relative flex overflow-hidden flex-col justify-center items-center px-20 py-24 rounded-[40px] max-md:px-5 bg-center bg-[length:100%_100%]"
      style={{ backgroundImage: "url('/images/bg-smoke.png')" }}
      aria-label="Bento grid gallery"
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-full w-[1308px]">
      <div className="text-center mb-12">

          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <h2 className="w-full">Ożywiamy Twoją wizję dzięki nowoczesnemu</h2>
          <div className="flex justify-center items-center w-full">
            <h2 className="relative z-10 p-1 text-main">designowi</h2><br></br>
          </div>
        </div>
          <p className="text-left mt-4 text-lg max-w-3xl mx-auto text-premium-light/70 dark:text-premium-light/70 light:text-premium-dark">
          Twoje pomysły zasługują na perfekcyjne wykonanie. Łącząc świeże spojrzenie z innowacyjnym podejściem do projektowania i wdrażania stron, pomagam Ci wyróżnić się w cyfrowym świecie.
          </p>
        </div>

        <div className="max-md:h-[1150px] max-md:max-w-full">
          <div className="h-full flex gap-5 max-md:flex-col">

            <div className="h-full max-md:ml-0 max-md:w-full">

              <picture>
                <source srcSet="/images/bentogrid1mobile.svg" media="(max-width: 768px)" />
                <img
                  src="/images/bentogrid1.svg"
                  alt="Featured gallery image"
                  className="h-full object-cover grow w-full rounded-2xl aspect-[1.52]"
                />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}

export default WelcomeHero;
