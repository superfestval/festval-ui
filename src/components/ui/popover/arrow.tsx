import * as Popover from "@radix-ui/react-popover";

export type PopoverArrowProps = {} & Popover.PopoverArrowProps;

export function Arrow({ children, ...rest }: PopoverArrowProps) {
  return (
    <Popover.Arrow {...rest} className="fill-zinc-50">
      {children}
    </Popover.Arrow>
  );
}
