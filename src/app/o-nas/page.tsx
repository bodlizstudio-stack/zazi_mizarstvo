import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "O nas",
  description:
    "Spoznajte ŽAŽI — Andraž Bogataj s.p. Izdelava in montaža pohištva po meri v Poljanski dolini. Vse je mogoče.",
  path: "/o-nas",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-8">
        <div className="container-x">
          <Breadcrumbs items={[{ label: "O nas" }]} />
          <SectionHeading
            eyebrow="ŽAŽI"
            title="Pohištvo, ki sledi prostoru — ne obratno"
            description="Smo mizarska ekipa iz Poljanske doline. Delamo po meri: natančno, funkcionalno in z občutkom za material."
          />
        </div>
      </section>

      <section className="section-y pt-4">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-muted text-lg leading-relaxed">
            <p>
              ŽAŽI je blagovna znamka podjetja {company.shortLegal}. Ukvarjamo se z izdelavo in
              montažo pohištva po meri — od posameznega kosa do opremljanja večih prostorov.
            </p>
            <p>
              Verjamemo v individualen pristop. Vsak prostor ima svoje mere, omejitve in želje.
              Zato iščemo rešitve, ki so konkretne: prave dimenzije, pravi materiali, čista izvedba.
            </p>
          </div>
          <div className="border border-line bg-cream p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-oak measure-line mb-4">Pristop</p>
            <ul className="space-y-3 text-charcoal">
              {[
                "Pogovor o potrebah in stilu",
                "Izmera in načrtovanje",
                "Izbira materialov",
                "Izdelava v delavnici",
                "Montaža na lokaciji",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-oak" aria-hidden>
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="Od ideje do izdelka"
            title="Individualne rešitve"
            description="Začnemo pri vaši ideji — skici, fotografiji, načrtu ali grobih merah. Nato skupaj oblikujemo izvedbo, ki se prilega prostoru."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Funkcija",
                text: "Pohištvo mora služiti vsakdanu. Zato najprej razumemo, kako prostor uporabljate.",
              },
              {
                title: "Material",
                text: "Masiven les, oplemenitena iverica in površinske obdelave — glede na namen in želeni občutek.",
              },
              {
                title: "Izvedba",
                text: "Natančna izdelava in montaža. Detajli, ki držijo skupaj celoto.",
              },
            ].map((card) => (
              <div key={card.title} className="border-t border-line pt-5">
                <h3 className="font-display text-2xl">{card.title}</h3>
                <p className="mt-3 text-muted">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            eyebrow="Materiali"
            title="Naravno in sodobno"
            description="Materiale izberemo glede na projekt. Ne obljubljamo vsega — uporabljamo tisto, kar ima smisel za vaš prostor."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Masiven les",
              "Oplemenitena iverica",
              "Različne površinske obdelave",
              "Kombinacije materialov po meri",
            ].map((item) => (
              <div key={item} className="border border-line p-5 bg-ivory">
                <p className="font-display text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="wood-grain rounded-[var(--radius-lg)] px-6 py-14 md:px-12 md:py-20 text-center">
            <p className="text-sand text-xs uppercase tracking-[0.22em] mb-4">Filozofija</p>
            <h2 className="font-display text-4xl md:text-6xl text-ivory">{company.philosophy}</h2>
            <p className="mt-5 text-ivory/70 max-w-xl mx-auto">
              Zahtevni koti, nenavadne mere, posebne želje — iščemo izvedljivo rešitev.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y pt-0">
        <div className="container-x flex flex-wrap gap-3">
          <Link href="/projekti" className="btn btn-primary">
            Naše delo
          </Link>
          <Link href="/kontakt" className="btn btn-secondary">
            Kontakt
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
