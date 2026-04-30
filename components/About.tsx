"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
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