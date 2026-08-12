import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politika zasebnosti",
  description: "Politika zasebnosti spletne strani ŽAŽI / Andraž Bogataj s.p.",
  path: "/politika-zasebnosti",
});

export default function PrivacyPage() {
  return (
    <section className="pt-28 md:pt-32 section-y">
      <div className="container-x max-w-3xl">
        <Breadcrumbs items={[{ label: "Politika zasebnosti" }]} />
        <SectionHeading
          eyebrow="Pravno"
          title="Politika zasebnosti"
          description="Kako obdelujemo osebne podatke, ki jih posredujete prek spletne strani."
        />

        <div className="mt-10 space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-ink">Upravljavec</h2>
            <p className="mt-3">
              {company.legalName}
              <br />
              {company.address.full}
              <br />
              E-pošta: {company.email}
              <br />
              Telefon: {company.phoneDisplay}
              <br />
              Davčna št.: {company.taxId}
              <br />
              Matična št.: {company.registrationNumber}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Katere podatke zbiramo</h2>
            <p className="mt-3">
              Prek kontaktnega obrazca lahko zberemo ime in priimek, telefonsko številko, e-poštni
              naslov, kraj projekta, vrsto in opis projekta ter morebitne dodatne informacije, ki jih
              sami vpišete.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Namen in pravna podlaga</h2>
            <p className="mt-3">
              Podatke obdelujemo za odgovor na vaše povpraševanje in pripravo ponudbe. Pravna podlaga
              je vaše soglasje in/ali upravičen interes za komunikacijo s potencialnimi strankami.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Hranjenje</h2>
            <p className="mt-3">
              Podatke hranimo toliko časa, kot je potrebno za obravnavo povpraševanja in morebitno
              nadaljnje sodelovanje, oziroma do preklica soglasja, če ni druge pravne obveznosti.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Vaše pravice</h2>
            <p className="mt-3">
              Imate pravico do dostopa, popravka, izbrisa, omejitve obdelave, ugovora in
              prenosljivosti podatkov ter pravico do pritožbe pri Informacijskem pooblaščencu RS.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink">Piškotki</h2>
            <p className="mt-3">
              Več o piškotkih najdete na strani{" "}
              <a href="/piskotki" className="underline underline-offset-2 text-ink">
                Piškotki
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
