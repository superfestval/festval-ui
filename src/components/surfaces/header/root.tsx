import { tv, VariantProps } from "tailwind-variants";

export const rootVariation = tv({
  base: "fixed left-0 top-0 flex max-h-20 w-full items-center justify-between bg-zinc-950 p-4",
});

export type RootProps = {} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof rootVariation>;

export function Root({ children, className, ...rest }: RootProps) {
  return (
    <header className={rootVariation({ className })} {...rest}>
      {children}
    </header>
  );
}
