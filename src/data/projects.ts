export type ProjectCategory =
  | "Kuhinje"
  | "Spalnice"
  | "Kopalnice"
  | "Dnevne sobe"
  | "Otroške sobe"
  | "Omare"
  | "Masivni izdelki"
  | "Mize"
  | "Zunanji projekti"
  | "Ostalo";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  excerpt: string;
  description?: string;
  challenge?: string;
  solution?: string;
  materials?: string[];
  features?: string[];
  images: string[];
  material?: string;
  location?: string;
  year?: number;
  featured?: boolean;
  instagramUrl?: string;
  awaitingPhotos?: boolean;
};

export const projects: Project[] = [
  {
    slug: "kuhinja-bela-les",
    title: "Kuhinja po meri — bela in les",
    category: "Kuhinje",
    excerpt:
      "Prostrana, odprta kuhinja z belimi elementi brez ročajev, lesenimi pulti in vgradnimi omaricami.",
    description:
      "Kuhinja po meri združuje mat belino spodnjih elementov z toplim lesom zgornjih omaric in pulta. Vključene so vgradne omare, pečica in LED osvetlitev pod omaricami.",
    materials: ["Oplemenitena iverica", "Leseni pulti", "Steklena obloga"],
    features: [
      "Elementi brez klasičnih ročajev",
      "Leseni pulti",
      "Vgradne omare do stropa",
      "LED osvetlitev delovne površine",
    ],
    material: "Bela mat + les",
    images: [
      "/images/projects/kuhinja-bela-les/01.png",
      "/images/projects/kuhinja-bela-les/02.png",
      "/images/projects/kuhinja-bela-les/03.png",
      "/images/projects/kuhinja-bela-les/04.png",
      "/images/projects/kuhinja-bela-les/05.png",
    ],
    featured: true,
  },
  {
    slug: "miza-lipa",
    title: "Jedilna miza Lipa",
    category: "Mize",
    excerpt:
      "Unikatna miza iz masivnega lesa s črno epoksi »reko« in sodobnim kovinskim podnožjem.",
    description:
      "Miza Lipa povezuje naravno strukturo lesa s črno epoksi smolo. Detajli zrnja in vozlov ostanejo vidni — sodoben kos z močnim karakterjem.",
    materials: ["Masiven les", "Epoksi smola", "Črna kovina"],
    features: [
      "Live-edge karakter lesa",
      "Črna epoksi reka",
      "Kovinsko podnožje",
    ],
    material: "Masiven les + epoksi",
    images: [
      "/images/projects/miza-lipa/02.png",
      "/images/projects/miza-lipa/03.png",
      "/images/projects/miza-lipa/01.png",
      "/images/projects/miza-lipa/04.png",
    ],
    featured: true,
  },
  {
    slug: "zunanja-kuhinja",
    title: "Zunanja kuhinja",
    category: "Zunanji projekti",
    excerpt:
      "Lesena zunanja kuhinja pod napuščem — omarice, granitni pult in detajli po meri.",
    description:
      "Zunanja kuhinja iz lesa z granitnim pultom, pomivalnim koritom in omaricami. Umestitev pod leseno konstrukcijo poveže teraso in kuhanje na prostem.",
    materials: ["Les", "Granit", "Kovina"],
    features: [
      "Omarice in predali po meri",
      "Granitni pult",
      "Zgornje omarice",
      "Umestitev v zunanji prostor",
    ],
    material: "Les + granit",
    images: [
      "/images/projects/zunanja-kuhinja/01.png",
      "/images/projects/zunanja-kuhinja/02.png",
      "/images/projects/zunanja-kuhinja/03.png",
    ],
    featured: true,
  },
];

export const projectCategories: ProjectCategory[] = [
  "Kuhinje",
  "Spalnice",
  "Kopalnice",
  "Dnevne sobe",
  "Otroške sobe",
  "Omare",
  "Masivni izdelki",
  "Mize",
  "Zunanji projekti",
  "Ostalo",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 6) {
  const featured = projects.filter((p) => p.featured);
  return (featured.length ? featured : projects).slice(0, limit);
}
