import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0] ?? "/images/project-placeholder.svg";

  return (
    <article className="group">
      <Link href={`/projekti/${project.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream border border-line">
          <Image
            src={image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {project.awaitingPhotos ? (
            <span className="absolute left-3 top-3 bg-ivory/95 text-xs px-2 py-1 border border-line">
              Fotografije v pripravi
            </span>
          ) : null}
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-oak measure-line mb-2">
              {project.category}
            </p>
            <h3 className="font-display text-2xl">{project.title}</h3>
            <p className="mt-2 text-muted text-sm leading-relaxed">{project.excerpt}</p>
          </div>
        </div>
        {(project.material || project.location) && (
          <p className="mt-3 text-xs text-muted">
            {[project.material, project.location].filter(Boolean).join(" · ")}
          </p>
        )}
      </Link>
    </article>
  );
}
