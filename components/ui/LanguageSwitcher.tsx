"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: (typeof routing.locales)[number]) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  const next = locale === "sr" ? "en" : "sr";

  return (
    <button
      onClick={() => switchLocale(next)}
      disabled={isPending}
      aria-label={`Switch to ${next.toUpperCase()}`}
      className="rounded-full border border-slate-300 bg-surface px-3 py-1 text-sm font-medium text-slate-500 transition-colors hover:bg-teal-600 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white"
    >
      {next.toUpperCase()}
    </button>
  );
}
