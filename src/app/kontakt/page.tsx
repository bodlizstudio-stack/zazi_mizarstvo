import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "@/components/Map";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontakt ŽAŽI / Andraž Bogataj s.p. — telefon 041 433 960, e-pošta, naslov Fužine 10, Gorenja vas. Pošljite povpraševanje.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-6">
        <div className="container-x">
          <Breadcrumbs items={[{ label: "Kontakt" }]} />
          <SectionHeading
            eyebrow="Kontakt"
            title="Imate idejo? Povejmo ji obliko."
            description={`${company.brand} / ${company.shortLegal}. Pokličite, pišite ali pošljite povpraševanje.`}
          />
        </div>
      </section>

      <section className="section-y pt-4">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactDetails />
          <div className="border border-line bg-ivory p-5 md:p-8">
            <h2 className="font-display text-3xl mb-6">Pošlji povpraševanje</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-y pt-0">
        <div className="container-x">
          <h2 className="font-display text-3xl mb-6">Kje smo</h2>
          <Map />
        </div>
      </section>
    </>
  );
}
