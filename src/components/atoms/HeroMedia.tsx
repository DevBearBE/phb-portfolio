import Image from "next/image";

export default function HeroMedia() {
  return (
    <section className="p-4 md:p-8 lg:p-12 mb-8 lg:mb-0 md:min-h-96 flex items-center justify-center bg-polar-ice-100 rounded-xl shadow-lg">
      <Image
      className="rounded-xl shadow-md"
        src="/maurice-and-froggy.jpg"
        alt="image-placeholder"
        width={640}
        height={480}
      />
    </section>
  );
}
