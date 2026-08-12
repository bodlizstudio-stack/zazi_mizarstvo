import { z } from "zod";
import { projectTypes } from "@/data/company";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Vnesite ime in priimek.")
    .max(100, "Ime je predolgo."),
  phone: z
    .string()
    .trim()
    .min(6, "Vnesite telefonsko številko.")
    .max(40, "Telefonska številka je predolga.")
    .regex(/^[\d\s+/()-]+$/, "Telefonska številka ni veljavna."),
  email: z
    .string()
    .trim()
    .email("Vnesite veljaven e-poštni naslov.")
    .max(120),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, {
    message: "Izberite vrsto projekta.",
  }),
  description: z
    .string()
    .trim()
    .min(20, "Opišite projekt (vsaj 20 znakov).")
    .max(4000, "Opis je predolg."),
  dimensions: z.string().trim().max(300).optional().or(z.literal("")),
  preferredDate: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  gdpr: z.literal(true, {
    message: "Za oddajo povpraševanja je potrebno soglasje.",
  }),
  /** Honeypot — must stay empty */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
