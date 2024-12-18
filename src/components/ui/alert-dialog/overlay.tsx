import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogOverlayProps =
  {} & AlertDialogPrimitive.AlertDialogOverlayProps;

export function Overlay({ children, ...rest }: AlertDialogOverlayProps) {
  return (
    <AlertDialogPrimitive.Overlay
      {...rest}
      className="data-[state=open]:animate-overlay-show fixed inset-0 bg-zinc-950/25"
    >
      {children}
    </AlertDialogPrimitive.Overlay>
  );
}
