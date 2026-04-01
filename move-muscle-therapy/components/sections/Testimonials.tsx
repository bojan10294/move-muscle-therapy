import { useTranslations, useLocale } from "next-intl";
import { Star, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonials } from "@/lib/data/testimonials";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Move+%26+Muscle+Therapy/@43.9020031,20.3803448,17z/data=!4m8!3m7!1s0x763ee02258f4e83:0xdba8d812408c57b7!8m2!3d43.9020031!4d20.3803448!9m1!1b1!16s%2Fg%2F11wjfy0py7?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} od 5 zvezdica`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  return (
    <SectionWrapper id="testimonials" className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
            {t("subtitle")}
          </p>
          <h2
            className="mb-8 text-3xl font-bold text-[var(--color-dark)] sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("title")}
          </h2>
          <div className="inline-flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 dark:border-amber-900/50 dark:bg-amber-900/20">
            <div className="text-left">
              <p className="text-4xl font-bold text-[var(--color-dark)]" style={{ fontFamily: "var(--font-playfair), serif" }}>5.0</p>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-amber-200 dark:bg-amber-900/50" />
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">121 recenzija</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Google recenzije</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-[var(--color-surface)] p-6 dark:border-slate-700 dark:bg-[var(--color-surface)]"
            >
              <StarRating rating={review.rating} />
              <p className="flex-1 text-sm leading-relaxed text-slate-600 italic dark:text-slate-300">
                &ldquo;{locale === "en" && review.textEn ? review.textEn : review.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4 dark:border-slate-700">
                <p className="text-sm font-semibold text-[var(--color-dark)]">
                  {review.name}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal-200 px-6 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
          >
            {t("googleCta")}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
