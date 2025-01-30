import BreadCrumb from "@/components/atoms/Breadcrumb";
import FooterAddressWithIcon from "@/components/atoms/FooterAddressWithIcon";
import Heading from "@/components/atoms/Heading";
import Image from "next/image";
import Link from "next/link";
import { RiMailLine, RiMapPinLine, RiSmartphoneLine } from "react-icons/ri";

export default function ContactPage() {
  return (
    <>
      <BreadCrumb />
      <Heading as="h1" size="lg">
        Contact
      </Heading>
      <section className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
        <Link
          href="https://www.google.de/maps/place/Het+Bergsken+7,+2500+Lier/@51.1442,4.5710141,16z/data=!4m6!3m5!1s0x47c3fc6fec8b8baf:0x11e3cfd190480a76!8m2!3d51.1435505!4d4.5709283!16s%2Fg%2F11hgfm1bnz?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <Image
            src="/phb-gm.png"
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
            <FooterAddressWithIcon
              icon={<RiMapPinLine color="#4b5563" size={24} />}
              addressLine={
                <a
                  href="https://www.google.be/maps/place/Het+Bergsken+7,+2500+Lier/@51.1435538,4.5683534,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3fc6fec8b8baf:0x11e3cfd190480a76!8m2!3d51.1435505!4d4.5709283!16s%2Fg%2F11hgfm1bnz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
                  target="_blank"
                >
                  Het Bergsken 7, Lier
                </a>
              }
            />
            <FooterAddressWithIcon
              icon={<RiSmartphoneLine color="#4b5563" size={24} />}
              addressLine={<a href="tel:+32499390611">+32 499/39.06.11</a>}
            />
            <FooterAddressWithIcon
              icon={<RiMailLine color="#4b5563" size={24} />}
              addressLine={
                <a href="mailto:info@praktijkhetbergsken.be?subject=Meer%20info">
                  info@praktijkhetbergsken.be
                </a>
              }
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <Heading as="h2" size="sm">
          Bereikbaarheid
        </Heading>
        <div>
          <p>Met de auto</p>
          <p>
            De praktijk ligt op 2 minuten rijden van de R16, ring van Lier. Aan
            het begin van de straat is een grote parking op wandelafstand.
            Tevens zijn er enkele parkeerplaatsen vlak voor de deur.
          </p>
        </div>
        <div>
          <p>Met het openbaar vervoer</p>
          <p>
            Op ongeveer 50 meter van de praktijk bevindt zich de bushalte 'Lier
            Stadion'. Hier stopt bus 1, die als route 'Broechem - Lisp-Herderin'
            heeft.
          </p>
          <p>
            Het treinstation van Lier ligt op 2km van de praktijk. U kan deze
            afstand wandelen of buslijn 1 nemen tot aan de halte 'Lier Stadion'.
          </p>
        </div>
      </section>
    </>
  );
}
