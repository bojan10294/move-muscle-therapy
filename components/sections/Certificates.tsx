"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { certificates } from "@/lib/data/certificates";

export default function Certificates() {
  const t = useTranslations("certificates");
  const locale = useLocale() as "en" | "sr";
  const [index, setIndex] = useState(-1);

  const slides = certificates.map((c) => ({ src: c.imagePath, alt: c.titles[locale] }));

  return (
    <SectionWrapper id="certificates" className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            {t("subtitle")}
          </p>
          <h2
            className="text-3xl font-bold text-[var(--color-dark)] sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <button
              key={cert.id}
              onClick={() => setIndex(i)}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 text-left transition-all hover:shadow-md hover:-translate-y-1 dark:bg-slate-800 dark:border-slate-700"
              aria-label={`Otvori sertifikat: ${cert.titles[locale]}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-700">
                <Image
                  src={cert.imagePath}
                  alt={cert.titles[locale]}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-[var(--color-dark)] leading-snug line-clamp-2 dark:text-white">
                  {cert.titles[locale]}
                </p>
                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  {cert.issuers[locale] && `${cert.issuers[locale]} · `}{cert.year}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </SectionWrapper>
  );
}
