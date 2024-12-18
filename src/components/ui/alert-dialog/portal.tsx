import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogPortalProps =
  {} & AlertDialogPrimitive.AlertDialogPortalProps;

export function Portal({ children, ...rest }: AlertDialogPortalProps) {
  return (
    <AlertDialogPrimitive.Portal {...rest}>
      {children}
    </AlertDialogPrimitive.Portal>
  );
}
