import Image from "next/image";
import LinkButton from "@/components/atoms/LinkButton";

export default function NotFoundPage() {
  return (
    <>
      <Image
        className="absolute top-0 right-0 bottom-0 left-0 m-auto opacity-5 -z-10"
        src="/warning.png"
        alt="warning"
        width={400}
        height={400}
      />
      <p className="text-center">
        De pagina die u zoekt werd niet teruggevonden.
        <br />
        Deze bestaat niet meer of is tijdelijk onbeschikbaar.
      </p>
      <LinkButton theme="primary" href="/">
        Home
      </LinkButton>
    </>
  );
}
