import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <section className="p-8 min-h-[500px] bg-white rounded-xl shadow-lg flex flex-col gap-8 items-center">
      {children}
    </section>
  );
}
