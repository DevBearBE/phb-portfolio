"use client";

import Button, { ButtonProps } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";

type LinkButtonProps = ButtonProps & {
  readonly href: string;
};

export default function LinkButton({
  children,
  href,
  onClick,
  ...props
}: LinkButtonProps) {
  const router = useRouter();

  return (
    <Button onClick={onClick ? onClick : () => router.push(href)} {...props}>
      {children}
    </Button>
  );
}
