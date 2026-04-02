"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";

const WHATSAPP_URL = "https://wa.me/381616898101";

const navIds = ["about", "services", "certificates", "testimonials", "contact"] as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function Header() {
  const t = useTranslations("nav");
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-surface/90 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#">
          <Image
            src="/images/mmtherapy-logo.png"
            alt="Move & Muscle Therapy"
            width={200}
            height={60}
            priority
            className="h-11 md:h-13 w-auto object-contain" 
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-sm font-medium transition-colors ${
                active === id
                  ? "text-teal-600 dark:text-teal-400"
                  : "text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
              }`}
            >
              {t(id)}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            {t("book")}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden" ref={menuRef}>
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-slate-600 dark:text-slate-300"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navIds.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-400"
              >
                {t(id)}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-teal-600 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              {t("book")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
