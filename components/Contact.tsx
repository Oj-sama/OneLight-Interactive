"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";

type FormState = {
  messageType: string;
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  messageType: "",
  name: "",
  email: "",
  message: "",
};

const nameRegex = /^[A-Za-zÀ-ÿ' -]{2,80}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!form.messageType) {
      return "Please select what your message is about.";
    }

    if (!nameRegex.test(form.name.trim())) {
      return "Please enter a valid name.";
    }

    if (!emailRegex.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      return "Please enter a message with at least 10 characters.";
    }

    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messageType: form.messageType,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setError(data.error || "Failed to send your message.");
        return;
      }

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      console.error("CONTACT FORM ERROR:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-[900px]"
      >
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/70">
            Contact
          </p>

          <h2 className="brand-font text-4xl text-white md:text-6xl">
            Contact Us Form
          </h2>
        </div>

        <AnimatePresence mode="wait">
          {success ? (
            /* ─── SUCCESS STATE ─── */
            <motion.div
              key="contact-success"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-14 flex flex-col items-center overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-12 backdrop-blur-sm sm:p-16"
            >
              {/* Background pulse rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
                  initial={{ width: 0, height: 0, opacity: 0.5 }}
                  animate={{ width: i * 200, height: i * 200, opacity: 0 }}
                  transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                />
              ))}

              {/* Animated envelope → checkmark morph */}
              <motion.div className="relative mb-8 flex h-24 w-24 items-center justify-center">
                {/* Outer ring */}
                <svg width="96" height="96" viewBox="0 0 96 96" className="absolute">
                  <motion.circle
                    cx="48" cy="48" r="44"
                    fill="none" stroke="#22d3ee" strokeWidth="1.5"
                    strokeDasharray={276} strokeDashoffset={276}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    style={{ filter: "drop-shadow(0 0 10px rgba(34,211,238,0.4))" }}
                  />
                </svg>

                {/* Inner glow */}
                <motion.div
                  className="absolute h-16 w-16 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.4, 0.15], scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ background: "radial-gradient(circle, rgba(34,211,238,0.3), transparent)" }}
                />

                {/* Paper plane icon */}
                <motion.svg
                  width="32" height="32" viewBox="0 0 24 24"
                  fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.5))" }}
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </motion.svg>
              </motion.div>

              {/* Star particles burst */}
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i / 16) * Math.PI * 2;
                const dist = 80 + Math.random() * 50;
                return (
                  <motion.div
                    key={i}
                    className="pointer-events-none absolute left-1/2 top-1/3 rounded-full"
                    initial={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
                    animate={{
                      x: `calc(-50% + ${Math.cos(angle) * dist}px)`,
                      y: `calc(-50% + ${Math.sin(angle) * dist}px)`,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    style={{
                      width: 3 + Math.random() * 3,
                      height: 3 + Math.random() * 3,
                      backgroundColor: i % 3 === 0 ? "#e0f7ff" : i % 3 === 1 ? "#7dd3fc" : "#22d3ee",
                      boxShadow: `0 0 6px ${i % 3 === 0 ? "#e0f7ff" : "#22d3ee"}`,
                    }}
                  />
                );
              })}

              <motion.h3
                className="brand-font text-2xl text-white sm:text-3xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Message Sent
              </motion.h3>

              <motion.p
                className="mt-3 max-w-md text-center text-sm leading-relaxed text-slate-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                Thank you for reaching out! We&apos;ll review your message and get back to you as soon as possible.
              </motion.p>

              {/* Staggered confirmation details */}
              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {["Received", "Queued", "We'll respond soon"].map((label, i) => (
                  <motion.span
                    key={label}
                    className="flex items-center gap-1.5 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3.5 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-cyan-300/70"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.15 }}
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 4px rgba(34,211,238,0.8)" }} />
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              <motion.button
                onClick={() => setSuccess(false)}
                className="mt-10 text-xs uppercase tracking-[0.3em] text-cyan-400/40 transition hover:text-cyan-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                Send another message
              </motion.button>
            </motion.div>
          ) : (
            /* ─── FORM STATE ─── */
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
              transition={{ duration: 0.5 }}
              className="relative mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10"
            >
              {/* Scanning beam during submission */}
              {submitting && (
                <motion.div
                  className="pointer-events-none absolute inset-0 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Horizontal scan line */}
                  <motion.div
                    className="absolute left-0 right-0 h-px"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.6) 30%, rgba(34,211,238,0.8) 50%, rgba(34,211,238,0.6) 70%, transparent 100%)",
                      boxShadow: "0 0 20px rgba(34,211,238,0.4), 0 0 60px rgba(34,211,238,0.15)",
                    }}
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Ambient overlay */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: [0, 0.03, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ background: "linear-gradient(180deg, rgba(34,211,238,0.1), transparent, rgba(34,211,238,0.1))" }}
                  />
                </motion.div>
              )}

              <div className="mb-5">
                <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-cyan-300/75">
                  What is your message about?
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.messageType}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, messageType: e.target.value }))
                    }
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                  >
                    <option value="" disabled hidden className="text-slate-500">
                      Select a category...
                    </option>
                    <option value="General Inquiry" className="bg-slate-900 text-white">General Inquiry</option>
                    <option value="Help / Support" className="bg-slate-900 text-white">Help / Support</option>
                    <option value="Game Pitch" className="bg-slate-900 text-white">Game Pitch</option>
                    <option value="Business / Partnership Inquiry" className="bg-slate-900 text-white">Business / Partnership Inquiry</option>
                    <option value="Feedback / Suggestions" className="bg-slate-900 text-white">Feedback / Suggestions</option>
                    <option value="Bug Report" className="bg-slate-900 text-white">Bug Report</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-cyan-300/75">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-cyan-300/75">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-cyan-300/75">
                  Message
                </label>
                <textarea
                  rows={7}
                  required
                  placeholder="Tell us about your game or idea"
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-sm font-medium text-red-300"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex justify-center">
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex min-w-[240px] items-center justify-center overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-10 py-4 text-xs uppercase tracking-[0.22em] text-cyan-100 transition hover:scale-[1.02] disabled:cursor-not-allowed"
                >
                  {/* Hover sweep */}
                  {!submitting && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent translate-x-[-120%] transition duration-700 group-hover:translate-x-[120%]" />
                  )}

                  {/* Scanning animation */}
                  {submitting && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-3">
                    {submitting ? (
                      <>
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          style={{ boxShadow: "0 0 8px rgba(34,211,238,0.8)" }}
                        />
                        Transmitting...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}