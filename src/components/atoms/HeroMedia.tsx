import Image from "next/image";

export default function HeroMedia() {
  return (
    <section className="p-4 mb-8 lg:mb-0 md:min-h-96 flex items-center justify-center bg-polar-ice-100 rounded-xl shadow-lg">
      <Image
        src="/img-placeholder.png"
        alt="image-placeholder"
        width={400}
        height={400}
      />
    </section>
  );
}
