"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [isHoveringText, setIsHoveringText] = useState(false);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);
  const [charge, setCharge] = useState(0);

  const pressingRef = useRef(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      setIsHoveringText(inside);

      if (inside) {
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setMouseX(x);
        setMouseY(y);
      }
    };

    const handleDown = () => {
      pressingRef.current = true;
    };

    const handleUp = () => {
      pressingRef.current = false;
    };

    const animate = () => {
      setCharge((prev) => {
        if (pressingRef.current) return Math.min(1, prev + 0.02);
        return Math.max(0, prev - 0.018);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleExplore = () => {
    const target = document.getElementById("about");
    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop;
    const duration = 1200;
    let startTime: number | null = null;

    const easeIn = (t: number) => t * t;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = easeIn(progress);

      window.scrollTo(0, start + (end - start) * eased);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 text-center sm:px-6 lg:px-10">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_45%)]" />

      <div className="relative z-20 mx-auto w-full max-w-[1800px]">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto inline-block w-fit"
        >
          {/* Base text */}
          <h1 className="brand-font relative z-10 text-[clamp(2.5rem,10vw,10rem)] font-semibold uppercase leading-[0.95] tracking-[0.04em] text-sky-300/75 sm:text-[clamp(3.5rem,10vw,10rem)]">
            Build Your Light
          </h1>

          {/* Local glow radius behind text */}
          {isHoveringText && (
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                background: `radial-gradient(circle 85px at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.14) 0%, rgba(125,211,252,0.12) 30%, rgba(56,189,248,0.08) 48%, rgba(56,189,248,0) 70%)`,
                filter: "blur(16px)",
              }}
            />
          )}

          {/* ONLY the hovered radius inside the letters lights up */}
          <h1
            aria-hidden="true"
            className="pointer-events-none brand-font absolute left-0 top-0 z-20 w-full text-[clamp(2.5rem,10vw,10rem)] font-semibold uppercase leading-[0.95] tracking-[0.04em] text-transparent sm:text-[clamp(3.5rem,10vw,10rem)]"
            style={{
              opacity: isHoveringText ? 1 : 0,
              backgroundImage: `radial-gradient(circle 95px at ${mouseX}% ${mouseY}%,
                #ffffff 0%,
                #eafaff 18%,
                #bfeeff 34%,
                #7dd3fc 52%,
                rgba(125,211,252,0.0) 68%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "opacity 120ms linear",
            }}
          >
            Build Your Light
          </h1>

          {/* Charge glow over full text while holding mouse anywhere */}
          <h1
            aria-hidden="true"
            className="pointer-events-none brand-font absolute left-0 top-0 z-30 w-full text-[clamp(2.5rem,10vw,10rem)] font-semibold uppercase leading-[0.95] tracking-[0.04em] text-transparent sm:text-[clamp(3.5rem,10vw,10rem)]"
            style={{
              opacity: charge,
              backgroundImage:
                "linear-gradient(to bottom, #ffffff 0%, #f3fbff 28%, #d7f3ff 58%, #7dd3fc 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `0 0 ${8 + charge * 12}px rgba(255,255,255,${0.10 + charge * 0.14}),
                           0 0 ${20 + charge * 24}px rgba(56,189,248,${0.16 + charge * 0.20}),
                           0 0 ${38 + charge * 40}px rgba(56,189,248,${0.08 + charge * 0.14})`,
              transition: "opacity 80ms linear, text-shadow 80ms linear",
            }}
          >
            Build Your Light
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.25 }}
          className="mt-8 sm:mt-10"
        >
          <motion.button
            onClick={handleExplore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-8 py-3 text-xs uppercase tracking-[0.22em] text-cyan-100 sm:px-10 sm:py-4 sm:text-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent translate-x-[-120%] transition duration-700 group-hover:translate-x-[120%]" />
            <span className="relative z-10">Explore</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}