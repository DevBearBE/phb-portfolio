import { ReactNode } from "react";

type FooterAddressWithIconProps = {
  icon: ReactNode;
  addressLine: ReactNode;
};

export default function FooterAddressWithIcon({
  addressLine,
  icon,
}: FooterAddressWithIconProps) {
  return (
    <div className="flex flex-row items-center gap-4 p-[0.1rem]">
      {icon}
      <address>{addressLine}</address>
    </div>
  );
}
