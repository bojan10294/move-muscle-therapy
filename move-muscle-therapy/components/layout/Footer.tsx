import { useTranslations } from "next-intl";
import InstagramIcon from "@/components/ui/InstagramIcon";

const INSTAGRAM_URL = "https://www.instagram.com/movenmuscle";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0f2a3f] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p
              className="mb-1 text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Move & Muscle<span className="text-teal-400"> Therapy</span>
            </p>
            <p className="text-sm text-slate-400">{t("tagline")}</p>
            <p className="mt-1 text-xs text-slate-500">{t("address")}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-teal-500 hover:text-teal-400"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
