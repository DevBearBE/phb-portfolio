import Heading from "@/components/atoms/Heading";
import { CounselingPricing } from "@/lib/types/pricing";
import Paragraph from "@/components/atoms/Paragraph";
import List from "@/components/atoms/List";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import LinkButton from "@/components/atoms/LinkButton";

type CounselingTariffPageProps = {
    readonly counseling: CounselingPricing;
};

export default function CounselingTariffPage({ counseling }: CounselingTariffPageProps) {
    return (
        <>
            <Heading as="h1" size='lg'>Psychologische begeleiding</Heading>
            <Paragraph>
                De kostprijs van een individuele sessie bedraagt €
                {counseling.individual}. Ik ben erkend psycholoog en aangesloten bij de psychologencommissie, alleen geen ELP-psycholoog.
                Dit betekent dat de terugbetaling voor eerstelijnspsychologische zorg niet van toepassing is.
                Veel mutualiteiten voorzien echter een gedeeltelijke terugbetaling per sessie.
                Hieronder kunt u alvast meer informatie vinden per mutualiteit. Voor
                de meest recente informatie neemt u best rechtstreeks contact op met uw
                mutualiteit.
            </Paragraph>
            <List>
                <li>
                    <Button theme="tertiairy">
                        <Link
                            href="https://www.solidaris-vlaanderen.be/terugbetaling-psycholoog#no-back"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            De Voorzorg
                        </Link>
                    </Button>
                </li>
                <li>
                    <Button theme="tertiairy">
                        <Link
                            href="https://www.helan.be/nl/ons-aanbod/ziekenfonds/voordelen-en-terugbetalingen/psychotherapie/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Onafhankelijk Ziekenfonds (Helan)
                        </Link>
                    </Button>
                </li>
                <li>
                    <Button theme="tertiairy">
                        <Link
                            href="https://www.lm-ml.be/nl/voordelen-en-diensten/terugbetaling-psychologische-begeleiding-kinderen-en-jongeren"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Liberale Mutualiteit
                        </Link>
                    </Button>
                </li>
                <li>
                    <Button theme="tertiairy">
                        <Link
                            href="https://www.vnz.be/voordelen-terugbetalingen/psycholoog/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vlaams Neutraal Ziekenfonds
                        </Link>
                    </Button>
                </li>
                <li>
                    <Button theme="tertiairy">
                        <Link
                            href="https://www.cm.be/nl/diensten-en-voordelen/geestelijke-gezondheid"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Christelijke Mutualiteit
                        </Link>
                    </Button>
                </li>
            </List>
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
    );
}