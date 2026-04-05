import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <div className="text-sm font-black uppercase tracking-wide text-accent">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <div className="text-sm leading-7 text-muted sm:text-base">{subtitle}</div>
      ) : null}
    </div>
  );
}

