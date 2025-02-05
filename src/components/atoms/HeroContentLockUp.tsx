import { RiArrowRightSLine } from "react-icons/ri";
import Heading from "@/components/atoms/Heading";
import LinkButton from "@/components/atoms/LinkButton";

export default function HeroContentLockUp() {
  return (
    <section className="lg:x-20 lg:min-h-96 flex flex-col gap-8 items-center md:items-start justify-center">
      <Heading as="h1" size="lg">
        Praktijk Het Bergsken
      </Heading>
      <p className="font-inter">
        Psychologiepraktijk voor kinderen en jongeren. U kan bij ons terecht
        voor psychodiagnostisch onderzoek. Bovendien werken we nauw samen met
        psychiaters en neurologen in de buurt.
      </p>
      <p>Wenst u meer info over onze praktijk?</p>
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
