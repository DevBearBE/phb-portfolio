import BreadCrumb from "@/components/atoms/Breadcrumb";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import LinkButton from "@/components/atoms/LinkButton";
import Paragraph from "@/components/atoms/Paragraph";
import Link from "next/link";
import List from "@/components/atoms/List";

export default function AboutPage() {
  return (
    <>
      <BreadCrumb />
      <Heading as="h1" size="lg">
        Onze praktijk
      </Heading>
      <section>
        <Heading as="h2" size="sm">
          Even voorstellen
        </Heading>
        <Paragraph>
            Ik ben Tinka Sebreghts, erkend psycholoog bij Praktijk Het Bergsken. Met zorg en aandacht begeleid ik kinderen, jongeren  en hun ouders doorheen psychodiagnostisch onderzoek.
            Mijn doel is elk kind te begrijpen in zijn of haar unieke ontwikkeling, zodat ouders en begeleiders duidelijke inzichten krijgen en kinderen de juiste ondersteuning kunnen ontvangen.
        </Paragraph>
          <span className='text-sm'>Tinka Sebreghts – Klinisch psycholoog (Erk. nr. Compsy 882124101 - Visumnr. 277712)</span>
      </section>
      <section>
        <Heading as="h2" size="sm">
          Psychodiagnostisch onderzoek
        </Heading>
        <Paragraph>
            Praktijk Het Bergsken richt zich op psychodiagnostisch onderzoek bij kinderen en jongeren van 6 tot 16 jaar. We brengen sterktes, moeilijkheden en ontwikkelingsnoden in kaart, zodat er een helder beeld ontstaat en de juiste ondersteuning kan worden geboden.
            Daarnaast is intelligentietesting mogelijk vanaf 2,5 jaar, bijvoorbeeld in functie van logopedie.
            Bij ons staat multidisciplinair onderzoek centraal.
            Er wordt nauw samengewerkt met kinder- en jeugdpsychiaters en neurologen, omdat een samenwerking tussen verschillende specialisten essentieel is voor een correcte diagnosevorming.
            Deze nauwe samenwerking maakt het mogelijk om een vollediger beeld van het kind te krijgen en advies op maat te formuleren.
        </Paragraph>
          <Heading as='h3' size="xs">
              Waarvoor kan je bij ons terecht?
          </Heading>
          <List>
              <li>Onderzoek bij een vermoeden ADHD</li>
              <li>Onderzoek bij een vermoeden van autisme (ASS)</li>
              <li>Intelligentieonderzoek (IQ)</li>
              <li>Aandacht- en concentratieonderzoek</li>
              <li>Breder psychologisch onderzoek, afgestemd op de vraag</li>
              <li>Onderzoek naar leerstoornissen (bv. dyslexie, dyscalculie) dient in samenwerking te gebeuren met een logopedist</li>
          </List>
          <Paragraph>
              Onze werking is steeds op maat: zorgvuldig, objectief en met oog voor het unieke verhaal van elk kind en elke jongere.
              Hierdoor zal elk traject er anders uit zien.
              Het resultaat is een helder en bruikbaar verslag, dat richting geeft aan verdere begeleiding of behandeling.
          </Paragraph>
      </section>
      <section>
        <Heading as="h2" size="sm">
          Psychologische begeleiding
        </Heading>
          <Paragraph>
              In beperkte mate bieden we ook psychologische begeleiding aan voor kinderen en jongeren van 7 tot 21 jaar.
              Deze begeleiding richt zich op psycho-educatie rond een gestelde diagnose, ondersteuning bij emotionele, sociale of ontwikkelingsvraagstukken, afgestemd op de individuele behoeften van het kind of de jongere.
          </Paragraph>
          <Heading as='h3' size="xs">
              Waar kan je ons vinden?
          </Heading>
        <Paragraph>
            Onze praktijk bevindt zich in Emblem, vlakbij Lier en is gemakkelijk bereikbaar met de wagen of het openbaar vervoer. Er zijn voldoende parkeermogelijkheden vlakbij. De afspraken gaan door in huiselijke sfeer.
            Wil je graag meer weten over onze onderzoeken of een afspraak maken?
            Je kan ons eenvoudig bereiken via telefoon of e-mail. We beantwoorden je vragen graag en helpen je verder.
            Wens je op de wachtlijst te komen voor psychodiagnostisch onderzoek, dan kan dat via de knop hieronder.
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
