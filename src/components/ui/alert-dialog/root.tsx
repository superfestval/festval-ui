import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogRootProps = {} & AlertDialogPrimitive.AlertDialogProps;

export function Root({ children, ...rest }: AlertDialogRootProps) {
  return (
    <AlertDialogPrimitive.Root {...rest}>{children}</AlertDialogPrimitive.Root>
  );
}
