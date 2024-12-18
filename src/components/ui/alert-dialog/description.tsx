import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogDescriptionProps =
  {} & AlertDialogPrimitive.AlertDialogDescriptionProps;

export function Description({
  children,
  ...rest
}: AlertDialogDescriptionProps) {
  return (
    <AlertDialogPrimitive.Description {...rest} className="text-zinc-500">
      {children}
    </AlertDialogPrimitive.Description>
  );
}
