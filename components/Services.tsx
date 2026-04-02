"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "VR Games",
    image: "/images/services/vr.png",
  },
  {
    title: "AR Games",
    image: "/images/services/ar.png",
  },
  {
    title: "XR Games",
    image: "/images/services/xr.png",
  },
  {
    title: "PC Games",
    image: "/images/services/pc.png",
  },
  {
    title: "Mobile Games",
    image: "/images/services/mobile.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background blur layer */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950/20 backdrop-blur-[8px]" />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-[1600px]"
      >
        {/* Title */}
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Services
          </p>

          <h2 className="brand-font text-4xl text-white md:text-6xl">
            What We Build
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10"
            >
              {/* IMAGE */}
              <div className="relative h-[240px] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/10" />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/85">
                  {service.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}