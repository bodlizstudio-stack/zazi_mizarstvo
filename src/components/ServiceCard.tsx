import Link from "next/link";
import { homeServiceHighlights } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";

export function ServiceCard({
  title,
  href,
  index,
}: {
  title: string;
  href?: string;
  index: number;
}) {
  const content = (
    <>
      <span className="text-xs tracking-[0.18em] text-oak">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="mt-3 block font-display text-xl md:text-2xl group-hover:text-walnut transition-colors">
        {title}
      </span>
    </>
  );

  const className =
    "group block border-t border-line pt-5 pb-2 focus-visible:outline-offset-4";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

export function ServicesPreview() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Storitve"
          title="Kaj izdelujemo"
          description="Pohištvo po meri za domove in poslovne prostore — od posameznega kosa do opreme večih prostorov."
        />
        <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {homeServiceHighlights.map((title, index) => (
            <ServiceCard
              key={title}
              title={title}
              index={index}
              href="/storitve"
            />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/storitve" className="btn btn-secondary">
            Vse storitve
          </Link>
        </div>
      </div>
    </section>
  );
}
