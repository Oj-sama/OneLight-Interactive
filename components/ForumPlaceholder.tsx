"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForumPlaceholder() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const cleanEmail = email.trim().toLowerCase();

    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);

      await addDoc(collection(db, "newsletter_subscribers"), {
        email: cleanEmail,
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("NEWSLETTER ERROR:", err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong while subscribing.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl rounded-[32px] border border-cyan-400/20 bg-cyan-400/5 p-10 text-center backdrop-blur-sm overflow-hidden"
      >
        {/* Ambient shimmer inside card */}
        <motion.div
          className="pointer-events-none absolute -inset-4 opacity-0"
          animate={submitting ? { opacity: [0, 0.15, 0], x: ["-100%", "100%"] } : { opacity: 0 }}
          transition={{ duration: 1.5, repeat: submitting ? Infinity : 0, ease: "easeInOut" }}
          style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)" }}
        />

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/75">
          Newsletter
        </p>

        <h2 className="brand-font text-4xl text-white md:text-6xl">
          Stay Updated
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Subscribe to receive updates, announcements, and news about our games.
        </p>

        <AnimatePresence mode="wait">
          {success ? (
            /* ─── SUCCESS STATE ─── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-10 max-w-2xl"
            >
              {/* Checkmark ring */}
              <motion.div className="mx-auto flex h-20 w-20 items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" className="absolute">
                  <motion.circle
                    cx="40" cy="40" r="36"
                    fill="none" stroke="#22d3ee" strokeWidth="2"
                    strokeDasharray={226} strokeDashoffset={226}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.5))" }}
                  />
                </svg>
                <motion.svg
                  width="28" height="28" viewBox="0 0 24 24"
                  fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.6))" }}
                >
                  <motion.path
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                  />
                </motion.svg>
              </motion.div>

              {/* Particles burst */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const dist = 60 + Math.random() * 30;
                return (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-400"
                    initial={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
                    animate={{
                      x: `calc(-50% + ${Math.cos(angle) * dist}px)`,
                      y: `calc(-50% + ${Math.sin(angle) * dist}px)`,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    style={{ boxShadow: "0 0 6px rgba(34,211,238,0.8)" }}
                  />
                );
              })}

              <motion.p
                className="mt-4 text-lg font-medium text-cyan-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                You&apos;re all set!
              </motion.p>
              <motion.p
                className="mt-1 text-sm text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                You&apos;ll receive updates and announcements at your email.
              </motion.p>

              <motion.button
                onClick={() => setSuccess(false)}
                className="mt-6 text-xs uppercase tracking-[0.3em] text-cyan-400/50 transition hover:text-cyan-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Subscribe another email
              </motion.button>
            </motion.div>
          ) : (
            /* ─── FORM STATE ─── */
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitting}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 disabled:opacity-70"
                  />
                  {/* Focus glow line */}
                  <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-500 peer-focus:via-cyan-400/60" />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="group relative inline-flex min-w-[180px] items-center justify-center overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-8 py-3 text-xs uppercase tracking-[0.22em] text-cyan-100 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Hover sweep */}
                  {!submitting && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent translate-x-[-120%] transition duration-700 group-hover:translate-x-[120%]" />
                  )}

                  {/* Submitting pulse wave */}
                  {submitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2.5">
                    {submitting ? (
                      <>
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          style={{ boxShadow: "0 0 8px rgba(34,211,238,0.8)" }}
                        />
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </span>
                </motion.button>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    className="mt-4 text-sm text-red-300"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}