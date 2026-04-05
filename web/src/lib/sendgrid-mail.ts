import sgMail from "@sendgrid/mail";

export function getSendgridConfigured(): {
  ok: true;
  fromEmail: string;
  fromName: string;
} | { ok: false; error: string } {
  const key = process.env.SENDGRID_API_KEY?.trim();
  const fromEmail = process.env.SENDGRID_FROM_EMAIL?.trim();
  if (!key) {
    return { ok: false, error: "SENDGRID_API_KEY mangler i miljøvariabler" };
  }
  if (!fromEmail) {
    return {
      ok: false,
      error: "SENDGRID_FROM_EMAIL mangler (verifisert avsender i SendGrid)",
    };
  }
  return {
    ok: true,
    fromEmail,
    fromName: process.env.SENDGRID_FROM_NAME?.trim() || "A.S Bygg AS",
  };
}

export async function sendSiteEmail(opts: {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}): Promise<{ error: string } | { ok: true }> {
  const cfg = getSendgridConfigured();
  if (!cfg.ok) {
    return { error: cfg.error };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  try {
    await sgMail.send({
      to: opts.to,
      from: { email: cfg.fromEmail, name: cfg.fromName },
      ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    });
    return { ok: true };
  } catch (e) {
    console.error("SendGrid:", e);
    return { error: "Kunne ikke sende e-post. Prøv igjen senere." };
  }
}
