import { useTranslations } from "next-intl";
import {
  Zap,
  Droplets,
  Wind,
  HandHeart,
  Waves,
  Bone,
  Activity,
  Bolt,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";

type ServiceDef = {
  icon: LucideIcon;
  key: "dryNeedling" | "hijamaWet" | "hijamaDry" | "therapeuticMassage" | "relaxMassage" | "chiropractic" | "pressureBoots" | "electrotherapy";
};

const SERVICE_DEFS: ServiceDef[] = [
  { icon: Bone, key: "chiropractic" },
  { icon: Droplets, key: "hijamaWet" },
  { icon: Wind, key: "hijamaDry" },
  { icon: Zap, key: "dryNeedling" },
  { icon: HandHeart, key: "therapeuticMassage" },
  { icon: Waves, key: "relaxMassage" },
  { icon: Activity, key: "pressureBoots" },
  { icon: Bolt, key: "electrotherapy" },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <SectionWrapper id="services" className="bg-white dark:bg-slate-900">
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_DEFS.map(({ icon, key }) => (
            <ServiceCard
              key={key}
              icon={icon}
              name={t(`${key}.name`)}
              description={t(`${key}.description`)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
