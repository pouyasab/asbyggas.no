import { NextResponse } from "next/server";
import { getContactInboxTo, sendSiteEmail } from "@/lib/sendgrid-mail";

export const runtime = "nodejs";

type BefaringBody = {
  navn: string;
  telefon: string;
};

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function isBefaringBody(x: unknown): x is BefaringBody {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return typeof o.navn === "string" && typeof o.telefon === "string";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig JSON" }, { status: 400 });
  }

  if (!isBefaringBody(body)) {
    return NextResponse.json({ error: "Manglende felt" }, { status: 400 });
  }

  const { navn, telefon } = body;
  if (navn.trim().length < 2 || telefon.replace(/\s/g, "").length < 6) {
    return NextResponse.json({ error: "Validering feilet" }, { status: 400 });
  }

  const to = getContactInboxTo();

  const text = [
    `Ønske om gratis befaring (popup på nettsiden)`,
    ``,
    `Navn: ${navn}`,
    `Telefon: ${telefon}`,
  ].join("\n");

  const safeNavn = escapeHtml(navn);
  const safeTelefon = escapeHtml(telefon);

  const html = `
  <div style="background:#f3f4f6;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111827;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="padding:18px 22px;background:#1f6b43;color:#ffffff;">
        <div style="font-size:18px;font-weight:700;">Ønske om gratis befaring</div>
        <div style="font-size:13px;opacity:0.9;margin-top:4px;">Sendt via popup på asbyggas.no</div>
      </div>
      <div style="padding:20px 22px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Navn</td><td style="padding:8px 0;font-weight:600;">${safeNavn}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;">Telefon</td><td style="padding:8px 0;">${safeTelefon}</td></tr>
        </table>
      </div>
    </div>
  </div>`;

  // Samme SendGrid-kall og innboks som POST /api/contact (ingen ekstra oppsett).
  const result = await sendSiteEmail({
    to,
    subject: `Befaring: ${navn}`,
    text,
    html,
  });

  if ("error" in result) {
    const status = result.error.includes("mangler") ? 500 : 502;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ ok: true });
}
