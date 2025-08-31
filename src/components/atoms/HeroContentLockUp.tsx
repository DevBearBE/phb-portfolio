import { RiArrowRightSLine } from "react-icons/ri";
import Heading from "@/components/atoms/Heading";
import LinkButton from "@/components/atoms/LinkButton";

export default function HeroContentLockUp() {
  return (
    <section className="lg:x-20 lg:min-h-96 flex flex-col gap-8 items-center md:items-start justify-center">
      <Heading as="h1" size="lg">
        Praktijk Het Bergsken
      </Heading>
        <section>
          <Heading as='h2' size='sm'>
            Psychodiagnostisch onderzoek voor kinderen en jongeren
          </Heading>
          <p className="font-inter">
              Praktijk Het Bergsken helpt om sterktes en moeilijkheden in kaart te brengen, zodat de juiste ondersteuning mogelijk wordt.
              We werken multidisciplinair samen met kinder- en jeugdpsychiaters en neurologen, omdat een gezamenlijke aanpak essentieel is voor een correcte diagnosevorming.
          </p>
          <p>In beperkte mate bieden we ook psychologische begeleiding aan voor kinderen en jongeren van 7 tot 21 jaar.</p>
        </section>
          <LinkButton
            className="flex flex-row items-center"
            theme="primary"
            href="/over"
          >
            Lees meer <RiArrowRightSLine size={20} />
          </LinkButton>
    </section>
  );
}
