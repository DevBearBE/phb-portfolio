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
        label="Intelligentieonderzoek i.f.v. logopedie met verslag (vanaf 2.5 jaar)"
        price={diagnostics.intelligence.logopaedics}
      />
      <PricingTableRow
        label="Uitgebreid intelligentieonderzoek"
        price={diagnostics.intelligence.extensive}
      />
      <PricingTableRow
        label="Neuropsychologisch onderzoek"
        price={diagnostics.neuro}
      />
      <PricingTableRow
        label="Onderzoek sociaal-cognitief functioneren (autisme)"
        price={diagnostics.ass}
      />
      <PricingTableRow
        label="Belevingsonderzoek (prijs per sessie van 1 uur)"
        price={diagnostics.experienceSurvey}
      />
      <PricingTableRow label="Klasobservatie" price={diagnostics.observation} />
      <PricingTableRow label="Adviesgesprek" price={diagnostics.advice} />
    </article>
  );
}
