"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h6 className="text-2xl md:text-5xl font-bold mb-2 text-premium-dark dark:text-premium-light">Zwiększ widoczność Twojej firmy w Google Maps i lokalnych wynikach wyszukiwania</h6>
              <br />
              <span className="text-5xl font-bold mt-1 leading-none">
              </span>
          </>
        }
      >
        <img
          src={`/images/restauracja-warszawa.png`}
          alt="Wyniki wyszukiwania Restauracje Warszawa - Google Maps"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
