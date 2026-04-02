"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
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
  const [success, setSuccess] = useState("");

  const validate = () => {
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
    setSuccess("");

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

      setSuccess("Your message has been sent successfully.");
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
      <div className="pointer-events-none absolute inset-0 z-0 bg-slate-950/20 backdrop-blur-[8px]" />

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
            Start Your Project
          </h2>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10"
        >
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

          {error ? (
            <p className="mt-5 text-center text-sm text-red-300">{error}</p>
          ) : null}

          {success ? (
            <p className="mt-5 text-center text-sm text-cyan-300">{success}</p>
          ) : null}

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-10 py-3 text-xs uppercase tracking-[0.22em] text-cyan-100 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent translate-x-[-120%] transition duration-700 group-hover:translate-x-[120%]" />
              <span className="relative z-10">
                {submitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}