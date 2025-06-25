"use client";
import * as React from "react";

function WelcomeHero() {
  return (
    <section
      className="relative flex overflow-hidden flex-col justify-center items-center px-20 py-24 rounded-[40px] max-md:px-5 bg-center bg-[length:100%_100%]"
      style={{ backgroundImage: "url('/images/bg-smoke.png')" }}
      aria-label="Bento grid gallery"
    >
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-full w-[1088px]">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-3/5 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c2f8319670ad2cd058d801d83aff750921d743?placeholderIfAbsent=true&apiKey=99babcc14b1247aba368968a6569b41f"
                alt="Featured gallery image"
                className="object-contain grow w-full rounded-2xl aspect-[1.52] shadow-[0px_6px_9px_rgba(0,0,0,0.25)] max-md:mt-5 max-md:max-w-full"
              />
            </div>
            <div className="ml-5 w-2/5 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cca9633bceaaf11eb74b174e19203f58e13a2137?placeholderIfAbsent=true&apiKey=99babcc14b1247aba368968a6569b41f"
                alt="Gallery image"
                className="object-contain grow w-full rounded-2xl aspect-[1.02] shadow-[0px_6px_9px_rgba(0,0,0,0.25)] max-md:mt-5 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[41%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/732d556065841cb81fd826e1ae3dae05c0cfd2e6?placeholderIfAbsent=true&apiKey=99babcc14b1247aba368968a6569b41f"
                alt="Gallery image"
                className="object-contain grow w-full rounded-2xl aspect-[0.93] shadow-[0px_6px_9px_rgba(0,0,0,0.25)] max-md:mt-9 max-md:max-w-full"
              />
            </div>
            <div className="ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/607cef9a4285836e407a060a1be2b06e3f80e971?placeholderIfAbsent=true&apiKey=99babcc14b1247aba368968a6569b41f"
                alt="Gallery image"
                className="object-contain grow w-full rounded-2xl aspect-[1.36] shadow-[0px_6px_9px_rgba(0,0,0,0.25)] max-md:mt-9 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeHero;
