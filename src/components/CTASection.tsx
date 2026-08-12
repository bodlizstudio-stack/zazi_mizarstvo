import Link from "next/link";
import { company } from "@/data/company";
import { SawBladeBackdrop } from "@/components/SawBlade";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Imate prostor. Imate idejo. Mi jo izdelamo.",
  description = "Povejte nam, kaj potrebujete — odgovorimo na povpraševanje in se dogovorimo za naslednji korak.",
}: CTASectionProps) {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] wood-grain px-6 py-12 md:px-12 md:py-16">
          <SawBladeBackdrop
            tone="light"
            className="right-[4%] top-[18%] w-[min(55vw,300px)] opacity-90"
          />
          <div className="relative max-w-2xl">
            <p className="text-sand text-xs uppercase tracking-[0.2em] mb-4 measure-line">
              Povpraševanje
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory">{title}</h2>
            <p className="mt-4 text-ivory/70 text-lg">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn bg-ivory text-ink border border-ivory hover:bg-cream">
                Pošlji povpraševanje
              </Link>
              <a href={company.phoneHref} className="btn btn-ghost">
                Pokličite {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
