"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectCategories } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { company } from "@/data/company";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "Vse">("Vse");

  const filtered = useMemo(() => {
    if (active === "Vse") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  if (!projects.length) {
    return (
      <div className="border border-line bg-cream/50 p-8 md:p-12 text-center">
        <p className="font-display text-3xl text-ink">Projekti se pripravljajo</p>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Fotografije in opisi konkretnih projektov bodo objavljeni tukaj. Do takrat si naše delo
          oglejte na Instagramu.
        </p>
        <a
          href={company.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-8"
        >
          Sledi ŽAŽI na Instagramu
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtri projektov">
        {(["Vse", ...projectCategories] as const).map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={`min-h-10 px-3 text-sm border transition-colors ${
                isActive
                  ? "bg-ink text-ivory border-ink"
                  : "bg-transparent text-charcoal border-line hover:border-oak"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-muted py-12 text-center">V tej kategoriji trenutno ni projektov.</p>
      )}
    </div>
  );
}
