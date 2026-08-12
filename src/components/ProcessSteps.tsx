import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/SectionHeading";

export function ProcessSteps() {
  return (
    <section className="section-y bg-cream/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Kako delamo"
          title="Od ideje do montaže"
          description="Jasen potek sodelovanja — od prvega sporočila do končne postavitve v prostoru."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number} className="border-t border-line pt-5">
              <span className="text-oak font-display text-3xl">{step.number}</span>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
