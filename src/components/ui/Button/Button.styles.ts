import type { ButtonVariant } from "./Button.types";

export const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "bg-zinc-800 text-white hover:bg-zinc-700",

  outline:
    "border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white",
};