import * as Popover from "@radix-ui/react-popover";

export type PopoverRootProps = {} & Popover.PopoverProps;

export function Root({ children, ...rest }: PopoverRootProps) {
  return <Popover.Root {...rest}>{children}</Popover.Root>;
}
