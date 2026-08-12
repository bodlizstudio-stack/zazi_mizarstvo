"use client";

import { FormEvent, useState } from "react";
import { projectTypes } from "@/data/company";

type FieldErrors = Record<string, string[] | undefined>;

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;

    setPending(true);
    setFormError(null);
    setErrors({});
    setSuccess(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!res.ok || !json.ok) {
        setErrors(json.fieldErrors ?? {});
        setFormError(json.error ?? "Pošiljanje ni uspelo. Poskusite znova ali nas pokličite.");
        return;
      }

      setSuccess(true);
      form.reset();
    } catch {
      setFormError("Prišlo je do napake pri povezavi. Preverite internet in poskusite znova.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Spletna stran</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Ime in priimek *"
          name="name"
          autoComplete="name"
          required
          error={errors.name?.[0]}
        />
        <Field
          label="Telefon *"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          error={errors.phone?.[0]}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="E-pošta *"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email?.[0]}
        />
        <Field label="Kraj projekta" name="location" error={errors.location?.[0]} />
      </div>

      <div>
        <label className="label" htmlFor="projectType">
          Vrsta projekta *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className={`input ${errors.projectType ? "input-error" : ""}`}
          defaultValue=""
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
        >
          <option value="" disabled>
            Izberite...
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType?.[0] ? (
          <p id="projectType-error" className="field-error" role="alert">
            {errors.projectType[0]}
          </p>
        ) : null}
      </div>

      <div>
        <label className="label" htmlFor="description">
          Opis projekta *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`input min-h-[8rem] py-3 ${errors.description ? "input-error" : ""}`}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={errors.description ? "description-error" : undefined}
        />
        {errors.description?.[0] ? (
          <p id="description-error" className="field-error" role="alert">
            {errors.description[0]}
          </p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Okvirne mere" name="dimensions" error={errors.dimensions?.[0]} />
        <Field label="Želeni termin" name="preferredDate" error={errors.preferredDate?.[0]} />
      </div>

      <Field
        label="Okvirni proračun (opcijsko)"
        name="budget"
        error={errors.budget?.[0]}
      />

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            name="gdpr"
            value="true"
            required
            className="mt-1 w-4 h-4 accent-[var(--color-oak)]"
            aria-invalid={Boolean(errors.gdpr)}
            aria-describedby={errors.gdpr ? "gdpr-error" : undefined}
          />
          <span>
            Soglašam z obdelavo osebnih podatkov za namen odgovora na povpraševanje (GDPR). Več v{" "}
            <a href="/politika-zasebnosti" className="underline underline-offset-2">
              politiki zasebnosti
            </a>
            . *
          </span>
        </label>
        {errors.gdpr?.[0] ? (
          <p id="gdpr-error" className="field-error" role="alert">
            {errors.gdpr[0]}
          </p>
        ) : null}
      </div>

      {formError ? (
        <div className="border border-[#9b3b2e]/40 bg-[#9b3b2e]/5 text-[#7a2e24] p-4 text-sm" role="alert">
          {formError}
        </div>
      ) : null}

      {success ? (
        <div
          className="border border-oak/40 bg-cream p-4 text-sm text-charcoal"
          role="status"
          aria-live="polite"
        >
          Povpraševanje je bilo uspešno poslano. Odgovorimo v najkrajšem možnem času.
        </div>
      ) : null}

      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={pending}>
        {pending ? "Pošiljam..." : "Pošlji povpraševanje"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  const id = name;
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`input ${error ? "input-error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
