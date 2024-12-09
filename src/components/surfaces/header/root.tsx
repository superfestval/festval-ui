import { tv, VariantProps } from "tailwind-variants";

export const rootVariation = tv({
  base: "fixed left-0 top-0 w-full bg-zinc-950",
});

export type HeaderRootProps = {} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof rootVariation>;

export function Root({ children, className, ...rest }: HeaderRootProps) {
  return (
    <header className={rootVariation({ className })} {...rest}>
      <div className="m-auto flex w-full max-w-4xl items-center justify-between p-4">
        {children}
      </div>
    </header>
  );
}
