"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

const spots = [
  {
    id: "kuhinja",
    label: "Kuhinja",
    title: "Natančni spoji. Čiste linije.",
    text: "Pri kuhinjah štejejo detajli: poravnava elementov, izbira površin in montaža, ki zdrži vsakdanjo rabo.",
    image: "/images/projects/kuhinja-bela-les/04.png",
    href: "/projekti/kuhinja-bela-les",
  },
  {
    id: "miza",
    label: "Masiv & epoksi",
    title: "Material, ki ostane viden.",
    text: "Pri mizi Lipa ostane struktura lesa v ospredju — epoksi reka in kovinsko podnožje poudarita karakter kosa.",
    image: "/images/projects/miza-lipa/01.png",
    href: "/projekti/miza-lipa",
  },
  {
    id: "zunanje",
    label: "Zunanje",
    title: "Izdelava, ki zdrži prostor.",
    text: "Zunanja kuhinja poveže les, pult in okolico. Vsak detajl je prilagojen lokaciji in namenu.",
    image: "/images/projects/zunanja-kuhinja/03.png",
    href: "/projekti/zunanja-kuhinja",
  },
] as const;

/**
 * Craftsmanship spotlight — research-backed: macro/detail views + portfolio drive trust.
 */
export function CraftSpotlight() {
  const [active, setActive] = useState(0);
  const spot = spots[active];

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Detajli"
          title="Kar prepriča, je izvedba"
          description="Pri pohištvu po meri odločajo detajli. Oglejte si izseke iz realnih projektov — nato odprite celotno zgodbo."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Izbor detajlov">
          {spots.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(index)}
                className={`min-h-11 px-4 text-sm border transition-colors ${
                  isActive
                    ? "bg-ink text-ivory border-ink"
                    : "bg-transparent text-charcoal border-line hover:border-oak"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
          <div className="relative aspect-[16/11] overflow-hidden border border-line bg-cream">
            <Image
              key={spot.image}
              src={spot.image}
              alt={spot.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover reveal"
              priority={false}
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-oak measure-line mb-4">
              {spot.label}
            </p>
            <h3 className="font-display text-3xl md:text-4xl">{spot.title}</h3>
            <p className="mt-4 text-muted text-lg leading-relaxed">{spot.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={spot.href} className="btn btn-primary">
                Odpri projekt
              </Link>
              <Link href="/kontakt" className="btn btn-secondary">
                Pošlji povpraševanje
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
