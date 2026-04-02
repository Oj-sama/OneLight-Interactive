"use client";

import Image from "next/image";
import {
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-6 pb-10 pt-20">
      <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950/25 backdrop-blur-[8px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1920px]">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

        <div className="mt-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <Image
              src="/images/logo.png"
              alt="OneLight Interactive"
              width={64}
              height={64}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />

            <div className="leading-none">
              <div className="brand-font text-lg font-semibold uppercase tracking-[0.3em] text-white/95 sm:text-xl">
                OneLight
              </div>
              <div className="mt-2 text-[0.65rem] uppercase tracking-[0.42em] text-cyan-300/75 sm:text-[0.72rem]">
                Interactive
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.18em] text-slate-300">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>
            <a href="#services" className="transition hover:text-cyan-300">
              Services
            </a>
            <a href="#games" className="transition hover:text-cyan-300">
              Games
            </a>
            <a href="#contact" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            {[FaYoutube, FaXTwitter, FaFacebookF, FaInstagram, FaTiktok].map(
              (Icon, i) => (
                <a key={i} href="#" className="group relative transition">
                  <Icon
                    size={18}
                    className="transition duration-300 group-hover:scale-110 group-hover:text-cyan-300"
                  />
                  <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 blur-md transition group-hover:opacity-100" />
                </a>
              )
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-400 sm:flex-row">
          <p>© {year} OneLight Interactive. All rights reserved.</p>
          <p>admin@onelightinteractive.com</p>
        </div>
      </div>
    </footer>
  );
}