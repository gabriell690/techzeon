import { buttonVariants } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        px-6
        py-3
        rounded-lg
        font-medium
        transition-all
        duration-300
        ${buttonVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}