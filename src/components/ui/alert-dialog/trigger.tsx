import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogTriggerProps =
  {} & AlertDialogPrimitive.AlertDialogTriggerProps;

export function Trigger({ children, ...rest }: AlertDialogTriggerProps) {
  return (
    <AlertDialogPrimitive.Trigger {...rest}>
      {children}
    </AlertDialogPrimitive.Trigger>
  );
}
