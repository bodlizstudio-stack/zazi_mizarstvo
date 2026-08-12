"use client";

import { useId, useMemo } from "react";

type SawBladeProps = {
  className?: string;
};

function polar(cx: number, cy: number, r: number, ang: number) {
  return {
    x: cx + Math.cos(ang) * r,
    y: cy + Math.sin(ang) * r,
  };
}

/** Oblika po referenci: 24T krožna žaga z barvami — srebrna plošča, zeleni obroč, temni zobje. */
export function SawBlade({ className = "" }: SawBladeProps) {
  const uid = useId().replace(/:/g, "");
  const maskId = `saw-mask-${uid}`;
  const clipId = `saw-clip-${uid}`;
  const bladeGradId = `blade-grad-${uid}`;
  const innerGradId = `inner-grad-${uid}`;

  const { outline, toothTips, slots } = useMemo(() => {
    const teeth = 24;
    const cx = 50;
    const cy = 50;
    const rTip = 48.2;
    const rCarbide = 47.4;
    const rShoulder = 44.8;
    const rGullet = 40.2;

    let outline = "";
    const toothTips: { d: string }[] = [];

    for (let i = 0; i < teeth; i++) {
      const a0 = (i / teeth) * Math.PI * 2 - Math.PI / 2;
      const step = (Math.PI * 2) / teeth;

      // Gullet (zaobljena vdolbina)
      const g1 = polar(cx, cy, rGullet, a0 + step * 0.08);
      const gMid = polar(cx, cy, rGullet - 0.6, a0 + step * 0.22);
      const g2 = polar(cx, cy, rGullet + 0.4, a0 + step * 0.36);

      // Prednja ploskev → konica (kavelj v smeri urinega kazalca)
      const faceBase = polar(cx, cy, rShoulder, a0 + step * 0.42);
      const tipFront = polar(cx, cy, rTip, a0 + step * 0.55);
      const tipBack = polar(cx, cy, rCarbide, a0 + step * 0.62);
      const backTop = polar(cx, cy, rShoulder, a0 + step * 0.78);
      const backToGullet = polar(cx, cy, rGullet + 0.2, a0 + step * 0.92);

      if (i === 0) {
        outline += `M ${g1.x.toFixed(2)} ${g1.y.toFixed(2)} `;
      } else {
        outline += `L ${g1.x.toFixed(2)} ${g1.y.toFixed(2)} `;
      }

      outline += `Q ${gMid.x.toFixed(2)} ${gMid.y.toFixed(2)} ${g2.x.toFixed(2)} ${g2.y.toFixed(2)} `;
      outline += `L ${faceBase.x.toFixed(2)} ${faceBase.y.toFixed(2)} `;
      outline += `L ${tipFront.x.toFixed(2)} ${tipFront.y.toFixed(2)} `;
      outline += `L ${tipBack.x.toFixed(2)} ${tipBack.y.toFixed(2)} `;
      outline += `L ${backTop.x.toFixed(2)} ${backTop.y.toFixed(2)} `;
      outline += `L ${backToGullet.x.toFixed(2)} ${backToGullet.y.toFixed(2)} `;

      // Zob konica (carbide tip) — temen pravokotnik
      const tipPath =
        `M ${faceBase.x.toFixed(2)} ${faceBase.y.toFixed(2)} ` +
        `L ${tipFront.x.toFixed(2)} ${tipFront.y.toFixed(2)} ` +
        `L ${tipBack.x.toFixed(2)} ${tipBack.y.toFixed(2)} ` +
        `L ${backTop.x.toFixed(2)} ${backTop.y.toFixed(2)} Z`;
      toothTips.push({ d: tipPath });
    }

    outline += "Z";

    // 4 raztezni utori z okroglim zaključkom
    const slots = Array.from({ length: 4 }, (_, i) => {
      const ang = (i / 4) * Math.PI * 2 - Math.PI / 2 + Math.PI / 8;
      const outer = polar(cx, cy, rGullet - 0.5, ang);
      const inner = polar(cx, cy, 22, ang);
      return { outer, inner, ang };
    });

    return { outline, toothTips, slots };
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
      focusable="false"
    >
      <defs>
        {/* Gradient za srebrno ploščo */}
        <radialGradient id={bladeGradId} cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="45%" stopColor="#d0d0d0" />
          <stop offset="100%" stopColor="#b0b2b0" />
        </radialGradient>

        {/* Gradient za notranje območje */}
        <radialGradient id={innerGradId} cx="40%" cy="36%" r="65%">
          <stop offset="0%" stopColor="#dcdcdc" />
          <stop offset="100%" stopColor="#c2c4c2" />
        </radialGradient>

        {/* Maska: izreže arbor in utore */}
        <mask id={maskId}>
          <rect width="100" height="100" fill="white" />
          {/* Arbor luknja */}
          <circle cx="50" cy="50" r="6.2" fill="black" />
          {/* Raztezni utori */}
          {slots.map((s, i) => (
            <g key={i}>
              <line
                x1={s.outer.x}
                y1={s.outer.y}
                x2={s.inner.x}
                y2={s.inner.y}
                stroke="black"
                strokeWidth="1.35"
                strokeLinecap="round"
              />
              <circle cx={s.inner.x} cy={s.inner.y} r="2.1" fill="black" />
            </g>
          ))}
        </mask>

        {/* Clip za območje znotraj outline */}
        <clipPath id={clipId}>
          <path d={outline} />
        </clipPath>
      </defs>

      {/* Osnovna srebrna plošča z masko (brez arborja in utorov) */}
      <path
        d={outline}
        fill={`url(#${bladeGradId})`}
        mask={`url(#${maskId})`}
      />

      {/* Zunanji zeleni obroč (ring) */}
      <circle
        cx="50"
        cy="50"
        r="39.4"
        fill="none"
        stroke="#1a7a3c"
        strokeWidth="2.8"
        clipPath={`url(#${clipId})`}
      />

      {/* Notranje svetlejše območje (disk) */}
      <circle
        cx="50"
        cy="50"
        r="34"
        fill={`url(#${innerGradId})`}
        mask={`url(#${maskId})`}
      />

      {/* Notranji zeleni obroč */}
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="#1a7a3c"
        strokeWidth="0.7"
        opacity="0.6"
        mask={`url(#${maskId})`}
      />

      {/* Carbide zobje — temno siva/antracit */}
      {toothTips.map((t, i) => (
        <path key={i} d={t.d} fill="#2a2e2a" opacity="0.92" />
      ))}

      {/* Raztezni utori — vidni kot linije */}
      {slots.map((s, i) => (
        <g key={i}>
          <line
            x1={s.outer.x}
            y1={s.outer.y}
            x2={s.inner.x}
            y2={s.inner.y}
            stroke="#888"
            strokeWidth="1.35"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle cx={s.inner.x} cy={s.inner.y} r="2.1" fill="#999" opacity="0.5" />
        </g>
      ))}

      {/* Notranji obroč okoli arborske luknje */}
      <circle
        cx="50"
        cy="50"
        r="10.5"
        fill="none"
        stroke="#aaa"
        strokeWidth="1.0"
        opacity="0.4"
      />

      {/* Arbor luknja */}
      <circle cx="50" cy="50" r="6.2" fill="#1a1714" opacity="0.9" />

      {/* Odblesk na rezilu */}
      <ellipse
        cx="43"
        cy="34"
        rx="10"
        ry="4"
        fill="white"
        opacity="0.08"
        transform="rotate(-30 43 34)"
      />
    </svg>
  );
}

/**
 * Vrteča se žaga za ozadje — zgornja polovica nad linijo.
 */
export function SawBladeBackdrop({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`pointer-events-none absolute select-none ${className}`} aria-hidden>
      <div className="relative w-full aspect-[2/1.05]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 bottom-0 w-[100%] aspect-square -translate-x-1/2 translate-y-[50%]">
            <div
              className="saw-spin-rotor h-full w-full"
              style={{ opacity: tone === "light" ? 0.55 : 0.45 }}
            >
              <SawBlade className="h-full w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]" />
            </div>
          </div>
        </div>
        <div
          className={`absolute left-[2%] right-[2%] bottom-0 h-[2.5px] rounded-full ${
            tone === "light" ? "bg-white/30" : "bg-black/20"
          }`}
        />
      </div>
    </div>
  );
}
