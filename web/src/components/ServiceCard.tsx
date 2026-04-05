import type { LucideIcon } from "lucide-react";
import { clsx } from "@/lib/clsx";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article
      className={clsx(
        "group rounded-3xl border border-black/5 bg-surface/70 p-7 shadow-[0_10px_25px_-18px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-1 hover:border-black/10 hover:bg-surface",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-2 ring-1 ring-black/5">
          <Icon className="h-6 w-6 text-accent-ink" aria-hidden="true" />
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
      </div>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}

