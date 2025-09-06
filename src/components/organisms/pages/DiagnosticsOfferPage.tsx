import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import LinkButton from "@/components/atoms/LinkButton";
import List from "@/components/atoms/List";
import Paragraph from "@/components/atoms/Paragraph";
import Link from "next/link";

export default function DiagnosticsOfferPage() {
  return (
    <>
      <Heading as="h1" size="lg">
        Diagnostisch onderzoek
      </Heading>
      <Paragraph>
        Wij bieden diagnostisch onderzoek aan voor kinderen en jongeren van 6
        tot 16 jaar, met uitzondering van intelligentieonderzoek i.f.v.
        logopedie. Dit is reeds mogelijk vanaf de leeftijd van 2,5 jaar. Met een
        diagnostisch onderzoek gaan we op zoek naar een verklaring voor de
        aanwezige moeilijkheden. Dit kan handvatten bieden voor verdere
        ondersteuning of begeleiding.
      </Paragraph>
      <Paragraph>
        Wanneer ouders vragen hebben over de ontwikkeling van hun kind of
        wanneer er een vermoeden is van een leer- of ontwikkelingsstoornis (o.a.
        ADHD, Autisme (ass),..), dan kan u zich aanmelden voor een diagnostisch
        onderzoek. Het kan zijn dat u of de school specifieke vragen heeft
        omtrent de intelligentie, plannings- en organisatorische vaardigheden,
        aandacht en concentratie, het geheugen of het sociaal-emotioneel
        functioneren van jouw kind. Een diagnostisch onderzoek kan worden
        uitgevoerd om een duidelijk zicht te krijgen op wat er aan de hand is om
        vervolgens een aanpak op maat te kunnen voorstellen. Een
        psychodiagnostisch onderzoek is aangewezen bij het vermoeden van diverse
        moeilijkheden:
      </Paragraph>
      <List>
        <li>Intelligentie- en leermoeilijkheden</li>
        <li>Aandachts- en concentratieproblemen</li>
        <li>Planning- en organisatieproblemen</li>
        <li>Automatisatieproblemen</li>
        <li>Moeilijkheden in het sociaal-cognitief functioneren</li>
        <li>Emotionele moeilijkheden</li>
        <li>Gedragsmoeilijkheden</li>
        <li>Vermoeden van een ontwikkelingsstoornis (ADHD, autisme/ASS)</li>
      </List>
      <Paragraph>
        Soms is een breed multidisciplinair onderzoek nodig. Hiervoor werken we
        samen met verschillende hulpverleners en gespecialiseerde artsen
        (kinderpsychiater, kinderneuroloog) uit de regio.
      </Paragraph>
      <List>
        <li>
          Voor problemen met grove en/of fijne motoriek, visuomotoriek,
          lateralisatie,…. Werken we samen met psychomotorisch therapeuten.
        </li>
        <li>
          Bij het vermoeden van problemen in de taalontwikkeling of de spraak
          werken we samen met logopediste{" "}
          <Button theme="tertiairy">
            <Link
              href="https://www.logopediste-kemps.be/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Helene Kemps
            </Link>
          </Button>{" "}
          (Emblem).
        </li>
        <li>
          Soms is een doorverwijzing naar een gespecialiseerd arts zoals een
          kinderpsychiater of kinderneuroloog nodig.
        </li>
      </List>
      <section>
        <Heading as="h2" size="sm">
          Werkwijze
        </Heading>
        <Paragraph>
          Tijdens het intakegesprek bekijken we samen met de ouders waar de
          problemen zich situeren, wat moeilijk loopt en wat goed gaat. Er wordt
          uitgebreid ingegaan op de zorgen die u en/of andere mensen uit de
          omgeving zich maken. Indien de ouders akkoord zijn, wordt ook de
          school gecontacteerd. We bekijken samen op welke vragen jullie
          antwoord willen en welke doelen jullie voorop stellen. Op basis van
          het intakegesprek wordt het verdere individuele traject uitgestippeld
          en wordt bekeken welke onderzoeken nodig zijn. Na de verwerking van de
          resultaten wordt een adviesgesprek gepland waarin de resultaten worden
          besproken en een advies wordt geformuleerd voor verdere begeleiding of
          ondersteuning voor uw kind.
        </Paragraph>
      </section>
      <section>
        <Heading as="h2" size="sm">
          Aanbod
        </Heading>
        <List>
          <li>Screeningsvragenlijsten</li>
          <li>Intelligentieonderzoek</li>
          <li>
            Neuropsychologisch onderzoek (aandacht en concentratie, plannings-
            en organisatorische vaardigheden, executieve functies, geheugen,..)
          </li>
          <li>
            Belevingsonderzoek (onderzoek naar het emotioneel welbevinden)
          </li>
          <li>Onderzoek naar ontwikkelingsstoornissen (o.a. ADHD)</li>
        </List>
      </section>
      <section className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8 lg:mt-12 lg:justify-start">
        <Button theme="secondary">
          <Link
            href="https://app.qitonline.com/intakes/Praktijk%20Het%20Bergsken/8Tl89k3rp_3yXrHU25uyJoXfcieCXQFSRFCAVM7dUl4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zet me op de wachtlijst
          </Link>
        </Button>
          <LinkButton theme="primary" href="/tarieven/diagnostisch-onderzoek">
          Tarieven
        </LinkButton>
        <LinkButton theme="primary" href="/contact">
          Neem contact op
        </LinkButton>
      </section>
    </>
  );
}
