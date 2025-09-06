import { fetchLocalData } from "@/lib/helpers/fetch";
import { PricingResponse, PricingResponseSchema } from "@/lib/types/pricing/responses";
import CounselingTariffPage from "@/components/organisms/pages/CounselingTariffPage";

export default async function CounselingTariff() {
    const response = await fetchLocalData<PricingResponse>("pricing.json");
    const { counseling } = PricingResponseSchema.parse(response);

    return (
        <>
            <CounselingTariffPage counseling={counseling} />
        </>
    );
}