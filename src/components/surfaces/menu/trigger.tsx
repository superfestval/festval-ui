import { Popover } from "@/components/ui/popover";
import { PopoverTriggerProps } from "@radix-ui/react-popover";

export type MenuTriggerProps = {} & PopoverTriggerProps;

export function Trigger({ children, ...rest }: MenuTriggerProps) {
  return <Popover.Trigger {...rest}>{children}</Popover.Trigger>;
}
