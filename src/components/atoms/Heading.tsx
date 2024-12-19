import { PropsWithChildren } from "react";
import { cn } from "@/lib/helpers";

type HeadingProps = PropsWithChildren & {
  readonly className?: string;
  readonly size: "sm" | "md" | "lg" | "xl";
};

export default function Heading({ children, className, size }: HeadingProps) {
  const baseClass = "py-2 font-bold";

  return (
    <h1
      className={cn(
        baseClass,
        {
          "text-xl": size === "sm",
          "text-3xl": size === "md",
          "text-5xl": size === "lg",
          "text-9xl": size === "xl",
        },
        className,
      )}
    >
      {children}
    </h1>
  );
}
