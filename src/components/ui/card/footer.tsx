import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const footerVariant = tv({
  base: "flex items-start justify-between rounded-b bg-zinc-100 p-4 rounded-b border-t border-t-zinc-200",
});

export type FooterProps = {} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof footerVariant>;

export const Footer = ({ children, className, ...rest }: FooterProps) => {
  return (
    <div className={footerVariant({ className })} {...rest}>
      {children}
    </div>
  );
};
