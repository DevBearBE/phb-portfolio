import CounselingPage from "@/components/organisms/pages/CounselingPage";
import { fetchLocalData } from "@/lib/helpers/fetch";
import {
  PricingResponse,
  PricingResponseSchema,
} from "@/lib/types/pricing/responses";

export default async function Counseling() {
  const response = await fetchLocalData<PricingResponse>("pricing.json");
  const { counseling } = PricingResponseSchema.parse(response);

  return (
    <>
      <CounselingPage counseling={counseling} />
    </>
  );
}
