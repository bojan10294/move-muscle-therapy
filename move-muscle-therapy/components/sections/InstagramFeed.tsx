"use client";

import { useTranslations } from "next-intl";
import InstagramIcon from "@/components/ui/InstagramIcon";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Script from "next/script";

const INSTAGRAM_URL = "https://www.instagram.com/movenmuscle";

export default function InstagramFeed() {
  const t = useTranslations("instagram");

  return (
    <SectionWrapper id="instagram" className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)]">
      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="lazyOnload"
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            {t("subtitle")}
          </p>
          <h2
            className="mb-6 text-3xl font-bold text-[var(--color-dark)] sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("title")}
          </h2>
        </div>

        {/* @ts-expect-error behold custom element */}
        <behold-widget feed-id="UlMgsNDBNKXE8PVAU6aU"></behold-widget>

        <div className="mt-8 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <InstagramIcon size={16} />
            {t("cta")}
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
