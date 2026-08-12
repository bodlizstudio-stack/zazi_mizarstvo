import type { Metadata } from "next";
import { company } from "@/data/company";
import { absoluteUrl } from "@/lib/utils";

type BuildMetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og.jpg",
  noIndex = false,
}: BuildMetaInput): Metadata {
  const fullTitle =
    title === company.brand
      ? `${company.brand} — ${company.tagline}`
      : `${title} | ${company.brand}`;

  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.brand,
      locale: "sl_SI",
      type: "website",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: company.brand }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.brand,
    legalName: company.legalName,
    description: company.description,
    url: absoluteUrl(),
    telephone: "+38641433960",
    email: company.email,
    image: absoluteUrl("/logo-zazi.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: "SI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.lat,
      longitude: company.geo.lon,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Gorenjska" },
      { "@type": "AdministrativeArea", name: "Poljanska dolina" },
      { "@type": "Country", name: "Slovenija" },
    ],
    sameAs: [company.instagram.url],
    taxID: company.taxId,
    vatID: company.taxId,
    identifier: company.registrationNumber,
    slogan: company.philosophy,
  };
}
