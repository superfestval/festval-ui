import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useTreeView } from "./root";

const variant = tv({
  base: "p-2 data-[state=closed]:hidden",
});

export type TreeViewPortalProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof variant>;

export function TreeViewPortal({
  children,
  className,
  ...rest
}: TreeViewPortalProps) {
  const { state } = useTreeView();

  return (
    <div data-state={state} className={variant({ className })} {...rest}>
      {children}
    </div>
  );
}
