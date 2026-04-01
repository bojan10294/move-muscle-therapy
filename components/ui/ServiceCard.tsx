import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  name: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, name, description }: Props) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-teal-700">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100 dark:bg-teal-900/40 dark:text-teal-400 dark:group-hover:bg-teal-900/60">
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="mb-1.5 font-semibold text-[var(--color-dark)] dark:text-white">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </div>
  );
}
