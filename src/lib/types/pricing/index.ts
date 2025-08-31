import { z } from "zod";

export const CounselingPricingSchema = z.object({
  individual: z.number(),
});

export type CounselingPricing = z.infer<typeof CounselingPricingSchema>;

export const DiagnosticsPricingSchema = z.object({
  advice: z.number(),
  ass: z.number(),
  intake: z.number(),
  intelligence: z.number(),
  neuro: z.number(),
  screeningSurvey: z.number(),
});

export type DiagnosticsPricing = z.infer<typeof DiagnosticsPricingSchema>;
