import { tv } from "tailwind-variants";
import { VariantProps } from "tailwind-variants";
import { ButtonHTMLAttributes, ElementType } from "react";

const buttonVariant = tv({
  base: "px-4 py-2 rounded text-zinc-50 transition-colors",
  variants: {
    variant: {
      default: "bg-yellow-600 hover:bg-yellow-600/75",
      secondary: "bg-zinc-800 hover:bg-zinc-800/75",
      link: "bg-zin-100 text-yellow-600 underline",
    },
    disabled: {
      true: "bg-zinc-600 hover:bg-zinc-600/75 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ButtonProps = {
  as?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariant>;

export function Button({
  as,
  variant,
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const As = as || "button";

  return (
    <As {...rest} className={buttonVariant({ className, variant, disabled })}>
      {children}
    </As>
  );
}
