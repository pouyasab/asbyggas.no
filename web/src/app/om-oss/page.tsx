import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Hammer, MapPin, Shield } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Om oss | A.S Bygg AS",
  description:
    "Et lokalt håndverksfirma med fokus på takvask og vedlikehold – jordnært, ærlig og ryddig.",
};

const card =
  "rounded-md border border-border bg-surface shadow-sm";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20">
        <Container>
          {/* Topp: overskrift i egen blokk */}
          <header className="border-b border-border pb-8 md:pb-10">
            <SectionHeading
              eyebrow="Om oss"
              title="Lokalt firma. Godt håndverk."
              subtitle="For oss handler det om å gjøre jobben skikkelig – hver gang."
            />
          </header>

          {/* Rad 1: bilde | innledning (12-kolonne grid) */}
          <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-8 lg:items-stretch">
            <figure className={`${card} overflow-hidden p-0 lg:col-span-5`}>
              <div className="relative aspect-[4/3] w-full bg-surface-2">
                <Image
                  src="/om-oss-tak.png"
                  alt="Håndverker som arbeider med takstein – vedlikehold og kontroll på taket"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>
              <figcaption className="border-t border-border px-5 py-4 text-xs leading-relaxed text-muted">
                Vi jobber ute på taket – med riktig utstyr, god kontroll og respekt for huset ditt.
              </figcaption>
            </figure>

            <div className={`${card} flex flex-col justify-center p-6 md:p-8 lg:col-span-7`}>
              <p className="text-sm leading-8 text-muted sm:text-base">
                Vi er et lokalt firma med fokus på takvask og takvedlikehold.
                Vi møter opp, gjør en ryddig jobb og leverer det vi avtaler.
                Når du bestiller takvask, skal du føle deg trygg på at jobben blir gjort skikkelig.
              </p>
            </div>
          </div>

          {/* Rad 2: tre like verdi-bokser (full bredde) */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {[
              { label: "Kvalitet", icon: Shield },
              { label: "Pålitelighet", icon: CheckCircle2 },
              { label: "Håndverk", icon: Hammer },
            ].map((v) => (
              <div
                key={v.label}
                className={`${card} flex min-h-[88px] items-center gap-3 px-5 py-4 md:px-6`}
              >
                <div className="text-accent">
                  <v.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                </div>
                <div className="text-sm font-black uppercase tracking-wide">{v.label}</div>
              </div>
            ))}
          </div>

          {/* Rad 3: arbeidsmåte | kontakt (samme høyde på stor skjerm) */}
          <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            <div className={`${card} flex flex-col p-6 md:p-8 lg:col-span-8`}>
              <div className="text-sm font-black uppercase tracking-wide text-accent">
                Slik jobber vi
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Enkelt, tydelig og praktisk
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                Vi starter med befaring, forklarer hva som bør gjøres, og gjennomfører arbeidet med riktig utstyr.
                Du får et resultat du kan se – og et tak som varer lenger.
              </p>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {[
                  "Tydelig avtale og forutsigbar plan",
                  "Riktig metode tilpasset taktype og tilstand",
                  "Ryddig arbeidsplass og sluttkontroll",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside
              className={`${card} flex flex-col justify-between p-6 md:p-8 lg:col-span-4`}
            >
              <div>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-accent">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Lokalt og tilgjengelig
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Ta kontakt for en uforpliktende prat og gratis befaring.
                </p>
              </div>
              <Link
                href="/kontakt-oss"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-accent text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:mt-8"
              >
                Gå til kontakt
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
