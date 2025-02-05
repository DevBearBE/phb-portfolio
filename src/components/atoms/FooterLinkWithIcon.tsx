import { PropsWithChildren } from "react";

type FooterLinkWithIconProps = {
  readonly link: { text: string; url: string };
};

export default function FooterLinkWithIcon({
  children,
  link,
}: PropsWithChildren<FooterLinkWithIconProps>) {
  return (
    <div className="flex flex-row items-center gap-4 p-[0.1rem]">
      {children}
      <address>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      </address>
    </div>
  );
}
