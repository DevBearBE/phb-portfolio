import {
  RiCopyrightLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiMapPinLine,
  RiSmartphoneLine,
} from "react-icons/ri";
import FooterAddressWithIcon from "../atoms/FooterAddressWithIcon";

export default function Footer() {
  return (
    <footer className="px-10 py-8 border-t border-t-gray-200 flex lg:grid lg:grid-cols-4 gap-4 items-center justify-between">
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
      <section className="col-start-4 flex flex-col gap-4">
        <h3 className="font-bold text-lg">Contact</h3>
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
      </section>
    </footer>
  );
}
