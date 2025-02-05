import DiagnosticsPage from "@/components/organisms/pages/DiagnosticsPage";
import { fetchLocalData } from "@/lib/helpers/fetch";
import {
  PricingResponse,
  PricingResponseSchema,
} from "@/lib/types/pricing/responses";

export default async function Diagnostics() {
  const response = await fetchLocalData<PricingResponse>("pricing.json");
  const { diagnostics } = PricingResponseSchema.parse(response);

  return (
    <>
      <DiagnosticsPage diagnostics={diagnostics} />
    </>
  );
}
