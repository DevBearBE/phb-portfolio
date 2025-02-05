import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

type NavLinkProps = {
  readonly path: string;
  readonly onClickHandler: () => void;
};

export default function NavLink({
  children,
  path,
  onClickHandler,
}: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const isActive =
    pathname.endsWith(path) ||
    pathSegments[1].toLowerCase() === path.slice(1).toLowerCase();

  return (
    <Link
      className={cn(
        "text-center font-bold px-6 py-3 w-full md:max-w-fit md:rounded-full",
        { "text-white bg-polar-green": isActive },
      )}
      href={path}
      onClick={onClickHandler}
    >
      {children}
    </Link>
  );
}
