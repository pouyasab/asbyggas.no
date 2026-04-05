"use client";

import {
  useEffect,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type FormEvent,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

function BefaringModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const [navn, setNavn] = useState("");
  const [telefon, setTelefon] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const canSubmit =
    navn.trim().length >= 2 && telefon.replace(/\s/g, "").length >= 6;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit || sending) return;
    setErrorMessage(null);
    setSending(true);
    try {
      const res = await fetch("/api/befaring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ navn: navn.trim(), telefon: telefon.trim() }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErrorMessage(data.error || "Kunne ikke sende. Prøv igjen.");
        return;
      }
      setSent(true);
    } catch {
      setErrorMessage("Nettverksfeil. Prøv igjen.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md rounded-md border border-border bg-surface p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-lg font-black tracking-tight">
            {sent ? "Takk!" : "Gratis befaring"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-border bg-surface-2 p-2 text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label="Lukk"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {sent ? (
          <div className="mt-4 space-y-4">
            <p className="text-sm leading-7 text-muted">
              Vi har mottatt forespørselen din og tar kontakt for å avtale befaring.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-full items-center justify-center rounded-md bg-accent text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Lukk
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <p className="text-sm text-muted">
              Fyll inn navn og telefon, så kontakter vi deg for å avtale befaring.
            </p>
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-foreground">
                Navn <span className="text-red-600">*</span>
              </span>
              <input
                value={navn}
                onChange={(e) => setNavn(e.target.value)}
                required
                autoComplete="name"
                placeholder="Ditt fulle navn"
                className="h-12 w-full rounded-md border border-border bg-white px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-semibold text-foreground">
                Telefon <span className="text-red-600">*</span>
              </span>
              <input
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                required
                type="tel"
                autoComplete="tel"
                placeholder="+47 …"
                className="h-12 w-full rounded-md border border-border bg-white px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              />
            </label>
            {errorMessage ? (
              <p className="text-sm text-red-600" role="alert">
                {errorMessage}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={!canSubmit || sending}
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              {sending ? "Sender…" : "Kontakt meg for avtale befaring"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

type BefaringLeadButtonProps = {
  children: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;

/**
 * Åpner et vindu (modal) for navn og telefon ved gratis befaring.
 */
export function BefaringLeadButton({
  children,
  className,
  ...rest
}: BefaringLeadButtonProps) {
  const [open, setOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setModalKey((k) => k + 1);
          setOpen(true);
        }}
        {...rest}
      >
        {children}
      </button>
      <BefaringModal
        key={modalKey}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
