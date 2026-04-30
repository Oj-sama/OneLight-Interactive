"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#games", label: "Games" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/65 backdrop-blur-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-4 py-4 sm:px-6 lg:px-12 2xl:px-16">
        {/* LEFT */}
        <Link href="/" className="flex items-center gap-4 transition hover:opacity-80 sm:gap-5">
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
        </Link>

        {/* CENTER */}
        <div className="hidden items-center gap-6 text-sm lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative uppercase tracking-[0.18em] text-slate-300 transition"
            >
              <span className="transition group-hover:text-cyan-300">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 text-slate-400 sm:gap-4 lg:gap-5">
        </div>
      </nav>
    </header>
  );
}