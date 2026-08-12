import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { getProjectBySlug, projects } from "@/data/projects";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/projekti/${project.slug}`,
    image: project.images[0],
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="pt-28 md:pt-32 pb-8">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: "Projekti", href: "/projekti" },
              { label: project.title },
            ]}
          />
          <p className="text-xs uppercase tracking-[0.2em] text-oak measure-line mb-4">
            {project.category}
          </p>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
            {project.material ? <span>Material: {project.material}</span> : null}
            {project.location ? <span>Lokacija: {project.location}</span> : null}
            {project.year ? <span>Leto: {project.year}</span> : null}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container-x">
          <div className="relative aspect-[16/10] overflow-hidden border border-line bg-cream">
            <Image
              src={project.images[0] ?? "/images/project-placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {project.images.length > 1 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.images.slice(1).map((src) => (
                <div key={src} className="relative aspect-[4/3] border border-line bg-cream overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-12 grid gap-10 lg:grid-cols-2 max-w-5xl">
            {project.description ? (
              <div>
                <h2 className="font-display text-3xl">Povzetek</h2>
                <p className="mt-3 text-muted leading-relaxed">{project.description}</p>
              </div>
            ) : null}
            {project.challenge ? (
              <div>
                <h2 className="font-display text-3xl">Izziv</h2>
                <p className="mt-3 text-muted leading-relaxed">{project.challenge}</p>
              </div>
            ) : null}
            {project.solution ? (
              <div>
                <h2 className="font-display text-3xl">Rešitev</h2>
                <p className="mt-3 text-muted leading-relaxed">{project.solution}</p>
              </div>
            ) : null}
            {project.materials?.length ? (
              <div>
                <h2 className="font-display text-3xl">Materiali</h2>
                <ul className="mt-3 space-y-2 text-muted">
                  {project.materials.map((m) => (
                    <li key={m}>— {m}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {project.features?.length ? (
              <div>
                <h2 className="font-display text-3xl">Posebnosti</h2>
                <ul className="mt-3 space-y-2 text-muted">
                  {project.features.map((f) => (
                    <li key={f}>— {f}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {project.instagramUrl ? (
            <p className="mt-8">
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ogled na Instagramu
              </a>
            </p>
          ) : null}

          <div className="mt-14 border-t border-line pt-10">
            <h2 className="font-display text-3xl md:text-4xl">Imate podoben projekt?</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn btn-primary">
                Pošljite povpraševanje
              </Link>
              <a href={company.phoneHref} className="btn btn-secondary">
                Pokličite {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
