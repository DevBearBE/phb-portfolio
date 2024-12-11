"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Button from "@/components/atoms/Button";
import NavWrapper from "@/components/molecules/NavWrapper";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="p-4 flex flex-col lg:flex-row gap-4 items-center w-full">
      <Link href={"/"} onClick={() => setShowNav(false)}>
        <Image
          src={"/logo-phb.svg"}
          alt={"logo praktijk"}
          width={150}
          height={150}
        />
      </Link>

      <Button
        className="p-2 md:hidden"
        theme="secondary"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <HiXMark size={32} /> : <HiBars3 size={32} />}
      </Button>

      <NavWrapper showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
}
