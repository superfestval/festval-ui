import { Action, AlertDialogActionProps } from "./action";
import { Cancel, AlertDialogCancelProps } from "./cancel";
import { Content, AlertDialogContentProps } from "./content";
import { Description, AlertDialogDescriptionProps } from "./description";
import { Overlay, AlertDialogOverlayProps } from "./overlay";
import { Portal, AlertDialogPortalProps } from "./portal";
import { Root, AlertDialogRootProps } from "./root";
import { Title, AlertDialogTitleProps } from "./title";
import { Trigger, AlertDialogTriggerProps } from "./trigger";

export const AlertDialog = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Title,
  Description,
  Action,
  Cancel,
  Content,
};

export type {
  AlertDialogRootProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogPortalProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps,
};
