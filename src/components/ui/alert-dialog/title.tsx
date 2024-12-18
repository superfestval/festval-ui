import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogTitleProps =
  {} & AlertDialogPrimitive.AlertDialogTitleProps;

export function Title({ children, ...rest }: AlertDialogTitleProps) {
  return (
    <AlertDialogPrimitive.Title
      {...rest}
      className="text-xl font-bold text-zinc-600"
    >
      {children}
    </AlertDialogPrimitive.Title>
  );
}
