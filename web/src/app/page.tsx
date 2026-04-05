import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Droplets,
  Leaf,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";
import Container from "@/components/Container";
import { BefaringLeadButton } from "@/components/BefaringLeadButton";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Hjem | A.S Bygg AS",
  description:
    "Profesjonell takvask som forlenger levetiden på taket ditt. Vi fjerner mose, alger og smuss, og gir taket nytt liv.",
};

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero: ekte foto, cover over hele bredden */}
      <section
        className="relative isolate min-h-[min(88vh,760px)] sm:min-h-[min(80vh,700px)]"
        aria-label="Tak og fasade"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-takvask.png')" }}
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-black/72 via-black/52 to-black/48"
          aria-hidden="true"
        />

        <div className="relative pb-14 pt-10 md:pb-20 md:pt-14">
          <Container>
            <div className="max-w-3xl rounded-xl bg-black/25 px-4 py-6 shadow-[0_12px_48px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-[1px] sm:px-6 sm:py-7">
              <div className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-black uppercase tracking-wide text-white shadow-md">
                <Droplets className="h-4 w-4" aria-hidden="true" />
                Takvask • Vedlikehold
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-[#f4f1e8] sm:text-5xl md:text-6xl [text-shadow:0_2px_24px_rgba(0,0,0,0.92),0_1px_3px_rgba(0,0,0,0.95)]">
                Profesjonell takvask som forlenger levetiden på taket ditt
              </h1>
              <p className="mt-4 text-lg leading-8 text-[#e8e4d9] sm:text-xl [text-shadow:0_2px_16px_rgba(0,0,0,0.88),0_1px_2px_rgba(0,0,0,0.9)]">
                Vi fjerner mose, alger og smuss, og gir taket ditt nytt liv.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BefaringLeadButton className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-black uppercase tracking-wide text-white shadow-md transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
                  Få gratis befaring
                </BefaringLeadButton>
                <Link
                  href="/kontakt-oss"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-[#f4f1e8]/35 bg-black/25 px-6 text-sm font-black uppercase tracking-wide text-[#f4f1e8] shadow-md transition-colors hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 [text-shadow:0_1px_8px_rgba(0,0,0,0.75)]"
                >
                  Kontakt oss
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Shield, title: "Solid utførelse", text: "Jobben gjøres skikkelig, hver gang." },
                  { icon: Leaf, title: "Skånsomt", text: "Metoder og midler som tar hensyn." },
                  { icon: Sparkles, title: "Synlig resultat", text: "Renere tak og bedre helhetsinntrykk." },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="rounded-md border border-white/20 bg-black/35 p-4 shadow-md backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#f4f1e8] [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]">
                      <b.icon className="h-4 w-4" aria-hidden="true" />
                      {b.title}
                    </div>
                    <div className="mt-2 text-sm text-[#e4dfd4] [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                      {b.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Hva vi gjør */}
      <section className="py-14 md:py-18">
        <Container>
          <SectionHeading
            eyebrow="Hva vi gjør"
            title="Praktiske tjenester for tak og fasade"
            subtitle="Kort og konkret: dette er jobben vi gjør ute hos kunder."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { title: "Takvask", text: "Fjerner mose, alger og smuss." },
              { title: "Takfornying", text: "Behandling som forlenger levetid." },
              { title: "Vedlikehold", text: "Forebygger skader og lekkasjer." },
              { title: "Maling av tak og hus", text: "Når underlaget er klart." },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-md border border-border bg-surface p-6 shadow-sm"
              >
                <div className="text-sm font-black uppercase tracking-wide">{c.title}</div>
                <p className="mt-2 text-sm leading-7 text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hvorfor velge oss */}
      <section className="py-14 md:py-18">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-10 lg:gap-12">
            <div className="flex min-h-0 flex-col gap-6 md:h-full md:gap-8">
              <div className="shrink-0">
                <SectionHeading
                  eyebrow="Hvorfor velge oss"
                  title="Ryddig arbeid. Riktig utstyr. Norsk klima."
                  subtitle="Vi møter opp når vi skal, jobber effektivt og leverer et resultat du kan se."
                />
              </div>
              <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface-2 shadow-sm md:aspect-auto md:min-h-0 md:flex-1">
                <div className="absolute inset-0">
                  <Image
                    src="/hvorfor-velge-oss.png"
                    alt="Håndverker med verneutstyr ved tak med teglstein"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </figure>
            </div>

            <ul className="flex min-h-0 list-none flex-col gap-3 md:h-full md:gap-4">
              {[
                { title: "Erfaring", text: "Vi vet hva som fungerer på norske tak." },
                { title: "Kvalitetsutstyr", text: "Riktig trykk og riktig metode, uten å skade taket." },
                { title: "Tilpasset norsk klima", text: "Behandling som tåler fukt, frost og vær." },
                { title: "Pålitelig service", text: "Tydelig avtale, ryddig gjennomføring." },
              ].map((r) => (
                <li
                  key={r.title}
                  className="flex flex-1 flex-col justify-center rounded-md border border-border bg-surface px-5 py-4 shadow-sm md:px-6 md:py-5"
                >
                  <div className="text-sm font-black uppercase tracking-wide text-accent">{r.title}</div>
                  <p className="mt-2 text-sm leading-7 text-muted">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Hvordan vi jobber */}
      <section className="py-14 md:py-18">
        <Container>
          <SectionHeading
            eyebrow="Hvordan vi jobber"
            title="Steg for steg: slik får du et rent tak"
            subtitle="En enkel prosess som gir forutsigbarhet og trygghet."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { n: "1", title: "Befaring", text: "Vi ser på taket, tilstand og behov." },
              { n: "2", title: "Rengjøring", text: "Mose/alger fjernes med skånsom vask." },
              { n: "3", title: "Behandling", text: "Forebyggende behandling ved behov." },
              { n: "4", title: "Ferdig resultat", text: "Du får et tak som ser bedre ut og varer lenger." },
            ].map((s) => (
              <div key={s.n} className="rounded-md border border-border bg-surface p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-white font-black">
                    {s.n}
                  </div>
                  <div className="text-sm font-black uppercase tracking-wide">{s.title}</div>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Før / etter */}
      <section className="py-14 md:py-18">
        <Container>
          <SectionHeading
            eyebrow="Før og etter"
            title="Synlig forskjell"
            subtitle="Ekte resultater fra takvask, før og etter."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col rounded-md border border-border bg-surface p-6 shadow-sm">
              <div className="text-sm font-black uppercase tracking-wide">Før</div>
              <div className="relative mt-3 w-full flex-1 overflow-hidden rounded-md border border-border bg-surface-2">
                <div className="relative mx-auto aspect-[3/4] max-h-[520px] w-full max-w-md">
                  <Image
                    src="/for-etter-for.png"
                    alt="Tak før takvask: mose, alger og smuss på takstein"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">
                Slik kan et tak se ut før vask: mose, alger og smuss som bør fjernes.
              </p>
            </div>
            <div className="flex flex-col rounded-md border border-border bg-surface p-6 shadow-sm">
              <div className="text-sm font-black uppercase tracking-wide">Etter</div>
              <div className="relative mt-3 w-full flex-1 overflow-hidden rounded-md border border-border bg-surface-2">
                <div className="relative mx-auto aspect-[3/4] max-h-[520px] w-full max-w-md">
                  <Image
                    src="/for-etter-etter.png"
                    alt="Tak etter takvask: rent og godt vedlikeholdt"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">
                Etter vask og behandling: renere overflate og bedre beskyttelse mot videre vekst.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-18">
        <Container>
          <div className="rounded-md border border-border bg-surface p-8 shadow-sm md:flex md:items-center md:justify-between md:gap-10">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-accent">
                <ClipboardList className="h-4 w-4" aria-hidden="true" />
                Klar for befaring?
              </div>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Bestill gratis befaring, så finner vi riktig løsning.
              </h2>
              <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                Ring oss eller send en kort melding. Vi svarer så raskt vi kan.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
              <BefaringLeadButton className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:min-w-[220px]">
                Bestill gratis befaring
              </BefaringLeadButton>
              <a
                href="tel:+4745260384"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface-2 px-6 text-sm font-black uppercase tracking-wide text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ring nå
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
