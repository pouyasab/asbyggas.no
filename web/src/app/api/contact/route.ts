import { NextResponse } from "next/server";
import { getContactInboxTo, sendSiteEmail } from "@/lib/sendgrid-mail";

export const runtime = "nodejs";

type ContactBody = {
  fornavn: string;
  etternavn: string;
  epost: string;
  telefon: string;
  adresse: string;
  melding: string;
  tilbudTakvask: boolean;
  tilbudTakmaling: boolean;
  tilbudTakfornying: boolean;
  tilbudBefaring: boolean;
};

function isContactBody(x: unknown): x is ContactBody {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.fornavn === "string" &&
    typeof o.etternavn === "string" &&
    typeof o.epost === "string" &&
    typeof o.telefon === "string" &&
    typeof o.adresse === "string" &&
    typeof o.melding === "string" &&
    typeof o.tilbudTakvask === "boolean" &&
    typeof o.tilbudTakmaling === "boolean" &&
    typeof o.tilbudTakfornying === "boolean" &&
    typeof o.tilbudBefaring === "boolean"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig JSON" }, { status: 400 });
  }

  if (!isContactBody(body)) {
    return NextResponse.json({ error: "Manglende eller ugyldige felt" }, { status: 400 });
  }

  const {
    fornavn,
    etternavn,
    epost,
    telefon,
    adresse,
    melding,
    tilbudTakvask,
    tilbudTakmaling,
    tilbudTakfornying,
    tilbudBefaring,
  } = body;

  if (
    fornavn.trim().length < 1 ||
    etternavn.trim().length < 1 ||
    !epost.includes("@") ||
    telefon.trim().length < 6 ||
    adresse.trim().length < 3
  ) {
    return NextResponse.json({ error: "Validering feilet" }, { status: 400 });
  }

  const to = getContactInboxTo();

  const tilbud = [
    tilbudTakvask && "Takvask",
    tilbudTakmaling && "Takmaling",
    tilbudTakfornying && "Takfornying",
    tilbudBefaring && "Befaring",
  ].filter(Boolean);

  const text = [
    `Ny henvendelse fra nettsiden`,
    ``,
    `Navn: ${fornavn} ${etternavn}`,
    `Epost: ${epost}`,
    `Telefon: ${telefon}`,
    `Adresse: ${adresse}`,
    ``,
    `Melding:`,
    melding || "(ingen)",
    ``,
    `Ønsket tilbud: ${tilbud.length ? tilbud.join(", ") : "Ikke krysset av"}`,
  ].join("\n");

  const html = `<pre style="font-family:sans-serif;white-space:pre-wrap">${text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>`;

  const result = await sendSiteEmail({
    to,
    replyTo: epost,
    subject: `Nettside: henvendelse fra ${fornavn} ${etternavn}`,
    text,
    html,
  });

  if ("error" in result) {
    const status = result.error.includes("mangler") ? 500 : 502;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ ok: true });
}
