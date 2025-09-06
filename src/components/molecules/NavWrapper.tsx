import { SetStateAction } from "react";
import NavLink from "@/components/atoms/NavLink";
import { cn } from "@/lib/helpers";

type NavWrapperProps = {
  readonly showNav: boolean;
  readonly setShowNav: (value: SetStateAction<boolean>) => void;
};

export default function NavWrapper({ showNav, setShowNav }: NavWrapperProps) {
  return (
    <nav
      className={cn(
        "hidden fixed md:static lg:absolute lg:left-1/2 lg:-translate-x-1/2 md:px-2.5 md:py-1.5 bg-white flex-col md:flex-row md:gap-6 w-full md:max-w-fit items-center md:rounded-full",
        {
          flex: showNav,
        },
        "md:flex",
      )}
    >
      <NavLink path="/" onClickHandler={() => setShowNav(false)}>
        Home
      </NavLink>
      <NavLink path="/aanbod" onClickHandler={() => setShowNav(false)}>
        Aanbod
      </NavLink>
      <NavLink path="/team" onClickHandler={() => setShowNav(false)}>
        Team
      </NavLink>
        <NavLink path="/tarieven" onClickHandler={() => setShowNav(false)}>
            Tarieven
        </NavLink>
      <NavLink path="/contact" onClickHandler={() => setShowNav(false)}>
        Contact
      </NavLink>
    </nav>
  );
}
