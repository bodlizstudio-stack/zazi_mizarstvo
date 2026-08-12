import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kako delamo",
  description:
    "Kako poteka sodelovanje z ŽAŽI: od povpraševanja in izmere do izdelave in montaže pohištva po meri.",
  path: "/kako-delamo",
});

export default function ProcessPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-6">
        <div className="container-x">
          <Breadcrumbs items={[{ label: "Kako delamo" }]} />
          <SectionHeading
            eyebrow="Proces"
            title="Jasni koraki, mirna izvedba"
            description="Sodelovanje poteka po dogovoru. Spodnji koraki so okvir, ki ga prilagodimo vašemu projektu."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn btn-primary">
              Pošlji povpraševanje
            </Link>
            <a href={company.phoneHref} className="btn btn-secondary">
              Pokličite {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="section-y pt-0">
        <div className="container-x max-w-3xl text-muted leading-relaxed">
          <p>
            Če imate že načrt, mere ali fotografije prostora, jih priložite k povpraševanju. Tako
            hitreje ocenimo možnosti in naslednji korak.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
