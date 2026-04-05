"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import Container from "@/components/Container";
import { BefaringLeadButton } from "@/components/BefaringLeadButton";
import { legalSiteNavLinks, primarySiteNavLinks, vilkaarPersonvernSubmenu } from "@/lib/site-links";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isLegalRoute(pathname: string) {
  return legalSiteNavLinks.some((l) => isActive(pathname, l.href));
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [legalDropdownOpen, setLegalDropdownOpen] = useState(false);
  const [legalMobileExpanded, setLegalMobileExpanded] = useState(false);
  const legalDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setLegalDropdownOpen(false);
    setLegalMobileExpanded(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) setLegalMobileExpanded(false);
  }, [open]);

  useEffect(() => {
    if (!legalDropdownOpen) return;
    function onDoc(e: MouseEvent) {
      if (!legalDropdownRef.current?.contains(e.target as Node)) setLegalDropdownOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLegalDropdownOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [legalDropdownOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="hidden border-b border-border bg-surface-2 md:block">
        <Container>
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+4745260384"
                className="inline-flex items-center gap-2 font-black text-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                +47 452 60 384
              </a>
              <a
                href="mailto:info@asbyggas.no"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                info@asbyggas.no
              </a>
            </div>
            <div className="text-muted">Gratis befaring • Ryddig arbeid • Norsk klima</div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 py-2 sm:min-h-20 sm:py-2.5">
          <Link
            href="/"
            className="inline-flex max-w-[min(100%,320px)] shrink-0 items-center rounded-md bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:max-w-[min(100%,420px)] md:max-w-[min(100%,480px)]"
            aria-label="A.S Bygg AS, hjem"
          >
            <Image
              src="/logo-asbygg.png"
              alt="A.S Bygg AS"
              width={768}
              height={368}
              className="h-12 w-auto bg-transparent object-contain object-left sm:h-14 md:h-16"
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
            />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-2 md:flex lg:gap-x-5"
            aria-label="Hovedmeny"
          >
            {primarySiteNavLinks.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "text-sm font-black uppercase tracking-wide transition-colors",
                    active ? "text-foreground" : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}

            <div className="relative border-l border-border pl-3 lg:pl-5" ref={legalDropdownRef}>
              <button
                type="button"
                className={[
                  "inline-flex items-center gap-1 text-sm font-black uppercase tracking-wide transition-colors",
                  isLegalRoute(pathname) || legalDropdownOpen
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                ].join(" ")}
                aria-expanded={legalDropdownOpen}
                aria-haspopup="true"
                aria-controls="vilkaar-submenu-desktop"
                id="vilkaar-submenu-button"
                onClick={() => setLegalDropdownOpen((v) => !v)}
              >
                {vilkaarPersonvernSubmenu.label}
                <ChevronDown
                  className={["h-4 w-4 shrink-0 transition-transform", legalDropdownOpen ? "rotate-180" : ""].join(
                    " ",
                  )}
                  aria-hidden="true"
                />
              </button>
              {legalDropdownOpen ? (
                <div
                  id="vilkaar-submenu-desktop"
                  role="menu"
                  aria-labelledby="vilkaar-submenu-button"
                  className="absolute left-0 top-full z-[60] mt-2 min-w-[14rem] rounded-md border border-border bg-surface py-1 shadow-lg"
                >
                  {legalSiteNavLinks.map((l) => {
                    const active = isActive(pathname, l.href);
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        role="menuitem"
                        className={[
                          "block px-4 py-2.5 text-sm font-black uppercase tracking-wide transition-colors",
                          active ? "bg-surface-2 text-foreground" : "text-muted hover:bg-surface-2 hover:text-foreground",
                        ].join(" ")}
                        onClick={() => setLegalDropdownOpen(false)}
                      >
                        {l.label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <BefaringLeadButton className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-black text-white uppercase tracking-wide transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
              Få gratis befaring
            </BefaringLeadButton>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              aria-label={open ? "Lukk meny" : "Åpne meny"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="pb-5 md:hidden">
            <div className="mt-4 grid gap-2 rounded-md border border-border bg-surface p-3">
              {primarySiteNavLinks.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={[
                      "flex items-center justify-between rounded-md px-3 py-3 text-sm font-black uppercase tracking-wide transition-colors",
                      active
                        ? "bg-surface-2 text-foreground"
                        : "text-muted hover:text-foreground hover:bg-surface-2",
                    ].join(" ")}
                  >
                    <span>{l.label}</span>
                    <span className="text-muted">›</span>
                  </Link>
                );
              })}

              <div className="mt-1 border-t border-border pt-2">
                <button
                  type="button"
                  className={[
                    "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-black uppercase tracking-wide transition-colors",
                    isLegalRoute(pathname) || legalMobileExpanded
                      ? "bg-surface-2 text-foreground"
                      : "text-muted hover:bg-surface-2 hover:text-foreground",
                  ].join(" ")}
                  aria-expanded={legalMobileExpanded}
                  aria-controls="vilkaar-submenu-mobile"
                  id="vilkaar-submenu-mobile-button"
                  onClick={() => setLegalMobileExpanded((v) => !v)}
                >
                  <span>{vilkaarPersonvernSubmenu.label}</span>
                  <ChevronDown
                    className={["h-5 w-5 shrink-0 text-muted transition-transform", legalMobileExpanded ? "rotate-180" : ""].join(
                      " ",
                    )}
                    aria-hidden="true"
                  />
                </button>
                {legalMobileExpanded ? (
                  <div id="vilkaar-submenu-mobile" className="border-t border-border bg-surface-2/50" role="group">
                    {legalSiteNavLinks.map((l) => {
                      const active = isActive(pathname, l.href);
                      return (
                        <Link
                          key={l.href}
                          href={l.href}
                          className={[
                            "flex items-center justify-between border-l-2 border-accent/40 py-3 pl-4 pr-3 text-sm font-black uppercase tracking-wide transition-colors",
                            active
                              ? "bg-surface-2 text-foreground"
                              : "text-muted hover:text-foreground hover:bg-surface-2",
                          ].join(" ")}
                        >
                          <span>{l.label}</span>
                          <span className="text-muted">›</span>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>

              <BefaringLeadButton className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-accent text-sm font-black text-white uppercase tracking-wide transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40">
                Bestill gratis befaring
              </BefaringLeadButton>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

