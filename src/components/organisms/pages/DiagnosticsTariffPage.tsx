import Heading from "@/components/atoms/Heading";
import Paragraph from "@/components/atoms/Paragraph";
import PricingTable from "@/components/molecules/PricingTable";
import { DiagnosticsPricing } from "@/lib/types/pricing";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import LinkButton from "@/components/atoms/LinkButton";

type DiagnosticsTariffPageProps = {
    readonly diagnostics: DiagnosticsPricing;
}

export default function DiagnosticsTariffPage({ diagnostics }: DiagnosticsTariffPageProps) {
    return (
        <>
            <Heading as="h1" size="lg">Diagnostisch onderzoek</Heading>
            <section>
                <Paragraph>
                    De onderzoeken die worden uitgevoerd zijn afhankelijk van de problematiek.
                    Samen met de betrokkenen wordt een individueel traject uitgestippeld en bepaald welke onderzoeken nodig zijn.
                    De prijzen van de onderzoeken zijn inclusief consult, gebruik van het materiaal, scoring en verslaggeving.
                    De hoge prijzen zijn het gevolg van het dure psychodiagnostisch materiaal dat wordt gebruikt voor een kwalitatief onderzoek.
                    Een diagnostisch traject is meestal een combinatie van verschillende onderzoeken.
                </Paragraph>
                <Paragraph>
                    Tijdens een intakegesprek wordt een diagnostisch traject op maat uitgestippeld en kan een exacte kostprijs worden meegedeeld.
                </Paragraph>
                <PricingTable diagnostics={diagnostics} />
                <Paragraph>
                    Voor psychodiagnostisch onderzoek voorzien de meeste mutualiteiten geen standaard terugbetaling.
                    Sommige ziekenfondsen maken echter geen onderscheid tussen psychologische begeleiding en psychodiagnostiek, waardoor er toch een beperkte tegemoetkoming mogelijk kan zijn.
                    Omdat dit per mutualiteit en polis verschilt, raden we aan om dit rechtstreeks bij uw ziekenfonds na te vragen. Indien gewenst bezorgen wij u na afloop van het onderzoek een attest dat u kan indienen bij de mutualiteit.
                </Paragraph>
            </section>
            <section className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6 lg:mt-8 lg:justify-start">
                <Button theme="secondary">
                    <Link
                        href="https://app.qitonline.com/intakes/Praktijk%20Het%20Bergsken/8Tl89k3rp_3yXrHU25uyJoXfcieCXQFSRFCAVM7dUl4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Zet me op de wachtlijst
                    </Link>
                </Button>
                <LinkButton theme="primary" href="/contact">
                    Neem contact op
                </LinkButton>
            </section>
        </>
    )
}