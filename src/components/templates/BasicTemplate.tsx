import { cn } from "@/lib/helpers";
import { PropsWithChildren } from "react";

type BasicPageTemplateProps = PropsWithChildren & {
  className?: string;
};

export default function BasicPageTemplate({
  children,
  className,
}: BasicPageTemplateProps) {
  const baseClass = "w-full flex-grow my-10 min-h-80";

  return (
    <main className={cn(baseClass, className)}>
      <section className="mx-auto max-w-[110rem] p-2 md:p-8 lg:px-16 flex flex-col gap-8">
        {children}
      </section>
    </main>
  );
}
