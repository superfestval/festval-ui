import * as Popover from "@radix-ui/react-popover";

export type PopoverTriggerProps = {} & Popover.PopoverTriggerProps;

export function Trigger({ children, ...rest }: PopoverTriggerProps) {
  return <Popover.Trigger {...rest}>{children}</Popover.Trigger>;
}
