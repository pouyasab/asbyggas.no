import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Vilkår og personvern | A.S Bygg AS",
  description:
    "Enkel informasjon om personvern, bruk av data og kontakt ved henvendelser.",
};

export default function TermsPrivacyPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Vilkår og personvern"
            title="Enkel informasjon"
            subtitle="Kort oppsummert – dette er en maltekst og kan tilpasses."
          />

          <div className="mt-10 space-y-8 rounded-md border border-border bg-surface p-7 shadow-sm md:p-10">
            <div className="space-y-2">
              <h2 className="text-lg font-bold tracking-tight">Vilkår for bruk</h2>
              <p className="text-sm leading-7 text-muted">
                Innholdet på nettsiden er ment som generell informasjon om A.S Bygg AS og våre tjenester.
                Vi kan oppdatere teksten uten varsel. Ved spørsmål om konkrete prosjekter eller tilbud, ta kontakt.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold tracking-tight">Personvern (GDPR)</h2>
              <p className="text-sm leading-7 text-muted">
                Når du sender inn et skjema på nettsiden vår, behandler vi
                opplysninger som navn, e-post, telefon og melding for å kunne
                svare deg med informasjon og/eller tilbud. Vi bruker kun
                opplysningene til formålet det ble gitt for.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold">Hvorfor vi behandler data</h3>
              <p className="text-sm leading-7 text-muted">
                Vi behandler personopplysninger for å håndtere henvendelser,
                levere tilbud og eventuelt avtale befaring. Behandlingen skjer
                på bakgrunn av ditt samtykke/forespørsel (og/eller for å
                gjennomføre tiltak før en avtale).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold">Lagring og sikkerhet</h3>
              <p className="text-sm leading-7 text-muted">
                Opplysninger lagres så lenge det er nødvendig for å oppfylle
                formålet. Vi følger rutiner som bidrar til å beskytte
                informasjonen mot uautorisert tilgang, endring eller sletting.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold">Dine rettigheter</h3>
              <p className="text-sm leading-7 text-muted">
                Du har rett til å be om innsyn, retting og sletting, samt rett
                til å gjøre innsigelser og trekke samtykke dersom behandlingen
                bygger på samtykke. For spørsmål knyttet til personvern kan du
                kontakte oss.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold">Kontakt ved henvendelser</h3>
              <p className="text-sm leading-7 text-muted">
                Har du spørsmål om personvern eller vil du utøve dine
                rettigheter, kan du kontakte oss:
              </p>
              <div className="mt-3 flex items-start gap-3 rounded-md border border-border bg-surface-2 p-4 text-sm text-muted">
                <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">info@asbyggas.no</div>
                  <div className="mt-1">Telefon: +47 452 60 384</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-muted">
              Merk: Dette er en enkel mal for å komme i gang. For fullt samsvar
              anbefaler vi å gjennomgå teksten med juridisk rådgiver.
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

