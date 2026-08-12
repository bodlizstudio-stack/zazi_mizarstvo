"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const COOKIE_KEY = "zazi-cookie-consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getConsent(): "accepted" | "rejected" | "unset" {
  const stored = window.localStorage.getItem(COOKIE_KEY);
  if (stored === "accepted" || stored === "rejected") return stored;
  return "unset";
}

function getServerConsent(): "accepted" | "rejected" | "unset" {
  return "accepted";
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsent, getServerConsent);

  const choose = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(COOKIE_KEY, value);
    window.dispatchEvent(new Event("storage"));
  };

  if (consent !== "unset") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-[4.75rem] lg:bottom-4 z-50 px-3"
      role="dialog"
      aria-label="Soglasje za piškotke"
    >
      <div className="mx-auto max-w-3xl border border-line bg-ivory shadow-soft p-4 md:p-5">
        <p className="text-sm text-charcoal leading-relaxed">
          Uporabljamo nujne piškotke za delovanje strani. Nenujne vsebine (npr. vdelani zemljevid)
          naložimo šele po vašem soglasju. Več v{" "}
          <Link href="/piskotki" className="underline underline-offset-2">
            politiki piškotkov
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" className="btn btn-primary min-h-10 text-sm" onClick={() => choose("accepted")}>
            Sprejmi
          </button>
          <button type="button" className="btn btn-secondary min-h-10 text-sm" onClick={() => choose("rejected")}>
            Zavrni
          </button>
        </div>
      </div>
    </div>
  );
}
