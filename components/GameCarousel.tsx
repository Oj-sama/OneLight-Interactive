"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = Array.from({ length: 12 }, (_, i) => `/images/gamepics/${i + 1}.png`);

export default function GameCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide, currentIndex]);

  const getVisibleImages = () => {
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    return [prev, currentIndex, next];
  };

  const [prevImg, currImg, nextImg] = getVisibleImages();

  return (
    <div className="relative w-full overflow-hidden py-10 pointer-events-auto">
      <div className="flex items-center justify-center gap-4 sm:gap-8">
        {/* Previous Image Preview */}
        <div 
          className="relative hidden sm:block h-[200px] w-[15%] sm:h-[300px] sm:w-[20%] opacity-40 cursor-pointer transition duration-300 hover:opacity-70"
          onClick={prevSlide}
        >
          <Image
            src={images[prevImg]}
            alt="Previous screenshot"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Current Main Image */}
        <div className="relative h-[250px] w-[90%] sm:h-[400px] md:h-[500px] sm:w-[60%] lg:w-[50%] shadow-2xl shadow-cyan-900/20">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currImg]}
                alt="Current screenshot"
                fill
                className="object-cover rounded-3xl border border-white/10"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Image Preview */}
        <div 
          className="relative hidden sm:block h-[200px] w-[15%] sm:h-[300px] sm:w-[20%] opacity-40 cursor-pointer transition duration-300 hover:opacity-70"
          onClick={nextSlide}
        >
          <Image
            src={images[nextImg]}
            alt="Next screenshot"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Manual Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-md transition hover:bg-cyan-500/50 hover:scale-110 border border-white/10"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-md transition hover:bg-cyan-500/50 hover:scale-110 border border-white/10"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      {/* Progress Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
