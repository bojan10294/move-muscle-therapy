import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { label: t("yearsLabel"), value: t("yearsValue") },
    { label: t("certLabel"), value: t("certValue") },
    { label: t("clientsLabel"), value: t("clientsValue") },
  ];

  return (
    <SectionWrapper id="about" className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
              {t("subtitle")}
            </p>
            <h2
              className="mb-6 text-3xl font-bold text-[var(--color-dark)] sm:text-4xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {t("title")}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t("body")}
            </p>

            <div className="mb-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg dark:bg-teal-900/40 dark:text-teal-400">
                LT
              </div>
              <div>
                <p className="font-semibold text-[var(--color-dark)]">
                  {t("therapistName")}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t("therapistTitle")}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm border border-slate-100 dark:bg-slate-800 dark:border-slate-700"
                >
                  <p
                    className="text-2xl font-bold text-teal-600 dark:text-teal-400"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-md">
              <Image
                src="/images/Luka-nova.jpg"
                alt="Luka Tomić, Master profesora sporta"
                fill
                className="object-cover object-center rounded-3xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-teal-600/10 -z-10" />
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-xl bg-amber-400/10 -z-10" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
