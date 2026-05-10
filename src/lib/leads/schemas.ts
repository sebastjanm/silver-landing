import { z } from "zod";

export const TIME_WINDOWS = ["jutro", "popoldne", "vecer"] as const;
export const URGENCY_OPTIONS = ["cim_prej", "flexible"] as const;

/** Slovenian phone — accepts +386, 00386, or local with optional spaces/dashes. */
const phoneRegex = /^(\+?386|00386|0)[\s-]?[1-9][\s\d-]{6,}$/;

export const bookingFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(8)
    .max(20)
    .regex(phoneRegex, "Neveljavna telefonska številka"),
  email: z
    .string()
    .trim()
    .email()
    .max(120)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  message: z.string().trim().max(1000).optional(),
  timeWindow: z.enum(TIME_WINDOWS).optional(),
  urgency: z.enum(URGENCY_OPTIONS).optional(),
  consent: z.literal(true, {
    message: "Soglasje je obvezno",
  }),
  source: z.string().min(1).max(40),
  utmSource: z.string().max(80).optional(),
  utmMedium: z.string().max(80).optional(),
  utmCampaign: z.string().max(80).optional(),
});

export type BookingFormInput = z.infer<typeof bookingFormSchema>;
