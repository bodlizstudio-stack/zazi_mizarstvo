import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { InstagramFeed } from "@/components/InstagramFeed";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectMarquee } from "@/components/ProjectMarquee";
import { CraftSpotlight } from "@/components/CraftSpotlight";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: company.brand,
  description:
    "ŽAŽI — izdelava in montaža pohištva po meri. Kuhinje, omare, spalnice in unikatni mizarski projekti. Gorenja vas, Poljanska dolina.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectMarquee />

      <ServicesPreview />

      <CraftSpotlight />

      <section className="section-y bg-cream/50">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="O nas"
              title="Mizarstvo z jasnim pristopom"
              description="Mlada, zavzeta ekipa iz Poljanske doline. Izdelujemo pohištvo po meri — od manjših kosov do opremljanja večih prostorov."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 text-sm text-charcoal">
              {[
                "Individualen pristop",
                "Natančnost in funkcionalnost",
                "Masiven les in sodobni materiali",
                "Izdelava in montaža",
                "Rešitve za zahtevne prostore",
                "Unikatne izvedbe",
              ].map((item) => (
                <li key={item} className="border-l-2 border-oak pl-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/o-nas" className="btn btn-primary">
                Spoznajte ŽAŽI
              </Link>
              <Link href="/kontakt" className="btn btn-secondary">
                Pošlji povpraševanje
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden border border-line wood-grain min-h-[280px] p-8 flex flex-col justify-end">
            <p className="font-display text-4xl md:text-5xl text-ivory leading-tight">
              {company.philosophy}
            </p>
            <p className="mt-4 text-ivory/70 max-w-sm">
              Od prve skice do zadnjega vijaka iščemo rešitev, ki je narejena za vaš prostor.
            </p>
          </div>
        </div>
      </section>

      <InstagramFeed />
      <ProcessSteps />
      <CTASection />
    </>
  );
}
