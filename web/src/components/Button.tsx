import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50";

  const sizeClass =
    size === "sm"
      ? "h-10 px-4 text-sm"
      : size === "lg"
        ? "h-14 px-6 text-base"
        : "h-12 px-5 text-sm sm:text-base";

  const variantClass =
    variant === "secondary"
      ? "bg-surface border border-black/10 text-foreground hover:-translate-y-0.5 hover:border-black/20 hover:bg-surface-2"
      : variant === "ghost"
        ? "bg-transparent text-foreground hover:bg-black/5 hover:-translate-y-0.5"
        : "bg-accent text-white hover:-translate-y-0.5 shadow-[0_12px_30px_-18px_rgba(47,123,95,0.65)]";

  return (
    <button className={`${base} ${sizeClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

