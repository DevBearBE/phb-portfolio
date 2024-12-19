"use client";

import Image from "next/image";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import { addCookie } from "@/lib/storage/cookies";

export default function CookieBanner() {
  const onCookieConsentClickHandler = async () => {
    await addCookie("consent", "true");
  };

  return (
    <div
      role="banner"
      className="md:m-2 p-5 lg:p-10 max-w-full md:max-w-[38rem] absolute bottom-0 lg:bottom-2 md:right-2 bg-white md:rounded-xl flex flex-col gap-12 shadow-lg"
    >
      <section>
        <div className="flex flex-row gap-8 items-center justify-between">
          <Image src="/cookies.png" alt="cookies" width={125} height={125} />
          <Heading size="md">Wij houden van cookies! Jij ook?</Heading>
        </div>
        <p className="text-start md:text-justify pt-4">
          Wij gebruiken enkel functionele cookies op onze website om jullie
          ervaring te verbeteren. De cookies worden niet gebruikt om data te
          verzamelen, noch om gepersonaliseerde reclame te kunnen tonen en al
          zeker niet om je surfgedrag te analyseren.
        </p>
      </section>
      <section>
        <div className="text-center md:text-end">
          <Button
            theme="primary"
            className="py-3 font-bold"
            onClick={onCookieConsentClickHandler}
          >
            Ik begrijp het!
          </Button>
        </div>
      </section>
    </div>
  );
}
