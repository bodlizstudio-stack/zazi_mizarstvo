import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { SawBladeBackdrop } from "@/components/SawBlade";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-charcoal">
      {/* Project photo — keep bright/sharp; only soften left for text */}
      <Image
        src="/images/projects/kuhinja-bela-les/01.png"
        alt="Kuhinja po meri ŽAŽI"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Light left wash only — photo stays clear on the right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-ink/15" aria-hidden />

      {/* Spinning brand saw — fully inside viewport, left & down */}
      <SawBladeBackdrop
        tone="light"
        className="right-[6%] top-[22%] z-[1] w-[min(72vw,380px)] sm:right-[10%] sm:top-[20%] sm:w-[min(48vw,420px)] md:right-[12%] md:top-[18%] md:w-[min(40vw,460px)]"
      />

      <div className="relative z-[2] container-x w-full pb-24 pt-36 md:pb-28 md:pt-40">
        <p className="reveal text-sand text-xs sm:text-sm uppercase tracking-[0.22em] mb-6">
          {company.regionLabel}
        </p>
        <h1 className="reveal font-display text-ivory text-[clamp(2.4rem,8vw,5.5rem)] max-w-4xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
          Vaša ideja.
          <br />
          Naša izdelava.
          <br />
          <span className="text-sand">{company.philosophy.replace(".", "")}</span>
        </h1>
        <p className="reveal mt-6 max-w-xl text-ivory/90 text-lg md:text-xl leading-relaxed drop-shadow-sm">
          {company.description}
        </p>
        <div className="reveal mt-9 flex flex-wrap gap-3">
          <Link href="/kontakt" className="btn bg-ivory text-ink border border-ivory hover:bg-cream">
            Pošlji povpraševanje
          </Link>
          <Link href="/projekti" className="btn btn-ghost">
            Oglejte si projekte
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-ivory to-transparent z-[2]" aria-hidden />
    </section>
  );
}
