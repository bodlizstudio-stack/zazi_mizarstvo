import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Storitve",
  description:
    "Kuhinje po meri, vgradne omare, spalnice, masivno pohištvo in montaža. Preglejte storitve mizarstva ŽAŽI.",
  path: "/storitve",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-6">
        <div className="container-x">
          <Breadcrumbs items={[{ label: "Storitve" }]} />
          <SectionHeading
            eyebrow="Storitve"
            title="Izdelava in montaža pohištva po meri"
            description="Od kuhinj in omar do masivnih kosov in zunanjih projektov. Vsak projekt prilagodimo prostoru."
          />
        </div>
      </section>

      <section className="section-y pt-4">
        <div className="container-x grid gap-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-4 lg:grid-cols-[8rem_1fr_auto] lg:items-start border-t border-line pt-8"
            >
              <span className="font-display text-3xl text-oak">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-3xl md:text-4xl">{service.title}</h2>
                <p className="mt-3 text-muted max-w-2xl leading-relaxed">{service.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-charcoal">
                  {service.highlights.map((h) => (
                    <li key={h} className="border-l border-oak pl-3">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              {service.hasPage ? (
                <Link href={`/storitve/${service.slug}`} className="btn btn-secondary self-start">
                  Več o storitvi
                </Link>
              ) : (
                <Link href="/kontakt" className="btn btn-secondary self-start">
                  Pošlji povpraševanje
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Imate konkreten projekt?" description="Opišite prostor in želje — predlagamo izvedljivo pot." />
    </>
  );
}
