import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { company } from "@/data/company";
import { contactSchema } from "@/lib/validations";

const rateMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 5;
  const entry = rateMap.get(ip);

  if (!entry || entry.resetAt < now) {
    rateMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: "Preveč zahtevkov. Poskusite znova čez nekaj minut ali nas pokličite." },
        { status: 429 },
      );
    }

    const form = await req.formData();
    const raw = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      location: String(form.get("location") ?? ""),
      projectType: String(form.get("projectType") ?? ""),
      description: String(form.get("description") ?? ""),
      dimensions: String(form.get("dimensions") ?? ""),
      preferredDate: String(form.get("preferredDate") ?? ""),
      budget: String(form.get("budget") ?? ""),
      gdpr: form.get("gdpr") === "true" ? true : false,
      website: String(form.get("website") ?? ""),
    };

    // Honeypot
    if (raw.website) {
      return NextResponse.json({ ok: true });
    }

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Preverite označena polja.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = {
      ...parsed.data,
      name: sanitize(parsed.data.name),
      phone: sanitize(parsed.data.phone),
      email: sanitize(parsed.data.email),
      location: sanitize(parsed.data.location ?? ""),
      description: sanitize(parsed.data.description),
      dimensions: sanitize(parsed.data.dimensions ?? ""),
      preferredDate: sanitize(parsed.data.preferredDate ?? ""),
      budget: sanitize(parsed.data.budget ?? ""),
    };

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || company.email;
    const from = process.env.SMTP_FROM || user || company.email;

    if (!host || !user || !pass) {
      console.error("Contact form: SMTP is not configured.");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Pošiljanje e-pošte trenutno ni konfigurirano. Pokličite nas na 041 433 960 ali pišite na andraz.bogataj99@gmail.com.",
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Novo povpraševanje ŽAŽI — ${data.projectType} — ${data.name}`;
    const text = [
      `Novo povpraševanje z obrazca ŽAŽI`,
      ``,
      `Ime: ${data.name}`,
      `Telefon: ${data.phone}`,
      `E-pošta: ${data.email}`,
      `Kraj projekta: ${data.location || "—"}`,
      `Vrsta projekta: ${data.projectType}`,
      `Okvirne mere: ${data.dimensions || "—"}`,
      `Želeni termin: ${data.preferredDate || "—"}`,
      `Okvirni proračun: ${data.budget || "—"}`,
      ``,
      `Opis:`,
      data.description,
      ``,
      `GDPR soglasje: da`,
      `IP: ${ip}`,
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: data.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Sporočila ni bilo mogoče poslati. Poskusite znova ali nas pokličite na 041 433 960.",
      },
      { status: 500 },
    );
  }
}
