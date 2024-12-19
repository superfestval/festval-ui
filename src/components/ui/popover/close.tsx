import * as Popover from "@radix-ui/react-popover";
import { tv } from "tailwind-variants";

const popoverCloseVariant = tv({
  base: "absolute right-2 top-2 inline-flex cursor-pointer items-center justify-center text-zinc-400 outline-none border border-zinc-400 rounded hover:bg-zinc-100 transition-colors",
});

export type PopoverCloseProps = {} & Popover.PopoverCloseProps;

export function Close({ children, className, ...rest }: PopoverCloseProps) {
  return (
    <Popover.Close
      {...rest}
      className={popoverCloseVariant({ className })}
      aria-label="Close"
    >
      {children}
    </Popover.Close>
  );
}
