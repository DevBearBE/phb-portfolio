import { DiagnosticsPricing } from "@/lib/types/pricing";
import PricingTableRow from "../atoms/PricingTableRow";

type PricingTableProps = {
  readonly diagnostics: DiagnosticsPricing;
};

export default function PricingTable({ diagnostics }: PricingTableProps) {
  return (
    <article className="w-full lg:w-3/4 mx-auto text-polar-ice-600">
      <PricingTableRow label="Intakegesprek" price={diagnostics.intake} />
      <PricingTableRow
        label="Screeningvragenlijsten"
        price={diagnostics.screeningSurvey}
      />
      <PricingTableRow
        label="Intelligentieonderzoek"
        price={diagnostics.intelligence}
      />
      <PricingTableRow
        label="Neuropsychologisch onderzoek (per sessie)"
        price={diagnostics.neuro}
      />
      <PricingTableRow
        label="Sociaal-cognitief functioneren (per sessie)"
        price={diagnostics.ass}
      />
      <PricingTableRow label="Adviesgesprek" price={diagnostics.advice} />
    </article>
  );
}
