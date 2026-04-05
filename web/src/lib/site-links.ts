/** Felles lenker for navigasjon og footer (samme rekkefølge og tekster). */
export const siteNavLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Våre tjenester" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt-oss", label: "Kontakt oss" },
  { href: "/generelle-vilkaar", label: "Generelle vilkår" },
  { href: "/vilkaar-og-personvern", label: "Personvern" },
] as const;

export const primarySiteNavLinks = siteNavLinks.slice(0, 5);
export const legalSiteNavLinks = siteNavLinks.slice(5, 7);
