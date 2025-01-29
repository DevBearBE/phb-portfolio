import { HTMLProps } from "react";
import { cn } from "@/lib/helpers";

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
  readonly className?: string;
  readonly type?: "button" | "submit" | "reset" | undefined;
  readonly theme: "primary" | "secondary" | "tertiairy" | "danger";
};

export default function Button({
  children,
  className,
  theme,
  type = "button",
  ...props
}: ButtonProps) {
  const baseClass = "px-6 py-2 w-fit rounded-full";

  return (
    <button
      type={type}
      className={cn(
        baseClass,
        {
          "text-white bg-polar-red hover:bg-polar-red-600": theme === "primary",
          "text-white bg-polar-green hover:bg-polar-green-400":
            theme === "secondary",
          "p-0 text-polar-red bg-transparent hover:text-polar-red-600 hover:underline":
            theme === "tertiairy",
          "text-white bg-red-500 hover:bg-red-700": theme === "danger",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
