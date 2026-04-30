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

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

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

  const safeNavn = escapeHtml(`${fornavn} ${etternavn}`);
  const safeEpost = escapeHtml(epost);
  const safeTelefon = escapeHtml(telefon);
  const safeAdresse = escapeHtml(adresse);
  const safeMelding = escapeHtml(melding || "(ingen)").replace(/\n/g, "<br />");
  const tilbudHtml = tilbud.length
    ? tilbud
        .map(
          (item) =>
            `<span style="display:inline-block;margin:4px 6px 0 0;padding:6px 10px;border-radius:999px;background:#e8f3ec;color:#1f6b43;font-size:12px;font-weight:700;">${escapeHtml(item)}</span>`,
        )
        .join("")
    : `<span style="color:#6b7280;">Ikke krysset av</span>`;

  const html = `
  <div style="background:#f3f4f6;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111827;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="padding:18px 22px;background:#1f6b43;color:#ffffff;">
        <div style="font-size:18px;font-weight:700;">Ny henvendelse fra nettsiden</div>
        <div style="font-size:13px;opacity:0.9;margin-top:4px;">Sendt via kontaktskjema på asbyggas.no</div>
      </div>
      <div style="padding:20px 22px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
          <tr><td style="padding:7px 0;color:#6b7280;width:140px;">Navn</td><td style="padding:7px 0;font-weight:600;">${safeNavn}</td></tr>
          <tr><td style="padding:7px 0;color:#6b7280;">E-post</td><td style="padding:7px 0;"><a href="mailto:${safeEpost}" style="color:#1f6b43;text-decoration:none;">${safeEpost}</a></td></tr>
          <tr><td style="padding:7px 0;color:#6b7280;">Telefon</td><td style="padding:7px 0;">${safeTelefon}</td></tr>
          <tr><td style="padding:7px 0;color:#6b7280;">Adresse</td><td style="padding:7px 0;">${safeAdresse}</td></tr>
        </table>

        <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb;">
          <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">Melding</div>
          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:12px;line-height:1.5;">${safeMelding}</div>
        </div>

        <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb;">
          <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">Ønsket tilbud</div>
          <div>${tilbudHtml}</div>
        </div>
      </div>
    </div>
  </div>`;

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
