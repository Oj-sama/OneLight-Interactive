"use client";

import Image from "next/image";
import {
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#games", label: "Games" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-4 py-4 sm:px-6 lg:px-12 2xl:px-16">
        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-5">
        <Image
          src="/images/logo.png"
          alt="OneLight Interactive"
          width={72}
          height={72}
          loading="eager"
          priority
          className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16 xl:h-[72px] xl:w-[72px]"
        />

          <div className="hidden leading-none sm:block">
            <div className="brand-font text-base font-semibold uppercase tracking-[0.32em] text-white/95 lg:text-lg xl:text-[1.2rem]">
              OneLight
            </div>
            <div className="mt-2 text-[0.62rem] uppercase tracking-[0.42em] text-cyan-300/75 lg:text-[0.68rem] xl:text-[0.74rem]">
              Interactive
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden items-center gap-6 text-sm lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative uppercase tracking-[0.18em] text-slate-300 transition"
            >
              <span className="transition group-hover:text-cyan-300">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 text-slate-400 sm:gap-4 lg:gap-5">
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
      </nav>
    </header>
  );
}