import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function InstagramFeed() {
  const featured = getFeaturedProjects(3);

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Sveže iz delavnice"
            title="Zadnji projekti"
            description="Izbrani kosi iz naše delavnice. Več aktualnih objav najdete tudi na Instagramu."
          />
          <div className="flex flex-wrap gap-3 self-start lg:self-auto">
            <Link href="/projekti" className="btn btn-secondary">
              Vsi projekti
            </Link>
            <a
              href={company.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Sledi nam na Instagramu
            </a>
          </div>
        </div>

        {featured.length ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <a
                key={i}
                href={company.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square border border-line bg-cream overflow-hidden"
                aria-label={`Odpri Instagram profil ${company.instagram.handle}`}
              >
                <div className="absolute inset-0 wood-grain opacity-80 transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-ivory p-6 text-center">
                  <span className="text-xs tracking-[0.2em] uppercase text-sand">Instagram</span>
                  <span className="mt-3 font-display text-2xl">{company.instagram.handle}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/** Optional visual strip using project photos */
export function ProjectPhotoStrip() {
  const featured = getFeaturedProjects(3);
  if (!featured.length) return null;

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-3">
      {featured.map((p) => (
        <Link
          key={p.slug}
          href={`/projekti/${p.slug}`}
          className="relative aspect-[4/5] overflow-hidden border border-line"
        >
          <Image
            src={p.images[0]}
            alt={p.title}
            fill
            className="object-cover"
            sizes="33vw"
          />
        </Link>
      ))}
    </div>
  );
}
