import CounselingOfferPage from "@/components/organisms/pages/CounselingOfferPage";
import { fetchLocalData } from "@/lib/helpers/fetch";
import { PricingResponse, PricingResponseSchema, } from "@/lib/types/pricing/responses";

export default async function CounselingOffer() {
  const response = await fetchLocalData<PricingResponse>("pricing.json");
  const { counseling } = PricingResponseSchema.parse(response);

  return (
    <>
      <CounselingOfferPage counseling={counseling} />
    </>
  );
}
