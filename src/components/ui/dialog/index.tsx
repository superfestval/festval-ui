import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

export type DialogRootProps = {} & DialogPrimitive.DialogProps;

export type DialogPortalProps = {} & DialogPrimitive.DialogPortalProps;

export type DialogTriggerProps = {} & DialogPrimitive.DialogTriggerProps;

const overlayVariant = tv({
  base: "fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-zinc-950/25 backdrop-blur",
});

export type DialogOverlayProps = {} & DialogPrimitive.DialogOverlayProps &
  VariantProps<typeof overlayVariant>;

const containerVariant = tv({
  base: "max-w-[500px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white focus:outline-none",
});

export type DialogContainerProps = {} & DialogPrimitive.DialogContentProps &
  VariantProps<typeof containerVariant>;

const contentVariant = tv({
  base: "p-4",
});

export type DialogContentProps = {
  as?: React.ElementType;
} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof contentVariant>;

export type DialogTitleProps = {} & DialogPrimitive.DialogTitleProps;

export type DialogDescriptionProps =
  {} & DialogPrimitive.DialogDescriptionProps;

export type DialogCloseProps = {} & DialogPrimitive.DialogCloseProps;

const footerVariant = tv({
  base: "flex gap-4 p-4 border-t border-t-zinc-200",
});

export type DialogFooterProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof footerVariant>;

const headerVariant = tv({
  base: "p-4",
});

export type DialogHeaderProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof headerVariant>;

export const Dialog = {
  Root: ({ children, ...rest }: DialogRootProps) => {
    return <DialogPrimitive.Root {...rest}>{children}</DialogPrimitive.Root>;
  },
  Portal: ({ children, ...rest }: DialogPortalProps) => {
    return (
      <DialogPrimitive.Portal {...rest}>{children}</DialogPrimitive.Portal>
    );
  },

  Trigger: ({ children, ...rest }: DialogTriggerProps) => {
    return (
      <DialogPrimitive.Trigger {...rest}>{children}</DialogPrimitive.Trigger>
    );
  },

  Overlay: ({ children, className, ...rest }: DialogOverlayProps) => {
    return (
      <DialogPrimitive.Overlay
        className={overlayVariant({ className })}
        {...rest}
      >
        {children}
      </DialogPrimitive.Overlay>
    );
  },

  Header: ({ children, className }: DialogHeaderProps) => (
    <div className={headerVariant({ className })}>
      <DialogPrimitive.Close asChild>
        <button
          className="absolute right-4 top-4 rounded border border-zinc-200 bg-zinc-100 p-1 text-zinc-400"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </DialogPrimitive.Close>
      {children}
    </div>
  ),

  Content: ({ children, as = "form", className, ...rest }: DialogContentProps) => {
    const As = as;

    return <As {...rest} className={contentVariant({ className })}>{children}</As>;
  },

  Container: ({ children, className, ...rest }: DialogContainerProps) => {
    return (
      <DialogPrimitive.Content
        className={containerVariant({ className })}
        {...rest}
      >
        {children}
      </DialogPrimitive.Content>
    );
  },

  Title: ({ children, ...rest }: DialogTitleProps) => {
    return (
      <DialogPrimitive.Title
        className="text-xl font-bold text-zinc-500"
        {...rest}
      >
        {children}
      </DialogPrimitive.Title>
    );
  },

  Description: ({ children, ...rest }: DialogDescriptionProps) => {
    return (
      <DialogPrimitive.Description className="text-zinc-400" {...rest}>
        {children}
      </DialogPrimitive.Description>
    );
  },

  Close: ({ children, ...rest }: DialogCloseProps) => {
    return <DialogPrimitive.Close {...rest}>{children}</DialogPrimitive.Close>;
  },

  Footer: ({ children, className, ...rest }: DialogFooterProps) => {
    return (
      <div {...rest} className={footerVariant({ className })}>
        {children}
      </div>
    );
  },
};
