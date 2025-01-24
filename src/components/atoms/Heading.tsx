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
          "text-xl mb-0.5": size === "sm",
          "text-3xl mb-1": size === "md",
          "text-5xl mb-2": size === "lg",
          "text-7xl mb-4": size === "xl",
        },
        className,
      )}
    >
      {children}
    </h1>
  );
}
