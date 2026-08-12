import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { getServiceBySlug, getServicePages } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServicePages().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || !service.hasPage) return {};
  return buildMetadata({
    title: service.title,
    description: service.excerpt,
    path: `/storitve/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || !service.hasPage) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: company.brand,
      telephone: "+38641433960",
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        postalCode: company.address.postalCode,
        addressLocality: company.address.city,
        addressCountry: "SI",
      },
    },
    areaServed: "Slovenija",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-28 md:pt-32 pb-8">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: "Storitve", href: "/storitve" },
              { label: service.title },
            ]}
          />
          <p className="text-xs uppercase tracking-[0.2em] text-oak measure-line mb-4">Storitev</p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted leading-relaxed">{service.description}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl">
            {service.highlights.map((h) => (
              <li key={h} className="border border-line p-4 bg-cream/50">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn btn-primary">
              Pošlji povpraševanje
            </Link>
            <Link href="/projekti" className="btn btn-secondary">
              Oglejte si projekte
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
