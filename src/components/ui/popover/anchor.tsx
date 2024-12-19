import * as Popover from "@radix-ui/react-popover";

export type PopoverAnchorProps = {} & Popover.PopoverAnchorProps;

export function Anchor({ children, ...rest }: PopoverAnchorProps) {
  return <Popover.Anchor {...rest}>{children}</Popover.Anchor>;
}
