import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projekti",
  description:
    "Galerija projektov ŽAŽI — pohištvo po meri. Aktualne fotografije tudi na Instagramu @zazi_andrazbogataj.",
  path: "/projekti",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-6">
        <div className="container-x">
          <Breadcrumbs items={[{ label: "Projekti" }]} />
          <SectionHeading
            eyebrow="Projekti"
            title="Naše delo"
            description={`Konkretni projekti govorijo najbolje. Aktualne objave spremljajte na ${company.instagram.handle}, tukaj pa gradimo trajno galerijo.`}
          />
        </div>
      </section>

      <section className="section-y pt-4">
        <div className="container-x">
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
