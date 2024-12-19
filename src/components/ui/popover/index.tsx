import { Root, PopoverRootProps } from "./root";
import { Arrow, PopoverArrowProps } from "./arrow";
import { Close, PopoverCloseProps } from "./close";
import { Anchor, PopoverAnchorProps } from "./anchor";
import { Portal, PopoverPortalProps } from "./portal";
import { Content, PopoverContentProps } from "./content";
import { Trigger, PopoverTriggerProps } from "./trigger";

export const Popover = {
  Anchor,
  Arrow,
  Close,
  Content,
  Portal,
  Root,
  Trigger,
};

export type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseProps,
  PopoverContentProps,
  PopoverPortalProps,
  PopoverRootProps,
  PopoverTriggerProps,
};
