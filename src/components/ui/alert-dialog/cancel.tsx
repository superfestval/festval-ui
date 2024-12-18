import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogCancelProps =
  {} & AlertDialogPrimitive.AlertDialogCancelProps;

export function Cancel({ children, ...rest }: AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Cancel {...rest}>
      {children}
    </AlertDialogPrimitive.Cancel>
  );
}
