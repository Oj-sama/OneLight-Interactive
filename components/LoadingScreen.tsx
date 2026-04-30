"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pctRef = useRef(0);
  const tgtRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      const rem = 100 - pctRef.current;
      const spd = rem > 50 ? 1.5 : rem > 20 ? 0.8 : 0.3;
      tgtRef.current = Math.min(100, tgtRef.current + spd);
      
      pctRef.current += (tgtRef.current - pctRef.current) * 0.15;
      const rounded = Math.round(pctRef.current);
      
      if (rounded >= 100 && !done) {
        setPercent(100);
        setDone(true);
        clearInterval(interval);
        setTimeout(() => setLoading(false), 1000);
      } else {
        setPercent(rounded);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [mounted, done]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden"
        >
          {/* Starfield - Disabled on Mobile */}
          {!isMobile && (
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              {Array.from({ length: 120 }).map((_, i) => {
                const size = 0.5 + Math.random() * 1.2;
                const hasGlow = Math.random() > 0.7;
                return (
                  <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                      width: size,
                      height: size,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.1 + Math.random() * 0.6,
                      boxShadow: hasGlow ? "0 0 4px rgba(255,255,255,0.8)" : "none",
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: hasGlow ? [1, 1.3, 1] : [1, 1, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                );
              })}
            </div>
          )}

          {/* Central UI */}
          <div className="relative flex flex-col items-center">
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
            >
              {/* Background Glow */}
              <motion.div 
                className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "radial-gradient(circle, rgba(125,211,252,0.15) 0%, transparent 70%)" }}
              />

              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="absolute rounded-full border-4 border-white/60"
                  initial={{ width: 256, height: 256, opacity: 0 }}
                  animate={{ 
                    width: [256, 1600], 
                    height: [256, 1600], 
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="absolute rounded-full border-[3px] border-dashed border-cyan-400/60"
                  initial={{ width: 256, height: 256, opacity: 0, rotate: 0 }}
                  animate={{ 
                    width: [256, 2000], 
                    height: [256, 2000], 
                    opacity: [0, 0.5, 0],
                    rotate: 120
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="absolute rounded-full border-2 border-white/30"
                  initial={{ width: 256, height: 256, opacity: 0 }}
                  animate={{ 
                    width: [256, 2400], 
                    height: [256, 2400], 
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              {/* Static Ring */}
              <motion.div 
                className="absolute w-64 h-64 rounded-full border border-white/[0.1]"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Logo */}
              <motion.div
                className="relative z-10 p-8 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(125,211,252,0)",
                    "0 0 60px rgba(125,211,252,0.2)",
                    "0 0 40px rgba(125,211,252,0)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="OneLight Logo"
                  width={160}
                  height={160}
                  className="h-32 w-32 object-contain sm:h-40 sm:w-40"
                  style={{ filter: "drop-shadow(0 0 25px rgba(125,211,252,0.3))" }}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Percentage */}
            <motion.div 
              className="mt-12 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-baseline gap-1">
                <span className="brand-font text-3xl font-light tracking-widest text-white sm:text-4xl">
                  {percent}
                </span>
                <span className="text-sm text-sky-300/30">%</span>
              </div>
              <div className="w-32 h-[1px] bg-white/[0.05] relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-sky-400/40"
                  animate={{ width: `${percent}%` }}
                />
              </div>
              <span className="mt-4 text-[0.6rem] uppercase tracking-[0.6em] text-white/20 font-medium">
                Initializing Experience
              </span>
            </motion.div>
          </div>

          {/* Decorative line */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}