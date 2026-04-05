import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/Container";

const footerLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Våre tjenester" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt-oss", label: "Kontakt oss" },
  { href: "/generelle-vilkaar", label: "Generelle vilkår" },
  { href: "/vilkaar-og-personvern", label: "Vilkår og personvern" },
] as const;

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
              {footerLinks.map((l) => (
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

