export const company = {
  brand: "ŽAŽI",
  legalName: "T & A Design, Izdelava in montaža pohištva Andraž Bogataj s.p.",
  shortLegal: "Andraž Bogataj s.p.",
  activity: "Izdelava in montaža pohištva po meri",
  philosophy: "Vse je mogoče.",
  tagline: "Pohištvo po meri. Izdelano za vaš prostor.",
  description:
    "Od ideje in izmere do izdelave in montaže. Ustvarjamo unikatno pohištvo po meri za domove in poslovne prostore.",
  phoneDisplay: "041 433 960",
  phoneHref: "tel:+38641433960",
  email: "andraz.bogataj99@gmail.com",
  emailHref: "mailto:andraz.bogataj99@gmail.com",
  address: {
    street: "Fužine 10",
    postalCode: "4224",
    city: "Gorenja vas",
    country: "Slovenija",
    full: "Fužine 10, 4224 Gorenja vas, Slovenija",
  },
  /** Exact building match from OpenStreetMap Nominatim */
  geo: {
    lat: 46.0843452,
    lon: 14.0960264,
  },
  regionLabel: "Gorenja vas · Poljanska dolina · projekti po Sloveniji",
  instagram: {
    handle: "@zazi_andrazbogataj",
    url: "https://www.instagram.com/zazi_andrazbogataj/",
    username: "zazi_andrazbogataj",
  },
  taxId: "SI13526243",
  registrationNumber: "9267212000",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zazi.si",
} as const;

export const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/o-nas", label: "O nas" },
  { href: "/storitve", label: "Storitve" },
  { href: "/projekti", label: "Projekti" },
  { href: "/kako-delamo", label: "Kako delamo" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const projectTypes = [
  "Kuhinja",
  "Omara",
  "Spalnica",
  "Otroška soba",
  "Dnevna soba",
  "Kopalnica",
  "Jedilnica",
  "Masivno pohištvo",
  "Zunanji projekt",
  "Celotna oprema prostora",
  "Drugo",
] as const;
