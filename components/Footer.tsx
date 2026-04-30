"use client";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950/65 px-6 py-6 backdrop-blur-xl">

      <div className="relative z-10 mx-auto w-full max-w-[1920px]">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <Image
              src="/images/logo.png"
              alt="OneLight Interactive"
              width={72}
              height={72}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
            />

            <div className="leading-none">
              <div className="brand-font text-lg font-semibold uppercase tracking-[0.32em] text-white/95 sm:text-xl">
                OneLight
              </div>
              <div className="mt-2 text-[0.62rem] uppercase tracking-[0.42em] text-cyan-300/75 sm:text-[0.7rem]">
                Interactive
              </div>
            </div>
          </div>

          <p className="text-sm font-medium text-white/70">© {year} OneLight Interactive. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
            <a href="/#about" className="transition hover:text-cyan-300">
              About
            </a>
            <a href="/#services" className="transition hover:text-cyan-300">
              Services
            </a>
            <a href="/#games" className="transition hover:text-cyan-300">
              Games
            </a>
            <a href="/#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}