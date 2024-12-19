import { Popover, PopoverPortalProps } from "@/components/ui/popover";
import { X } from "lucide-react";
export type MenuPortalProps = {} & PopoverPortalProps;

export function Portal({ children, ...rest }: MenuPortalProps) {
  return (
    <Popover.Portal {...rest}>
      <Popover.Content {...rest} className="w-[276px]">
        {children}
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  );
}
