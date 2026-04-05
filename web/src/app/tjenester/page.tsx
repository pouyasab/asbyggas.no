import type { Metadata } from "next";
import { CheckCircle2, Droplets, Hammer, Paintbrush, Shield, Wrench } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Våre tjenester | A.S Bygg AS",
  description:
    "Praktiske tjenester innen takvask og takvedlikehold. Kort forklart: slik jobben gjøres.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Våre tjenester"
            title="Takvask og vedlikehold: jobben gjort skikkelig"
            subtitle={
              <>
                Vi presenterer tjenestene slik de faktisk utføres: kort, praktisk og
                uten salgspynt.
              </>
            }
          />

          <div className="mt-10 grid gap-6">
            <section className="rounded-md border border-border bg-surface p-7 shadow-sm md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-white">
                  <Droplets className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Takvask</h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    Takvask handler om å fjerne mose, alger og smuss på en skånsom måte, uten å skade takstein eller overflater.
                    Riktig vask gir bedre utseende og kan forebygge unødvendig slitasje.
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {[
                      "Fjerning av mose og alger",
                      "Skånsom høytrykksvask der det er riktig",
                      "Miljøvennlige midler",
                      "Forebygger skader og fuktproblemer",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-border bg-surface p-7 shadow-sm md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-white">
                  <Hammer className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Takfornying</h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    Takfornying er en praktisk jobb der vi tar tak i slitasje før det blir et større problem.
                    Vi vurderer tilstand, gjør nødvendig rens, utbedrer mindre skader og anbefaler riktig behandling videre.
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {[
                      "Inspeksjon og tilstandsvurdering",
                      "Rens og klargjøring",
                      "Mindre utbedringer der det trengs",
                      "Behandling/impregnering etter behov",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-border bg-surface p-7 shadow-sm md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-white">
                  <Wrench className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Vedlikehold</h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    Vedlikehold handler om å forebygge. Små tiltak i tide kan spare deg for store kostnader senere.
                    Vi ser etter typiske problemområder og hjelper deg å holde taket i god stand.
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {[
                      "Kontroll av tak og synlige gjennomføringer",
                      "Rens av problemområder",
                      "Fjerning av mose på utsatte flater",
                      "Råd om videre tiltak og intervall",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-border bg-surface p-7 shadow-sm md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-white">
                  <Paintbrush className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Maling (tak og hus)</h2>
                  <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                    Når underlaget er riktig klargjort, kan maling gi et tydelig løft.
                    Vi er nøye på forarbeid og produktvalg, slik at resultatet holder.
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
                    {[
                      "Klargjøring og vask før maling",
                      "Reparasjon av mindre skader",
                      "Maling tilpasset norsk klima",
                      "Ryddig gjennomføring og sluttkontroll",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="rounded-md border border-border bg-surface-2 p-6">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-accent">
                <Shield className="h-4 w-4" aria-hidden="true" />
                Viktig
              </div>
              <p className="mt-2 text-sm leading-7 text-muted">
                Metode og trykk tilpasses taktype og tilstand. Vi tar ikke tilnærmingen der én løsning skal passe alle.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

