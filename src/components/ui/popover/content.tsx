import * as Popover from "@radix-ui/react-popover";
import { tv, VariantProps } from "tailwind-variants";

const popoverContentVariation = tv({
  base: "bg-zinc-100 rounded shadow-lg",
});

export type PopoverContentProps = {} & Popover.PopoverContentProps &
  VariantProps<typeof popoverContentVariation>;

export function Content({ children, className, ...rest }: PopoverContentProps) {
  return (
    <Popover.Content
      {...rest}
      className={popoverContentVariation({ className })}
      sideOffset={5}
    >
      {children}
    </Popover.Content>
  );
}
