"use client";

import { cn } from "@/lib/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type TabWithIconProps = {
  readonly link: { text: string; path: string };
};

export default function TabWithIcon({
  children,
  link,
}: PropsWithChildren<TabWithIconProps>) {
  const pathname = usePathname();
  const isActive = pathname.endsWith(link.path);

  return (
    <li
      className={cn("text-polar-ice-200 hover:text-polar-ice-600", {
        "text-polar-ice-600 border-b-2 border-polar-ice-600": isActive,
      })}
    >
      <Link className="md:px-8 px-2 pb-4 inline-flex gap-4" href={link.path}>
        {children}
        {link.text}
      </Link>
    </li>
  );
}
