import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] pt-32 pb-20 flex items-center">
      <div className="container-x">
        <p className="text-xs uppercase tracking-[0.2em] text-oak measure-line mb-4">404</p>
        <h1 className="font-display text-4xl md:text-6xl max-w-2xl">
          Ta kos se ni ujel v načrt.
        </h1>
        <p className="mt-5 text-muted text-lg max-w-xl">
          Strani, ki jo iščete, ni mogoče najti. Morda je bil naslov spremenjen ali napisan napačno.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Nazaj na domačo stran
          </Link>
          <Link href="/kontakt" className="btn btn-secondary">
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
