"use client";

import { motion } from "framer-motion";

export default function LocationHours() {
  const lat = 36.89077319144435;
  const lng = 10.171341629189339;

  return (
    <section className="relative overflow-hidden px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-[1100px]"
      >
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Location
          </p>

          <h2 className="brand-font text-4xl text-white md:text-6xl">
            Our Location
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            OneLight Interactive — La Ghazela, Tunisia
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-cyan-400/20 bg-white/5 p-3 backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-[22px]">
            <iframe
              title="OneLight Interactive Location"
              src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>

          
        </div>
      </motion.div>
    </section>
  );
}