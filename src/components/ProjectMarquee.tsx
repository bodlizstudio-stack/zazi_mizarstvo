"use client";

import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";

/** Slow cinematic strip of real project photos — portfolio-first engagement. */
export function ProjectMarquee() {
  const projects = getFeaturedProjects(3);
  if (!projects.length) return null;

  const frames = projects.flatMap((p) =>
    p.images.slice(0, 2).map((src, i) => ({
      src,
      alt: `${p.title} — fotografija ${i + 1}`,
      href: `/projekti/${p.slug}`,
      title: p.title,
    })),
  );

  const loop = [...frames, ...frames];

  return (
    <section className="border-y border-line bg-cream/40 py-6 md:py-8 overflow-hidden" aria-label="Izbor projektov">
      <div className="marquee-track flex w-max gap-3 md:gap-4">
        {loop.map((frame, index) => (
          <Link
            key={`${frame.src}-${index}`}
            href={frame.href}
            className="group relative h-40 w-56 md:h-52 md:w-80 shrink-0 overflow-hidden border border-line bg-charcoal"
            tabIndex={index >= frames.length ? -1 : undefined}
            aria-hidden={index >= frames.length}
          >
            <Image
              src={frame.src}
              alt={index >= frames.length ? "" : frame.alt}
              fill
              sizes="320px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-3 text-sm text-ivory opacity-0 transition-opacity group-hover:opacity-100">
              {frame.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
