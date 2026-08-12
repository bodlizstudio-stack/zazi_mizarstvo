import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Piškotki",
  description: "Informacije o piškotkih na spletni strani ŽAŽI.",
  path: "/piskotki",
});

export default function CookiesPage() {
  return (
    <section className="pt-28 md:pt-32 section-y">
      <div className="container-x max-w-3xl">
        <Breadcrumbs items={[{ label: "Piškotki" }]} />
        <SectionHeading
          eyebrow="Pravno"
          title="Piškotki"
          description="Katere piškotke uporabljamo in kako lahko upravljate soglasje."
        />

        <div className="mt-10 space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-ink">Nujni piškotki / lokalna shramba</h2>
            <p className="mt-3">
              Za delovanje strani lahko shranimo vašo izbiro glede soglasja (npr. piškotki, zemljevid)
              v lokalni shrambi brskalnika. Ti zapisi niso namenjeni oglaševanju.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Zunanje vsebine</h2>
            <p className="mt-3">
              Interaktivni zemljevid (Google Maps) naložimo šele po vašem izrecnem dejanju
              (»Naloži zemljevid«). Instagram povezave vodijo na zunanji profil in ne vdelujejo
              sledilnih skript, dokler jih sami ne odprete.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Upravljanje</h2>
            <p className="mt-3">
              Soglasje lahko kadar koli spremenite z izbrisom lokalne shrambe za to spletno mesto v
              nastavitvah brskalnika. Možnost »Zavrni« je vedno enakovredno dostopna.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
