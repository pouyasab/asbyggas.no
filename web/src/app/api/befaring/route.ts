import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type BefaringBody = {
  navn: string;
  telefon: string;
};

function isBefaringBody(x: unknown): x is BefaringBody {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return typeof o.navn === "string" && typeof o.telefon === "string";
}

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "RESEND_API_KEY mangler i miljøvariabler" },
      { status: 500 },
    );
  }

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

  const to = process.env.CONTACT_EMAIL_TO?.trim() || "info@asbyggas.no";
  const from =
    process.env.RESEND_FROM?.trim() || "A.S Bygg AS <kontakt@asbyggas.no>";

  const text = [
    `Ønske om gratis befaring (popup på nettsiden)`,
    ``,
    `Navn: ${navn}`,
    `Telefon: ${telefon}`,
  ].join("\n");

  const html = `<pre style="font-family:sans-serif;white-space:pre-wrap">${text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>`;

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: `Befaring: ${navn}`,
    text,
    html,
  });

  if (error) {
    console.error("Resend befaring:", error);
    return NextResponse.json(
      { error: "Kunne ikke sende e-post. Prøv igjen senere." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
