import { HTMLProps } from "react";
import { cn } from "@/lib/helpers";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  readonly className?: string;
  readonly type?: "button" | "submit" | "reset" | undefined;
  readonly theme: "primary" | "secondary" | "danger";
};

export default function Button({
  children,
  className,
  theme,
  type = "button",
  ...props
}: ButtonProps) {
  const baseClass = "px-6 py-1.5 w-fit rounded-full";

  return (
    <button
      type={type}
      className={cn(
        baseClass,
        {
          "text-white bg-polar-red": theme === "primary",
          "text-white bg-polar-green": theme === "secondary",
          "text-white bg-red-500": theme === "danger",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
