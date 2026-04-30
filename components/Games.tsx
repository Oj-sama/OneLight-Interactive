"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Games() {
  return (
    <section id="games" className="relative overflow-hidden px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[1920px]"
      >
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Games
          </p>

          <h2 className="brand-font text-4xl text-white md:text-6xl">
            Featured Projects
          </h2>
        </div>

        {/* GAME CARD */}
        <motion.a
          href="/cleaning-simulator"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="group mx-auto mt-16 block max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-cyan-400/30"
        >
          {/* IMAGE */}
          <div className="relative w-full overflow-hidden">
            <Image
              src="/images/Gamer.png"
              alt="Cleaning Simulator"
              width={1536}
              height={1024}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              priority
              draggable={false}
            />

            {/* softer fade */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          </div>

          {/* TITLE */}
          <div className="py-6 text-center">
            <h3 className="brand-font text-2xl text-white md:text-3xl">
              Cleaning Simulator
            </h3>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}