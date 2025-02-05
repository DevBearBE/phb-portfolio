import { z } from "zod";
import { CounselingPricingSchema, DiagnosticsPricingSchema } from "..";

export const PricingResponseSchema = z.object({
  counseling: CounselingPricingSchema,
  diagnostics: DiagnosticsPricingSchema,
});

export type PricingResponse = z.infer<typeof PricingResponseSchema>;
