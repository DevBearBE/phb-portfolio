import BreadCrumb from "@/components/atoms/Breadcrumb";
import FooterLinkWithIcon from "@/components/atoms/FooterLinkWithIcon";
import Heading from "@/components/atoms/Heading";
import Image from "next/image";
import Link from "next/link";
import { RiMailLine, RiMapPinLine, RiSmartphoneLine } from "react-icons/ri";
import Button from "@/components/atoms/Button";

export default function ContactPage() {
  return (
    <>
      <BreadCrumb />
      <Heading as="h1" size="lg">
        Contact
      </Heading>
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
        <Link
          href="https://www.google.com/maps/place/Kanaalstraat+6,+2520+Ranst,+Belgium/@51.1560883,4.5864225,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3fc3eea0bcb81:0x8303f77331fa59d4!8m2!3d51.156085!4d4.5889974!16s%2Fg%2F11c1gmp8dd?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <Image
            src="/phb-kessel-gm.png"
            alt="google-maps_praktijk-het-bergsken"
            className="object-contain rounded-xl shadow-lg"
            width={800}
            height={600}
          />
        </Link>
        <div className="col-start-4 flex flex-col gap-1">
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
            <Button className='mt-4' theme="secondary">
                <Link
                    href="https://app.qitonline.com/intakes/Praktijk%20Het%20Bergsken/8Tl89k3rp_3yXrHU25uyJoXfcieCXQFSRFCAVM7dUl4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Zet me op de wachtlijst
                </Link>
            </Button>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <Heading as="h2" size="sm">
          Bereikbaarheid
        </Heading>
          <p>De praktijk bevindt zich in Emblem en is gemakkelijk bereikbaar met de wagen of het openbaar vervoer.</p>
        <div>
          <p>Met de auto</p>
          <p>
              De praktijk is vlot bereikbaar via de E313 (afrit Massenhoven) en de N14.
              Er zijn voldoende parkeermogelijkheden in de directe omgeving van de praktijk, zodat je gemakkelijk met de auto kan komen.
          </p>
        </div>
        <div>
          <p>Met het openbaar vervoer</p>
          <p>
            <strong>BUS:</strong> De praktijk is bereikbaar via buslijnen van De Lijn.
              De dichtstbijzijnde bushalte is 'Emblem Kortestraat'  of 'Emblem Broechemsesteenweg', elk op ongeveer 5 minuten wandelen van de praktijk.
              Deze halte wordt bediend door lijn 42A, met verbindingen vanuit onder andere Lier en Berchem Station.
          </p>
          <p>
              <strong>TREIN:</strong> Het dichtstbijzijnde treinstation is Station Lier.
              Van daaruit kan je een bus (Halte Zagerijstraat station bus 42A richting Berchem Station) nemen naar Emblem.
          </p>
        </div>
      </section>
    </>
  );
}
