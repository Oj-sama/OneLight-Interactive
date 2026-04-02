"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 text-center"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950/20 backdrop-blur-[8px]" />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/70">
          About
        </p>

        <h2 className="brand-font text-4xl text-white md:text-6xl">
          OneLight Interactive
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
          OneLight Interactive is a game development studio creating professional
          experiences across VR, AR, PC, and mobile platforms.
        </p>
      </motion.div>
    </section>
  );
}