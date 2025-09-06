import { fetchLocalData } from "@/lib/helpers/fetch";
import { PricingResponse, PricingResponseSchema } from "@/lib/types/pricing/responses";
import DiagnosticsTariffPage from "@/components/organisms/pages/DiagnosticsTariffPage";

export default async function DiagnosticsTariff() {
    const response = await fetchLocalData<PricingResponse>("pricing.json");
    const { diagnostics } = PricingResponseSchema.parse(response);

    return (
        <>
            <DiagnosticsTariffPage diagnostics={diagnostics} />
        </>
    );
}