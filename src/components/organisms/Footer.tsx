import { RiCopyrightLine, RiLinkedinBoxLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="mx-10 py-8 border-t border-t-gray-200 flex lg:grid lg:grid-cols-4 gap-4 items-center justify-between">
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
        <div>
          <p className="font-bold">Contact</p>
          <p>
            <span className="font-bold mr-2">M:</span>+32 499/39.06.11
          </p>
          <p>
            <span className="font-bold mr-2">E:</span>
            info@praktijkhetbergsken.be
          </p>
        </div>
        <div>
          <p className="font-bold">Adres</p>
          <p>Het Bergsken 7, Lier</p>
        </div>
      </section>
    </footer>
  );
}
