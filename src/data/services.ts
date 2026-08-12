export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  hasPage?: boolean;
};

export const services: Service[] = [
  {
    slug: "kuhinje-po-meri",
    title: "Kuhinje po meri",
    shortTitle: "Kuhinje",
    excerpt:
      "Funkcionalne kuhinje, prilagojene vašemu prostoru, ritmu in materialom.",
    description:
      "Kuhinjo načrtujemo glede na vaše navade, izmero prostora in želeni slog. Od omaric in delovnih površin do detajlov, ki prostor naredijo vašega.",
    highlights: [
      "Načrtovanje po izmeri",
      "Izbira materialov in površin",
      "Izdelava in montaža",
    ],
    featured: true,
    hasPage: true,
  },
  {
    slug: "pohistvo-po-meri",
    title: "Pohištvo po meri",
    shortTitle: "Pohištvo po meri",
    excerpt: "Unikatni kosi in oprema prostorov — od ideje do montaže.",
    description:
      "Izdelujemo pohištvo, ki se prilega prostoru in namenu. Manjši kosi ali oprema večih prostorov — vedno z individualnim pristopom.",
    highlights: [
      "Individualne rešitve",
      "Masiv in sodobni materiali",
      "Celostna izvedba",
    ],
    featured: true,
    hasPage: true,
  },
  {
    slug: "vgradne-omare",
    title: "Vgradne in garderobne omare",
    shortTitle: "Omare",
    excerpt: "Vgradne rešitve, ki izkoristijo vsak centimeter.",
    description:
      "Garderobne in vgradne omare načrtujemo glede na stene, niše in višine. Cilj: red, dostopnost in čist videz.",
    highlights: ["Vgradnja po meri", "Organizacija notranjosti", "Čist zaključek"],
    featured: true,
    hasPage: true,
  },
  {
    slug: "masivno-pohistvo",
    title: "Masivno pohištvo",
    shortTitle: "Masiv",
    excerpt: "Kosi iz masivnega lesa z občutkom za strukturo in trajnost.",
    description:
      "Masivni les uporabljamo, kjer želite toplino, karakter in dolgotrajnost. Vsak kos ima svojo teksturo in zgodbo materiala.",
    highlights: ["Masiven les", "Natančna obdelava", "Unikatni detajli"],
    featured: true,
    hasPage: true,
  },
  {
    slug: "spalnice",
    title: "Spalnice",
    shortTitle: "Spalnice",
    excerpt: "Postelje, omarice in spalni kompleti po meri.",
    description:
      "Spalnico opremljamo z mislijo na mir, shranjevanje in materiale, ki so prijetni na otip.",
    highlights: ["Postelje po meri", "Nočne omarice", "Celostna oprema"],
    hasPage: true,
  },
  {
    slug: "otroske-sobe",
    title: "Otroške sobe",
    shortTitle: "Otroške sobe",
    excerpt: "Prostor za rast — varen, funkcionalen in prilagodljiv.",
    description:
      "Otroške sobe načrtujemo tako, da zdržijo rast in spremembe. Pohištvo, ki sledi potrebam, ne obratno.",
    highlights: ["Prilagodljive rešitve", "Varna izvedba", "Pametno shranjevanje"],
    hasPage: true,
  },
  {
    slug: "kopalnisko-pohistvo",
    title: "Kopalniško pohištvo",
    shortTitle: "Kopalnice",
    excerpt: "Omarice in elementi, prilagojeni vlagi in prostoru.",
    description:
      "Kopalniško pohištvo izdelamo po meri prostora in izberemo materiale, primerne za vlažno okolje.",
    highlights: ["Po meri niš", "Odporni materiali", "Natančna montaža"],
    hasPage: true,
  },
  {
    slug: "dnevne-sobe",
    title: "Dnevne sobe",
    shortTitle: "Dnevne sobe",
    excerpt: "TV stene, police in pohištvo za skupne prostore.",
    description:
      "V dnevni sobi povežemo funkcijo in ambient — od TV elementov do polic in sedežnih rešitev po meri.",
    highlights: ["TV stene", "Police in elementi", "Uskladitev materialov"],
    hasPage: true,
  },
  {
    slug: "jedilnice",
    title: "Jedilnice",
    shortTitle: "Jedilnice",
    excerpt: "Mize in jedilniški kompleti, kjer se srečujejo ljudje.",
    description:
      "Jedilniško pohištvo izdelamo po dimenzijah prostora in številu uporabnikov — od masivnih miz do usklajenih elementov.",
    highlights: ["Mize po meri", "Uskladitev s prostorom", "Trajni materiali"],
  },
  {
    slug: "mize",
    title: "Mize",
    shortTitle: "Mize",
    excerpt: "Jedilne, delovne in unikatne mize po meri.",
    description:
      "Mizo načrtujemo glede na namen, dimenzije in material — od masiva do sodobnih kombinacij.",
    highlights: ["Unikatne dimenzije", "Masiv ali kombinacije", "Stabilna konstrukcija"],
  },
  {
    slug: "lesene-obloge",
    title: "Lesene obloge",
    shortTitle: "Obloge",
    excerpt: "Stenske in druge lesene obloge za toplino prostora.",
    description:
      "Lesene obloge dodajo prostorom teksturo in toplino. Izvedemo jih po meri in v skladu z ostalo opremo.",
    highlights: ["Stenske obloge", "Uskladitev tonov", "Natančen rez"],
  },
  {
    slug: "montaza-pohistva",
    title: "Montaža pohištva",
    shortTitle: "Montaža",
    excerpt: "Profesionalna montaža na lokaciji — do zadnjega detajla.",
    description:
      "Montaža je del naše izvedbe. Poskrbimo, da se izdelek umesti v prostor natančno in stabilno.",
    highlights: ["Montaža na lokaciji", "Zaključni detajli", "Preverjanje funkcije"],
  },
  {
    slug: "zunanje-pohistvo",
    title: "Vrtno in zunanje pohištvo",
    shortTitle: "Zunanje",
    excerpt: "Zunanje mizarske rešitve za terase in vrtove.",
    description:
      "Za zunanje projekte izberemo materiale in detajle, primerne za vremenske razmere, ter jih prilagodimo prostoru.",
    highlights: ["Terase", "Zunanje pohištvo", "Materiali za zunanjost"],
  },
  {
    slug: "terase",
    title: "Terase",
    shortTitle: "Terase",
    excerpt: "Lesene terase in povezane zunanje rešitve.",
    description:
      "Terase načrtujemo glede na teren, dostop in želeni videz. Izvedba sledi meram in uporabi prostora.",
    highlights: ["Načrt po meri", "Trajni materiali", "Čista izvedba"],
  },
];

export const homeServiceHighlights = [
  "Kuhinje po meri",
  "Dnevne sobe",
  "Spalnice",
  "Otroške sobe",
  "Kopalniško pohištvo",
  "Vgradne in garderobne omare",
  "Jedilnice",
  "Masivno pohištvo",
  "Mize",
  "Pohištvo po meri",
  "Lesene obloge",
  "Montaža pohištva",
  "Vrtno in zunanje pohištvo",
  "Terase",
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicePages() {
  return services.filter((s) => s.hasPage);
}
