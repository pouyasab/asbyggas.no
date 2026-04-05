import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";
import { legalSiteNavLinks, primarySiteNavLinks, vilkaarPersonvernSubmenu } from "@/lib/site-links";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-base font-black tracking-tight">A.S Bygg AS</div>
            <p className="text-sm text-muted">Takvask og takvedlikehold.</p>
            <p className="text-xs text-muted">
              © {year} A.S Bygg AS. Alle rettigheter reservert.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-black uppercase tracking-wide">Lenker</div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {primarySiteNavLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="border-t border-border pt-3"
              role="group"
              aria-label={vilkaarPersonvernSubmenu.label}
            >
              <p className="mb-2 text-xs font-black uppercase tracking-wide text-muted">
                {vilkaarPersonvernSubmenu.label}
              </p>
              <ul className="space-y-2">
                {legalSiteNavLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-black uppercase tracking-wide">Kontakt</div>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>Telefon: +47 452 60 384</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>Epost: info@asbyggas.no</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>Adresse: Krokstadelva, Drammen</span>
              </div>
              <div className="pt-1 text-xs leading-relaxed">
                <span className="font-semibold text-foreground">Åpningstider:</span> mandag til fredag,{" "}
                08:00 til 16:00
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

