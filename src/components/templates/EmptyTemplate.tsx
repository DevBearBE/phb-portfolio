import { PropsWithChildren } from "react";
import Heading from "@/components/atoms/Heading";

type EmptyPageTemplateProps = PropsWithChildren & {
  title?: string;
};

export default function EmptyPageTemplate({
  children,
  title,
}: EmptyPageTemplateProps) {
  return (
    <main className="flex-grow mx-auto my-20 max-w-[80rem] min-h-80 flex items-center justify-center">
      <section className="relative flex flex-col gap-8 items-center">
        {title && (
          <Heading as='h1' className="text-center" size="md">
            {title}
          </Heading>
        )}
        {children}
      </section>
    </main>
  );
}
