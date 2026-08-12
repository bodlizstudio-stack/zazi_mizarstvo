import Image from "next/image";

type SawBladePhotoProps = {
  className?: string;
  /** Seconds per full rotation */
  speed?: "fast" | "normal" | "slow";
};

/**
 * Photoreal stainless blade with baked motion blur, spinning in the background.
 * Rendered on black, so mix-blend-screen drops the backdrop over dark sections.
 */
export function SawBladePhoto({ className = "", speed = "normal" }: SawBladePhotoProps) {
  const duration =
    speed === "fast" ? "2.4s" : speed === "slow" ? "14s" : "6s";

  return (
    <div
      className={`pointer-events-none absolute select-none aspect-square ${className}`}
      aria-hidden
    >
      <div
        className="saw-photo-rotor relative h-full w-full"
        style={{ animationDuration: duration }}
      >
        <Image
          src="/images/saw-blade-spin.png"
          alt=""
          fill
          sizes="(max-width: 768px) 70vw, 45vw"
          className="saw-photo-mask object-contain mix-blend-screen"
          priority={false}
        />
      </div>
    </div>
  );
}
