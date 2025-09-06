import DiagnosticsOfferPage from "@/components/organisms/pages/DiagnosticsOfferPage";
import { fetchLocalData } from "@/lib/helpers/fetch";
import { PricingResponse, PricingResponseSchema, } from "@/lib/types/pricing/responses";

export default async function DiagnosticsOffer() {
  const response = await fetchLocalData<PricingResponse>("pricing.json");
  const { diagnostics } = PricingResponseSchema.parse(response);

  return (
    <>
      <DiagnosticsOfferPage diagnostics={diagnostics} />
    </>
  );
}
