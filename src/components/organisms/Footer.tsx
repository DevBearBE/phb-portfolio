import {
  RiCopyrightLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiMapPinLine,
  RiSmartphoneLine,
} from "react-icons/ri";
import FooterLinkWithIcon from "@/components/atoms/FooterLinkWithIcon";
import Heading from "@/components/atoms/Heading";

export default function Footer() {
  return (
    <footer className="px-10 py-8 border-t border-t-gray-200 flex flex-col-reverse md:flex-row lg:grid lg:grid-cols-4 gap-8 items-center justify-between">
      <section className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <RiCopyrightLine size={20} /> 2025
        </div>
        <div className="flex flex-row gap-2">
          <p>Website built by Kevin Bervoets</p>
          <a
            href="https://be.linkedin.com/in/kevin-bervoets-408945b1"
            target="_blank"
          >
            <RiLinkedinBoxLine color="#4b5563" size={24} />
          </a>
        </div>
      </section>
      <section className="col-start-4 flex flex-col gap-1">
        <Heading as="h1" size="sm">
          Contact
        </Heading>
        <div className="flex flex-col gap-2">
          <FooterLinkWithIcon
            link={{
              text: "Kanaalstraat 6, Emblem",
              url: "https://www.google.com/maps/place/Kanaalstraat+6,+2520+Ranst,+Belgium/@51.1560883,4.5864225,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3fc3eea0bcb81:0x8303f77331fa59d4!8m2!3d51.156085!4d4.5889974!16s%2Fg%2F11c1gmp8dd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
            }}
          >
            <RiMapPinLine color="#4b5563" size={24} />
          </FooterLinkWithIcon>
          <FooterLinkWithIcon
            link={{
              text: "+32 499/39.06.11",
              url: "tel:+32499390611",
            }}
          >
            <RiSmartphoneLine color="#4b5563" size={24} />
          </FooterLinkWithIcon>
          <FooterLinkWithIcon
            link={{
              text: "info@praktijkhetbergsken.be",
              url: "mailto:info@praktijkhetbergsken.be?subject=Meer%20info",
            }}
          >
            <RiMailLine color="#4b5563" size={24} />
          </FooterLinkWithIcon>
        </div>
      </section>
    </footer>
  );
}
