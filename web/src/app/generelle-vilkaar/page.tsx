import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Generelle vilkår | A.S Bygg AS",
  description:
    "Generelle vilkår for A.S Bygg AS – tilbud, priser, omfang, HMS, fakturering og personvern.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <h2 className="text-lg font-black uppercase tracking-wide text-accent">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}

export default function GenerelleVilkaarPage() {
  return (
    <div className="bg-background">
      <article className="py-12 md:py-20">
        <Container>
          <header className="border-b border-border pb-8 md:pb-10">
            <p className="text-sm font-black uppercase tracking-wide text-accent">Juridisk</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Generelle vilkår for A.S Bygg AS
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Nedenfor finner du våre generelle vilkår. Ved avvik gjelder det som er særskilt avtalt skriftlig.
            </p>
          </header>

          <div className="mx-auto mt-10 max-w-3xl space-y-10 md:mt-12 md:space-y-12">
            <Section title="Tilbud og pris">
              <p>
                Vårt tilbud er gyldig i 2 måneder med mindre annet er avtalt, og inkluderer MVA. Aksept av tilbud
                med fast frekvens regnes som en løpende avtale, med én ukes oppsigelsestid for privatkunder og 30
                dager for næringskunder. Dersom det blir nødvendig å benytte stillas eller lift under oppdraget, vil
                kostnaden komme i tillegg og legges til på fakturaen.
              </p>
            </Section>

            <Section title="Standardpriser for tjenester">
              <p>Følgende veiledende enhetspriser gjelder dersom annet ikke er avtalt i tilbudet:</p>
              <ul className="list-inside list-disc space-y-2 pl-1">
                <li>Takvask: kr 110,- per m² eks. mva</li>
                <li>Impregnering av tak: kr 35,- per m² eks. mva</li>
                <li>Takmaling: kr 25,- per m² eks. mva</li>
              </ul>
              <p className="pt-2">
                I tillegg påløper oppmøtekostnad på kr 2 000,- inkl. mva per oppdrag.
              </p>
            </Section>

            <Section title="Omfang og utførelse">
              <p>
                Arbeidet utføres av A.S Bygg AS, enten med egne ansatte eller underleverandører. Avtalen spesifiserer
                oppdragets omfang, og eventuelle tilleggstjenester faktureres separat. Kunden må rydde og klargjøre
                området før arbeidet starter, samt informere om spesielle forhold som kan påvirke arbeidet (som
                solfilm eller vannfølsomme installasjoner).
              </p>
            </Section>

            <Section title="Materialer">
              <p>
                Forbruk av materialer kommer i tillegg til oppgitte priser dersom annet ikke er avtalt. Kunden kan også
                velge å kjøpe materialer selv, forutsatt at disse er egnet for arbeidet og godkjennes av A.S Bygg AS
                før oppstart.
              </p>
            </Section>

            <Section title="HMS og sikkerhet">
              <p>
                Vi følger strenge helse-, miljø- og sikkerhetskrav (HMS). Alle ansatte er opplært i henhold til
                lovpålagte krav, og vi benytter kun godkjent utstyr og kjemikalier for å minimere risiko.
              </p>
            </Section>

            <Section title="Forsikring">
              <p>
                A.S Bygg AS har ansvarsforsikring som dekker skader på tredjepart. Vi sørger for at alt nødvendig
                forsikringsdekning er på plass.
              </p>
            </Section>

            <Section title="Utførelse av arbeid">
              <p>
                Arbeidet skjer normalt mellom 07:00 og 18:00, med mulighet for utvidede tider ved behov. Vi er
                tilgjengelige hele året, men værforhold kan påvirke tidsplanen. Ved spesifikke ønsker for tidspunkt kan
                ekstra kostnader for kjøring påløpe.
              </p>
            </Section>

            <Section title="Prisjustering">
              <p>
                Prisene kan justeres ved vesentlige endringer i omfang, kostnader eller feil i oppdraget. For løpende
                avtaler skjer årlig prisjustering basert på konsumprisindeks (KPI).
              </p>
            </Section>

            <Section title="Oppsigelse av avtale">
              <p>
                Oppsigelse må skje skriftlig via e-post, med 30 dagers oppsigelsestid før neste planlagte utførelse.
                Begge parter kan si opp avtalen, men ved vesentlige misforhold eller betalingsproblemer forbeholder vi
                oss retten til å avslutte oppdraget med umiddelbar virkning.
              </p>
            </Section>

            <Section title="Reklamasjon">
              <p>
                Reklamasjoner må gjøres innen 7 dager etter utført oppdrag. Vi forbeholder oss retten til å rette opp
                eventuelle feil eller mangler ved oppdraget.
              </p>
            </Section>

            <Section title="Fakturering og betaling">
              <p>
                Alle fakturaer har 14 dagers betalingsfrist, med mulighet for EHF, e-post eller post. Ved forsinket
                betaling påløper purregebyr og renter etter gjeldende lov. Dersom det blir nødvendig å benytte stillas
                eller lift under oppdraget, vil kostnaden komme i tillegg og legges til på fakturaen.
              </p>
            </Section>

            <Section title="Bestilling og kampanjer">
              <p>
                Bestilling skjer via nett, telefon eller e-post, og forplikter kunden til å gi korrekt informasjon. Vi
                tilbyr også spesialtilbud og kampanjer for nye kunder og bestemte tjenester.
              </p>
            </Section>

            <Section title="Personvern">
              <p>
                Vi behandler personopplysninger i samsvar med GDPR. Vi deler ikke dine data med tredjepart uten ditt
                samtykke og lagrer kun nødvendige opplysninger så lenge det er lovpålagt eller for å kunne tilby deg
                våre tjenester. Du har rett til å be om innsyn, korrigering eller sletting av dine data.
              </p>
            </Section>

            <Section title="Løpende avtaler">
              <p>
                Løpende avtaler uten spesifisert varighet fortsetter til de sies opp. Dersom avtalen avsluttes etter én
                utførelse, påløper et pristillegg på 30 %.
              </p>
            </Section>

            <p className="border-t border-border pt-8 text-xs text-muted">
              Ved spørsmål om vilkårene, ta kontakt via opplysningene på{" "}
              <Link href="/kontakt-oss" className="font-semibold text-accent underline underline-offset-2">
                kontaktsiden
              </Link>
              .
            </p>
          </div>
        </Container>
      </article>
    </div>
  );
}
