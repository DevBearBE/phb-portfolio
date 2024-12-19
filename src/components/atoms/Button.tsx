import { HTMLProps } from "react";
import { cn } from "@/lib/helpers";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
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
  return (
    <button
      type={type}
      className={cn(
        "px-6 py-1 min-w-fit rounded-full",
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
