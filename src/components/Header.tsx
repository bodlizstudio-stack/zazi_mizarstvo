"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company, navLinks } from "@/data/company";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-ivory/95 backdrop-blur-md border-b border-line shadow-[0_8px_30px_rgba(26,23,20,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4 h-[var(--header-h)]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7" aria-label="Glavna navigacija">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-charcoal/80 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.phoneHref}
              className="text-sm font-medium tracking-wide hover:text-walnut transition-colors"
            >
              {company.phoneDisplay}
            </a>
            <Link href="/kontakt" className="btn btn-primary">
              Pošlji povpraševanje
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-line rounded-[var(--radius-md)]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Zapri meni" : "Odpri meni"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Meni</span>
            <span className="relative w-5 h-3.5" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-ink transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-ink transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
