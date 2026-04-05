"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  fornavn: string;
  etternavn: string;
  epost: string;
  telefon: string;
  adresse: string;
  melding: string;
  tilbudTakvask: boolean;
  tilbudTakmaling: boolean;
  tilbudTakfornying: boolean;
  tilbudBefaring: boolean;
};

const empty: FormState = {
  fornavn: "",
  etternavn: "",
  epost: "",
  telefon: "",
  adresse: "",
  melding: "",
  tilbudTakvask: false,
  tilbudTakmaling: false,
  tilbudTakfornying: false,
  tilbudBefaring: false,
};

const inputClass =
  "h-12 w-full rounded-md border border-border bg-white px-4 text-sm text-foreground outline-none transition-shadow placeholder:text-muted focus-visible:ring-2 focus-visible:ring-accent/40";

const labelClass = "block text-sm font-semibold text-foreground";

function RequiredMark() {
  return (
    <span className="text-red-600" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const isValid = useMemo(() => {
    return (
      form.fornavn.trim().length >= 1 &&
      form.etternavn.trim().length >= 1 &&
      form.epost.includes("@") &&
      form.telefon.trim().length >= 6 &&
      form.adresse.trim().length >= 3
    );
  }, [form]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sent");
  }

  return (
    <div className="rounded-md border border-border bg-surface p-6 shadow-sm md:p-8">
      {status === "sent" ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-accent">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Takk! Henvendelsen er sendt.
          </div>
          <p className="text-sm leading-7 text-muted">
            Denne malen lagrer ikke innsendte data. Koble til backend eller e-postsending når du er klar.
          </p>
          <button
            type="button"
            onClick={() => {
              setForm(empty);
              setStatus("idle");
            }}
            className="mt-4 inline-flex h-12 items-center justify-center rounded-md border border-border bg-surface-2 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            Send en ny henvendelse
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Navn – to felt */}
          <div className="space-y-2">
            <span className={labelClass}>
              Navn
              <RequiredMark />
            </span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                value={form.fornavn}
                onChange={(e) => setForm((f) => ({ ...f, fornavn: e.target.value }))}
                required
                autoComplete="given-name"
                placeholder="Fornavn"
                className={inputClass}
                aria-label="Fornavn"
              />
              <input
                value={form.etternavn}
                onChange={(e) => setForm((f) => ({ ...f, etternavn: e.target.value }))}
                required
                autoComplete="family-name"
                placeholder="Etternavn"
                className={inputClass}
                aria-label="Etternavn"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className={labelClass}>
                E-post
                <RequiredMark />
              </span>
              <input
                value={form.epost}
                onChange={(e) => setForm((f) => ({ ...f, epost: e.target.value }))}
                required
                type="email"
                autoComplete="email"
                placeholder="navn@eksempel.no"
                className={inputClass}
              />
            </label>

            <label className="block space-y-2">
              <span className={labelClass}>
                Telefon
                <RequiredMark />
              </span>
              <input
                value={form.telefon}
                onChange={(e) => setForm((f) => ({ ...f, telefon: e.target.value }))}
                required
                type="tel"
                autoComplete="tel"
                placeholder="+47 …"
                className={inputClass}
              />
            </label>
          </div>

          <label className="block space-y-2">
            <span className={labelClass}>
              Adresse
              <RequiredMark />
            </span>
            <input
              value={form.adresse}
              onChange={(e) => setForm((f) => ({ ...f, adresse: e.target.value }))}
              required
              autoComplete="street-address"
              placeholder="Gateadresse, postnummer og sted"
              className={inputClass}
            />
          </label>

          <label className="block space-y-2">
            <span className={labelClass}>Hva kan vi hjelpe deg med?</span>
            <textarea
              value={form.melding}
              onChange={(e) => setForm((f) => ({ ...f, melding: e.target.value }))}
              placeholder="Skriv gjerne kort om taket ditt eller spørsmålet ditt."
              rows={5}
              className="w-full resize-y rounded-md border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted focus-visible:ring-2 focus-visible:ring-accent/40"
            />
          </label>

          <fieldset className="space-y-3">
            <legend className={`${labelClass} mb-1`}>Ønsker du et tilbud?</legend>
            {[
              {
                key: "tilbudTakvask" as const,
                label: "Ønsker tilbud på takvask",
              },
              {
                key: "tilbudTakmaling" as const,
                label: "Ønsker tilbud på takmaling",
              },
              {
                key: "tilbudTakfornying" as const,
                label: "Ønsker tilbud på takfornying",
              },
              {
                key: "tilbudBefaring" as const,
                label: "Ønsker et uforpliktende befaring",
              },
            ].map(({ key, label }) => (
              <label
                key={key}
                className="flex cursor-pointer items-start gap-3 text-sm text-foreground"
              >
                <input
                  type="checkbox"
                  checked={form[key]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [key]: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 shrink-0 rounded border-border text-accent focus-visible:ring-2 focus-visible:ring-accent/40"
                />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>

          <p className="text-xs text-muted">
            Ved innsending godtar du at vi kan bruke opplysningene til å svare deg.
          </p>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className="inline-flex h-11 min-w-[120px] items-center justify-center rounded-md border border-border bg-surface-2 px-8 text-sm font-semibold text-foreground transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
