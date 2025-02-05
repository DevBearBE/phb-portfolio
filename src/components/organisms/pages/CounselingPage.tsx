import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import LinkButton from "@/components/atoms/LinkButton";
import List from "@/components/atoms/List";
import Paragraph from "@/components/atoms/Paragraph";
import { CounselingPricing } from "@/lib/types/pricing";
import Link from "next/link";

type CounselingPageProps = {
  readonly counseling: CounselingPricing;
};

export default function CounselingPage({ counseling }: CounselingPageProps) {
  return (
    <>
      <Heading as="h1" size="lg">
        Psycohologische begeleiding
      </Heading>
      <Paragraph>
        Soms word je even uit je evenwicht gehaald, wordt het allemaal eventjes
        te veel of zit je gewoon niet lekker in je vel en kan je wat extra
        ondersteuning gebruiken. Wij bieden dan graag professionele hulp. De
        focus ligt op een persoonlijke aanpak waarbij gewerkt wordt op het tempo
        van het kind of de jongere en er wordt gekeken naar wat zijn of haar
        noden zijn Er wordt tijd vrijgemaakt om samen aan de slag te gaan en te
        bekijken aan welke doelen gewerkt kan worden.{" "}
      </Paragraph>
      <Paragraph>
        Kinderen en jongeren tussen 6 en 25 jaar kunnen in onze praktijk terecht
        voor diverse problematieken.:
      </Paragraph>
      <List>
        <li>
          stemmingsproblemen (negatief zelfbeeld, laag zelfvertrouwen, negatieve
          gedachten, faalangst, stress,…)
        </li>
        <li>rouw- en verliesverwerking</li>
        <li>sociale vaardigheden</li>
        <li>assertiviteit</li>
        <li>plannen en organiseren</li>
        <li>...</li>
      </List>
      <Paragraph>
        In een eerste gesprek bekijken we wat mogelijk is op het vlak van
        begeleiding. Er wordt een vertrouwensrelatie opgebouwd en de
        moeilijkheden en krachten worden verkend. Daarna selecteren we samen
        enkele doelen waar we concreet mee aan de slag gaan. De individuele
        begeleiding van kinderen wordt gecombineerd met oudergesprekken waarin u
        als ouder feedback krijgt. Dit gebeurt steeds in samenspraak met het
        kind of de jongere.
      </Paragraph>
      <section>
        <Heading as="h2" size="sm">
          Tarieven
        </Heading>
        <Paragraph>
          De kostprijs van een individuele sessie bedraagt €
          {counseling.individual}. Sommige mutualiteiten voorzien een
          gedeeltelijke terugbetaling. Dit is afhankelijk van uw mutualiteit.
          Hieronder kunt u alvast meer informatie vinden per mutualiteit. Voor
          de meest recente informatie neemt u best contact op met uw
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
      </section>
      <section className="flex flex-col md:flex-row gap-4 items-center justify-center lg:mt-4 lg:justify-start">
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
