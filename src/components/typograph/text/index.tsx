import { ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

const textVariant = tv({
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xlg: "text-xl font-bold",
      "2xl": "text-2xl font-bold",
      "4xl": "text-3xl font-bold",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type TextProps = {
  as?: ElementType;
} & React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariant>;

export function Text({ as = "p", children, size, ...rest }: TextProps) {
  const As = as;

  return (
    <As className={textVariant({ size })} {...rest}>
      {children}
    </As>
  );
}
