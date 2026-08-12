import { company } from "@/data/company";

export function ContactDetails() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-oak measure-line mb-3">Podjetje</p>
        <p className="font-display text-3xl">{company.brand}</p>
        <p className="mt-2 text-muted">{company.shortLegal}</p>
      </div>

      <dl className="space-y-5">
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-muted">Telefon</dt>
          <dd className="mt-1">
            <a href={company.phoneHref} className="text-xl hover:text-walnut">
              {company.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-muted">E-pošta</dt>
          <dd className="mt-1">
            <a href={company.emailHref} className="text-lg break-all hover:text-walnut">
              {company.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-muted">Naslov</dt>
          <dd className="mt-1 text-lg">{company.address.full}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-muted">Instagram</dt>
          <dd className="mt-1">
            <a
              href={company.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-walnut"
            >
              {company.instagram.handle}
            </a>
          </dd>
        </div>
      </dl>

      <div className="border-t border-line pt-6 text-sm text-muted space-y-1">
        <p>{company.legalName}</p>
        <p>Davčna številka: {company.taxId}</p>
        <p>Matična številka: {company.registrationNumber}</p>
      </div>
    </div>
  );
}
