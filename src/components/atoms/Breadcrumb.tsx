"use client";

import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathname: string = usePathname();
  const pageTitle: string = pathname.slice(1);

  return (
    <div className={"hidden lg:block absolute -top-20 -left-1 pt-4 -z-10"}>
      <p className={"text-extreme font-bold text-emerald-400 text-opacity-10"}>
        {pageTitle.toUpperCase()}
      </p>
    </div>
  );
}
