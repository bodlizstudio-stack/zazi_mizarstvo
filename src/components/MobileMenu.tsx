"use client";

import Link from "next/link";
import { company, navLinks } from "@/data/company";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Zapri meni"
        onClick={onClose}
      />
      <div
        className={`absolute inset-x-0 top-[var(--header-h)] bottom-0 bg-ivory border-t border-line transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-2"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6" aria-label="Mobilna navigacija">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="py-3 text-2xl font-display border-b border-line/70"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 flex flex-col gap-3">
            <a href={company.phoneHref} className="btn btn-secondary" onClick={onClose}>
              Pokliči {company.phoneDisplay}
            </a>
            <a
              href={company.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Instagram {company.instagram.handle}
            </a>
            <Link href="/kontakt" className="btn btn-primary" onClick={onClose}>
              Pošlji povpraševanje
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
