"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-slate-600 transition-all hover:bg-teal-600 hover:text-white hover:border-teal-600"
    >
      <ChevronUp size={20} />
    </button>
  );
}
