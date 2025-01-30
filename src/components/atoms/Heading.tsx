import { PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

type HeadingProps = PropsWithChildren & {
  readonly as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  readonly className?: string;
  readonly size: "sm" | "md" | "lg" | "xl";
};

export default function Heading({
  children,
  as: Tag = "h1",
  className,
  size,
}: HeadingProps) {
  const baseClass = "py-2 font-bold";

  return (
    <Tag
      className={cn(
        baseClass,
        {
          "text-xl mb-0.5": size === "sm",
          "text-3xl mb-1": size === "md",
          "text-5xl mb-2": size === "lg",
          "text-7xl mb-4": size === "xl",
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
}
