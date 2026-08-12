"use client";

import { useMemo, useSyncExternalStore } from "react";
import { company } from "@/data/company";

const CONSENT_KEY = "zazi-map-consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getMapConsent() {
  return window.localStorage.getItem(CONSENT_KEY) === "1";
}

function getServerConsent() {
  return false;
}

export function Map() {
  const consent = useSyncExternalStore(subscribe, getMapConsent, getServerConsent);

  const directionsUrl = useMemo(() => {
    const { lat, lon } = company.geo;
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  }, []);

  /** Google Maps embed with classic red pin at exact coordinates */
  const googleEmbed = useMemo(() => {
    const { lat, lon } = company.geo;
    const label = encodeURIComponent(company.brand);
    return `https://maps.google.com/maps?q=${lat},${lon}+(${label})&z=17&hl=sl&output=embed`;
  }, []);

  const enableMap = () => {
    window.localStorage.setItem(CONSENT_KEY, "1");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="border border-line overflow-hidden bg-cream">
      <div className="aspect-[16/10] relative">
        {consent ? (
          <iframe
            title={`Google Maps — ${company.address.full}`}
            src={googleEmbed}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center tech-grid">
            <p className="font-display text-2xl">Kje smo</p>
            <p className="mt-2 text-muted max-w-md">
              {company.address.full}
              <br />
              Zemljevid naložimo šele po vašem soglasju (Google Maps z rdečim pinom).
            </p>
            <button type="button" className="btn btn-primary mt-6" onClick={enableMap}>
              Naloži zemljevid
            </button>
          </div>
        )}
      </div>
      <div className="p-4 md:p-5 flex flex-wrap gap-3 items-center justify-between border-t border-line bg-ivory">
        <p className="text-sm text-muted">{company.address.full}</p>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary min-h-11"
        >
          Odpri navodila za pot
        </a>
      </div>
    </div>
  );
}
