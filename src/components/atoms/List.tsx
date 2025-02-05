import { cn } from "@/lib/helpers";
import { PropsWithChildren } from "react";

type ListProps = {
  readonly className?: string;
};

export default function List({
  children,
  className,
}: PropsWithChildren<ListProps>) {
  const baseClass = "py-3 ml-6 space-y-2 list-outside list-disc *:pl-4";

  return (
    <ul role="list" className={cn(baseClass, className)}>
      {children}
    </ul>
  );
}
