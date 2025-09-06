import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import LinkButton from "@/components/atoms/LinkButton";
import List from "@/components/atoms/List";
import Paragraph from "@/components/atoms/Paragraph";
import Link from "next/link";

export default function CounselingOfferPage() {
  return (
    <>
      <Heading as="h1" size="lg">
        Psychologische begeleiding
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
          <LinkButton theme="primary" href="/tarieven/begeleiding">
              Tarieven
          </LinkButton>
        <LinkButton theme="primary" href="/contact">
          Neem contact op
        </LinkButton>
      </section>
    </>
  );
}
