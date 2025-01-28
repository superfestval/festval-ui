import { tv } from "tailwind-variants";
import { VariantProps } from "tailwind-variants";
import React, {
  ButtonHTMLAttributes,
  ElementType,
  isValidElement,
} from "react";

const buttonVariant = tv({
  base: "px-4 py-2 rounded text-zinc-50 transition-colors flex gap-2 items-center justify-center",
  variants: {
    variant: {
      default: "bg-yellow-600 hover:bg-yellow-700",
      secondary: "bg-zinc-800 text-zinc-400 hover:bg-zinc-800/75",
      link: "bg-zin-100 text-yellow-600 underline",
      destructive: "bg-rose-600 text-rose-200 hover:bg-rose-700",
      ghost: "bg-zinc-200 text-zinc-500 hover:bg-zinc-200/75",
    },
    disabled: {
      true: "bg-zinc-600 hover:bg-zinc-700 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ButtonProps = {
  as?: ElementType;
  asChild?: boolean;
  iconLeft?: React.ElementType;
  iconRight?: React.ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariant> &
  React.ComponentPropsWithoutRef<ElementType>;

export function Button({
  as,
  asChild,
  variant,
  children,
  disabled,
  className,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) {
  const As = as || "button";

  const IconLeft = iconLeft;
  const IconRight = iconRight;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: buttonVariant({ className, variant, disabled }),
    } as any);
  }

  return (
    <As {...rest} className={buttonVariant({ className, variant, disabled })}>
      {IconLeft && <IconLeft />}
      {children}
      {IconRight && <IconRight />}
    </As>
  );
}

Button.displayName = "Button";