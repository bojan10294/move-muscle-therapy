"use client";

import { useTranslations } from "next-intl";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/381616898101";

export default function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("tooltip")}
      title={t("tooltip")}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <WhatsAppIcon size={28} className="text-white" />
    </a>
  );
}
