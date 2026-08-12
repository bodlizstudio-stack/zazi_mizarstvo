import Link from "next/link";
import { company } from "@/data/company";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <div className="pointer-events-auto mx-3 mb-3 grid grid-cols-2 gap-2 rounded-[var(--radius-lg)] border border-line bg-ivory/95 backdrop-blur-md p-2 shadow-soft">
        <a href={company.phoneHref} className="btn btn-secondary min-h-11 text-sm">
          Pokliči
        </a>
        <Link href="/kontakt" className="btn btn-primary min-h-11 text-sm">
          Povpraševanje
        </Link>
      </div>
    </div>
  );
}
