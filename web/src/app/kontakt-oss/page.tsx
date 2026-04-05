import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { BefaringLeadButton } from "@/components/BefaringLeadButton";

export const metadata: Metadata = {
  title: "Kontakt oss | A.S Bygg AS",
  description:
    "Kontakt A.S Bygg AS for takvask. Telefonnummer synlig og enkelt kontaktskjema.",
};

const card = "rounded-md border border-border bg-surface shadow-sm";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="pb-12 pt-12 md:pb-20 md:pt-12">
        <Container>
          {/* 1. Telefon-stripe */}
          <div
            className={`${card} mb-8 flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:gap-8`}
          >
            <div>
              <div className="text-sm font-black uppercase tracking-wide text-accent">
                Ring oss for gratis befaring
              </div>
              <div className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
                <a
                  href="tel:+4745260384"
                  className="underline decoration-border underline-offset-4"
                >
                  +47 452 60 384
                </a>
              </div>
              <div className="mt-2 text-sm text-muted">
                Svar så raskt vi kan. Du kan også sende skjemaet under.
              </div>
            </div>
            <div className="shrink-0">
              <BefaringLeadButton className="inline-flex h-12 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:w-auto">
                Bestill gratis befaring
              </BefaringLeadButton>
            </div>
          </div>

          {/* 2. Stort bilde (full bredde i container) */}
          <figure className={`${card} mb-10 overflow-hidden p-0 md:mb-12`}>
            <div className="relative w-full bg-surface-2 aspect-[3/2] min-h-[240px] sm:aspect-[16/7] sm:min-h-[300px] md:min-h-[380px] lg:aspect-[21/9] lg:min-h-[420px]">
              <Image
                src="/kontakt-takvask.png"
                alt="Takvask med høytrykk – profesjonelt arbeid på tak med sikkerhetsutstyr"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
            </div>
            <figcaption className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted md:px-8 md:py-5">
              Vi utfører takvask ute på taket – med riktig utstyr, sikkerhet og ryddig gjennomføring.
            </figcaption>
          </figure>

          {/* 3. Overskrift + kontaktinfo + hva skjer (over skjema) */}
          <div className="border-b border-border pb-10 md:pb-12">
            <SectionHeading
              eyebrow="Kontakt oss"
              title="Enkelt og direkte"
              subtitle="Send oss en kort melding om taket ditt, så avtaler vi befaring."
            />

            <div className={`${card} mt-8 p-6 md:p-8`}>
              <div className="text-sm font-black uppercase tracking-wide text-accent">Kontaktinfo</div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
                <div className="flex items-start gap-3 rounded-md border border-border bg-surface-2 p-4 text-sm text-muted">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>Telefon: +47 452 60 384</span>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-border bg-surface-2 p-4 text-sm text-muted">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>E-post: info@asbyggas.no</span>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-border bg-surface-2 p-4 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>Adresse: Krokstadelva, Drammen</span>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-md border border-border bg-surface-2 p-4 text-sm text-muted">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-foreground">Åpningstider</div>
                  <div className="mt-1">Mandag – fredag</div>
                  <div>08:00 – 16:00</div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted">
                Du finner oss i Buskerud, men vi opererer i hele Viken-området.
                Kontakt oss gjerne for å avtale et møte eller for å få et uforpliktende tilbud på dine
                takprosjekter. Vi ser frem til å høre fra deg!
              </p>

              <div className="mt-6 rounded-md border border-border bg-surface-2 p-5 text-sm md:p-6">
                <div className="font-black uppercase tracking-wide">Hva skjer etterpå?</div>
                <p className="mt-2 text-muted">
                  Vi tar en rask prat, avtaler befaring, og gir deg en konkret anbefaling basert på taktype og
                  tilstand.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Kontaktskjema – samme bredde som kontaktinfo-boksen over (full bredde i container) */}
          <div className="mt-10 w-full md:mt-12">
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
