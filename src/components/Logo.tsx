"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { SawBlade } from "@/components/SawBlade";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const pathname = usePathname();

  const goToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={goToTop}
      className={`inline-flex items-center gap-3 text-inherit ${className}`}
      aria-label={`${company.brand} — na začetek`}
    >
      <span
        className={`relative inline-block w-10 h-7 overflow-hidden ${
          variant === "light" ? "text-ivory" : "text-ink"
        }`}
        aria-hidden
      >
        <SawBlade className="absolute left-1/2 bottom-0 w-[2.55rem] h-[2.55rem] -translate-x-1/2 translate-y-[48%]" />
        <span
          className={`absolute left-0 right-0 bottom-0 h-[2px] ${
            variant === "light" ? "bg-ivory" : "bg-ink"
          }`}
        />
      </span>
      <span className="font-display text-2xl tracking-[0.18em] font-semibold">
        {company.brand}
      </span>
    </Link>
  );
}
