import { useTranslations } from "next-intl";
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import WhatsAppIcon from '../ui/WhatsAppIcon';

const WHATSAPP_URL = "https://wa.me/381616898101";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.0!2d20.3803448!3d43.9020031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x763ee02258f4e83%3A0xdba8d812408c57b7!2sMove+%26+Muscle+Therapy!5e0!3m2!1ssr!2srs!4v1700000000000";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/AWfEMuo1KWudVXQw5";

export default function Contact() {
  const t = useTranslations("contact");

  const items = [
    { icon: MapPin, label: t("address") },
    { icon: Phone, label: t("phone"), href: `tel:+381616898101` },
    { icon: Clock, label: t("hoursValue") },
  ];

  return (
    <SectionWrapper id="contact" className="bg-[#0f2a3f]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
            {t("subtitle")}
          </p>
          <h2
            className="text-3xl font-bold text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            {items.map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/20 text-teal-400">
                  <Icon size={18} />
                </div>
                {href ? (
                  <a
                    href={href}
                    className="pt-1.5 text-slate-300 transition-colors hover:text-teal-400 whitespace-pre-line"
                  >
                    {label}
                  </a>
                ) : (
                  <p className="pt-1.5 text-slate-300 whitespace-pre-line">{label}</p>
                )}
              </div>
            ))}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon size={18} className="shrink-0" />
                {t("bookCta")}
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-teal-500 hover:text-teal-400"
              >
                <ExternalLink size={14} />
                {t("directionsLabel")}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Move & Muscle Therapy — lokacija"
              src={MAPS_EMBED_URL}
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
