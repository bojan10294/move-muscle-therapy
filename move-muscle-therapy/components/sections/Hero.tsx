"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const WHATSAPP_URL = "https://wa.me/381616898101";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#0f2a3f]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, #0d9488 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.span
            variants={item}
            className="mb-4 inline-block rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-400"
          >
            Move & Muscle Therapy · Čačak
          </motion.span>

          <motion.h1
            variants={item}
            className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-8 text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            {t("subheadline")}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-teal-900/30 transition-all hover:bg-teal-500 hover:shadow-xl hover:-translate-y-0.5"
            >
              {t("cta")}
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-all hover:bg-white/10"
            >
              Naše usluge ↓
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
