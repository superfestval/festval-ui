import * as Popover from "@radix-ui/react-popover";

export type PopoverPortalProps = {} & Popover.PopoverPortalProps;

export function Portal({ children, ...rest }: PopoverPortalProps) {
  return <Popover.Portal {...rest}>{children}</Popover.Portal>;
}
