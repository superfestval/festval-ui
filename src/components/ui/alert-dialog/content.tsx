import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export type AlertDialogContentProps =
  {} & AlertDialogPrimitive.AlertDialogContentProps;

export function Content({ children, ...rest }: AlertDialogContentProps) {
  return (
    <AlertDialogPrimitive.Content
      {...rest}
      className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
    >
      {children}
    </AlertDialogPrimitive.Content>
  );
}
