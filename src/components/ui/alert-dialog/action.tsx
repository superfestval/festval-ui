import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogActionProps =
  {} & AlertDialogPrimitive.AlertDialogActionProps;

export function Action({ children, ...rest }: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Action {...rest}>
      {children}
    </AlertDialogPrimitive.Action>
  );
}
