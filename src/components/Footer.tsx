import Link from "next/link";
import { company, navLinks } from "@/data/company";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory mt-auto">
      <div className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo variant="light" className="text-ivory" />
            <p className="mt-5 max-w-sm text-ivory/70 leading-relaxed">
              Izdelava in montaža pohištva po meri.
            </p>
            <p className="mt-4 font-display text-xl text-sand">{company.philosophy}</p>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-sand mb-4">Navigacija</h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/80 hover:text-ivory transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-sand mb-4">Kontakt</h2>
            <ul className="space-y-3 text-ivory/85">
              <li>
                <a href={company.phoneHref} className="hover:text-ivory">
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="hover:text-ivory break-all">
                  {company.email}
                </a>
              </li>
              <li>{company.address.full}</li>
              <li>
                <a
                  href={company.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory"
                >
                  Instagram {company.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="text-sm text-ivory/55 space-y-1 max-w-2xl">
            <p>{company.legalName}</p>
            <p>
              Davčna številka: {company.taxId} · Matična številka: {company.registrationNumber}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ivory/65">
            <Link href="/politika-zasebnosti" className="hover:text-ivory">
              Politika zasebnosti
            </Link>
            <Link href="/piskotki" className="hover:text-ivory">
              Piškotki
            </Link>
            <span>© {year} {company.brand}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
