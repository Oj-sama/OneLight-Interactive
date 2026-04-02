"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

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

const SERVICE_ID = "service_ouwm0ss";
const TEMPLATE_ID = "template_8q62mf7";
const PUBLIC_KEY = "yoqR6QsDo2vF7Go_U";

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

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSuccess("✅ Message sent successfully!");
      setForm(initialState);
    } catch (err) {
      console.error("EMAILJS ERROR:", err);
      setError("❌ Failed to send message. Please try again.");
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
        viewport={{ once: true }}
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
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.28em] text-cyan-300/75">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
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
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
            />
          </div>

          {error && (
            <p className="mt-5 text-center text-sm text-red-300">{error}</p>
          )}

          {success && (
            <p className="mt-5 text-center text-sm text-green-300">
              {success}
            </p>
          )}

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-10 py-3 text-xs uppercase tracking-[0.22em] text-cyan-100 transition hover:scale-[1.02] disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}