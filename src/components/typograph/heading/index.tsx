import { tv, VariantProps } from "tailwind-variants";

const headingVariant = tv({
  variants: {
    size: {
      xs: "text-base font-bold",
      sm: "text-lg font-bold",
      md: "text-xl font-bold",
      lg: "text-2xl	font-bold",
      xlg: "text-3xl font-bold",
      "2xl": "text-4xl font-bold",
      "4xl": "text-5xl font-bold",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type HeadingProps = {
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariant>;

export function Heading({
  as = "h2",
  children,
  size,
  className,
  ...rest
}: HeadingProps) {
  const As = as;

  return (
    <As className={headingVariant({ size, className })} {...rest}>
      {children}
    </As>
  );
}
