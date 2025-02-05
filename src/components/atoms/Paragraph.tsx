import { cn } from "@/lib/helpers";
import { PropsWithChildren } from "react";

type ParagraphProps = {
  readonly className?: string;
};

export default function Paragraph({
  children,
  className,
}: PropsWithChildren<ParagraphProps>) {
  const baseClass = "py-3 leading-relaxed";

  return <p className={cn(baseClass, className)}>{children}</p>;
}
