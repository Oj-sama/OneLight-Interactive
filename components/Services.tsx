"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "VR Games", image: "/images/services/vr1.png" },
  { title: "AR Games", image: "/images/services/ar1.png" },
  { title: "XR Games", image: "/images/services/xr1.png" },
  { title: "PC Games", image: "/images/services/pc1.png" },
  { title: "Mobile Games", image: "/images/services/mobile1.png" },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const velocity = useRef(1.2);
  const isMouseDown = useRef(false);

  useEffect(() => {
    const handleDown = (e: MouseEvent) => {
      if (e.button !== 0) return;

      // Only speed up if clicking empty space (not on cards, forms, buttons, etc.)
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("form") ||
        target.closest("header") ||
        target.closest(".group") ||
        target.closest('[class*="backdrop-blur"]') ||
        target.closest('[role="button"]');

      if (isInteractive) return;

      isMouseDown.current = true;
    };

    const handleUp = () => {
      isMouseDown.current = false;
    };

    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("dragstart", (e) => e.preventDefault());

    return () => {
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("dragstart", (e) => e.preventDefault());
    };
  }, []);

  useAnimationFrame((_, delta) => {
    const targetVel = isMouseDown.current ? 12 : 1.2;
    velocity.current += (targetVel - velocity.current) * 0.08;

    x.current -= velocity.current * (delta / 16);

    if (trackRef.current) {
      const firstCard = trackRef.current.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 24;
      const totalWidth = cardWidth * services.length;

      if (x.current <= -totalWidth) {
        x.current += totalWidth;
      }

      trackRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  const repeated = [...services, ...services];

  return (
    <section id="services" className="relative overflow-hidden py-32">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-16 max-w-[1600px] px-6 text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/70">
          Services
        </p>

        <h2 className="brand-font text-4xl text-white md:text-6xl">
          What We Build
        </h2>
      </motion.div>

      {/* CAROUSEL */}
      <div className="mx-auto w-full max-w-[1400px] overflow-hidden px-6 py-10">
        <div ref={trackRef} className="flex gap-6">
          {repeated.map((service, i) => (
            <div
              key={i}
              className="relative aspect-square shrink-0 basis-[calc((100%-96px)/5)] overflow-visible"
            >
              {/* THIS is the fix */}
              <div className="group relative h-full w-full rounded-[20px] border border-white/10 overflow-hidden transition-transform duration-500 ease-out hover:scale-105 hover:z-20">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="280px"
                  priority={i < 5}
                  className="object-cover"
                  draggable={false}
                />

                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}