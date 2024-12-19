import { PropsWithChildren } from "react";

export default function Overlay({ children }: PropsWithChildren) {
  return (
    <section className="bg-opacity-50 backdrop-blur w-full h-full z-50 fixed top-0 left-0">
      {children}
    </section>
  );
}
