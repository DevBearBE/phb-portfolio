import tailwindConfig from "../../../tailwind.config";
import { ClassValue, clsx } from "clsx";
import resolveConfig from "tailwindcss/resolveConfig";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getTailwindConfig = () => resolveConfig(tailwindConfig);
