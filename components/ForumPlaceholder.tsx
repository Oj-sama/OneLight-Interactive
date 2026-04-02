"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForumPlaceholder() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

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

      setSuccess("You’ve been subscribed for future updates.");
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
      <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950/20 backdrop-blur-[8px]" />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl rounded-[32px] border border-cyan-400/20 bg-cyan-400/5 p-10 text-center backdrop-blur-sm"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/75">
          Newsletter
        </p>

        <h2 className="brand-font text-4xl text-white md:text-6xl">
          Stay Updated
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Subscribe to receive updates, announcements, and news about our games.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitting}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 disabled:opacity-70"
            />

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-8 py-3 text-xs uppercase tracking-[0.22em] text-cyan-100 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Subscribe"}
            </button>
          </div>

          {error ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
          {success ? (
            <p className="mt-4 text-sm text-cyan-300">{success}</p>
          ) : null}
        </form>
      </motion.div>
    </section>
  );
}