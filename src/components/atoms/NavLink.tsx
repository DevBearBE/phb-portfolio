import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

type NavLinkProps = PropsWithChildren & {
  readonly path: string;
  readonly onClickHandler: () => void;
};

export default function NavLink({
  children,
  path,
  onClickHandler,
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "text-center font-bold px-6 py-3 w-full md:max-w-fit md:rounded-full",
        { "text-white bg-polar-green": pathname === path },
      )}
      href={path}
      onClick={onClickHandler}
    >
      {children}
    </Link>
  );
}
