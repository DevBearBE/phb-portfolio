import BreadCrumb from "@/components/atoms/Breadcrumb";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import LinkButton from "@/components/atoms/LinkButton";
import Paragraph from "@/components/atoms/Paragraph";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <BreadCrumb />
      <Heading as="h1" size="lg">
        Onze praktijk
      </Heading>
      <section>
        <Heading as="h2" size="sm">
          Waar staan we voor?
        </Heading>
        <Paragraph>De visie van onze praktijk is...</Paragraph>
      </section>
      <section>
        <Heading as="h2" size="sm">
          Waarvoor kan je bij ons terecht?
        </Heading>
        <Paragraph>
          Binnen onze praktijk bieden we psychodiagnostisch onderzoek aan.
          Indien nodig kan er ook psychologische begeleiding opgestart worden,
          maar dit is op aanvraag. Voor psychodiagnostisch onderzoek focussen we
          ons op kinderen tussen 6 en 16 jaar. Een uitzondering die wij hierop
          hanteren is het uitvoeren van een intelligentieonderzoek i.f.v.
          logopedie. Een dergelijk onderzoek is reeds mogelijk vanaf de leeftijd
          van 2,5 jaar. U kan bij ons rechtstreeks een afspraak maken, er is
          geen doorverwijzing nodig. Meer info kan u terugvinden op onze{" "}
          <LinkButton theme="tertiairy" href="/aanbod">
            aanbod
          </LinkButton>{" "}
          pagina.
        </Paragraph>
      </section>
      <section>
        <Heading as="h2" size="sm">
          Waar kan je ons vinden?
        </Heading>
        <Paragraph>
          Onze praktijk bevindt zich in Lier en is gemakkelijk bereikbaar met de
          wagen of het openbaar vervoer. Er zijn voldoende parkeermogelijkheden
          vlakbij. De afspraken gaan door in huiselijke sfeer.
        </Paragraph>
        <Paragraph>
          Wilt u graag een plaatsje bemachtigen op de wachtlijst? Of had u graag
          meer info gewenst?
        </Paragraph>
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
