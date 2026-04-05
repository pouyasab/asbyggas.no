/** Felles lenker for navigasjon og footer (samme rekkefølge og tekster). */
export const siteNavLinks = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Våre tjenester" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt-oss", label: "Kontakt oss" },
  { href: "/generelle-vilkaar", label: "Generelle vilkår" },
  { href: "/vilkaar-og-personvern", label: "Personvern" },
] as const;

/** Toppnivå i hovedmenyen (før undermenyen «Vilkår og personvern»). */
export const primarySiteNavLinks = siteNavLinks.slice(0, 4);

export const legalSiteNavLinks = siteNavLinks.slice(4, 6);

/** Undermeny: vises ved klikk på «Vilkår og personvern». */
export const vilkaarPersonvernSubmenu = {
  label: "Vilkår og personvern",
  links: legalSiteNavLinks,
} as const;
