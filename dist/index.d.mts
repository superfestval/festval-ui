import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import * as react from 'react';
import react__default, { ReactNode, HTMLAttributes, ElementType, InputHTMLAttributes, LabelHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as _react_input_mask from '@react-input/mask';
import { InputMaskProps } from '@react-input/mask';

declare const variant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "flex-1 rounded-b bg-zinc-50 p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "flex-1 rounded-b bg-zinc-50 p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type BodyProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement> & VariantProps<typeof variant>;

type RootProps = {
    icon?: ElementType;
    children: ReactNode;
};

declare const headerVariant$1: tailwind_variants.TVReturnType<{} | {} | {}, undefined, undefined, tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, undefined, tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type HeaderProps = {
    icon?: ElementType;
    iconColor?: 'alert' | 'info' | 'success' | 'destructive' | undefined;
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement> & VariantProps<typeof headerVariant$1>;

type CardTextProps = {
    children: ReactNode;
};

declare const cardfooterVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "flex items-start justify-between rounded-t bg-zinc-100 p-4 rounded-b border-t border-t-zinc-200", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "flex items-start justify-between rounded-t bg-zinc-100 p-4 rounded-b border-t border-t-zinc-200", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type CardFooterProps = {} & HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardfooterVariant>;

type CardHeadingProps = {
    children: ReactNode;
};

declare const Card: {
    Root: ({ children }: RootProps) => react_jsx_runtime.JSX.Element;
    Header: ({ children, iconColor, icon: Icon }: HeaderProps) => react_jsx_runtime.JSX.Element;
    Body: ({ children, className, ...rest }: BodyProps) => react_jsx_runtime.JSX.Element;
    CardHeading: ({ children }: CardHeadingProps) => react_jsx_runtime.JSX.Element;
    CardText: ({ children, ...rest }: CardTextProps) => react_jsx_runtime.JSX.Element;
    CardFooter: ({ children, className, ...rest }: CardFooterProps) => react_jsx_runtime.JSX.Element;
};

type TableRootProps = {} & React.TableHTMLAttributes<HTMLTableElement>;
type THeadProps = {} & React.TableHTMLAttributes<HTMLTableSectionElement>;
type TBodyProps = {} & React.TableHTMLAttributes<HTMLTableSectionElement>;
type RowProps = {} & React.TableHTMLAttributes<HTMLTableRowElement>;
declare const cellHeadVariant: tailwind_variants.TVReturnType<{
    position: {
        first: string;
        last: string;
    };
}, undefined, "bg-zinc-200 p-4 text-left text-zinc-600", tailwind_variants_dist_config.TVConfig<{
    position: {
        first: string;
        last: string;
    };
}, {
    position: {
        first: string;
        last: string;
    };
}>, {
    position: {
        first: string;
        last: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    position: {
        first: string;
        last: string;
    };
}, undefined, "bg-zinc-200 p-4 text-left text-zinc-600", tailwind_variants_dist_config.TVConfig<{
    position: {
        first: string;
        last: string;
    };
}, {
    position: {
        first: string;
        last: string;
    };
}>, unknown, unknown, undefined>>;
type CellHeadProps = {
    onClick?: () => void;
} & React.TableHTMLAttributes<HTMLTableCellElement> & VariantProps<typeof cellHeadVariant>;
type CellBodyProps = {} & React.TableHTMLAttributes<HTMLTableCellElement>;
declare const Table: {
    Root: ({ children, ...rest }: TableRootProps) => react_jsx_runtime.JSX.Element;
    Caption: ({ children, ...rest }: TableRootProps) => react_jsx_runtime.JSX.Element;
    THead: ({ children, ...rest }: THeadProps) => react_jsx_runtime.JSX.Element;
    TBody: ({ children, ...rest }: TBodyProps) => react_jsx_runtime.JSX.Element;
    Tr: ({ children, ...rest }: RowProps) => react_jsx_runtime.JSX.Element;
    Th: ({ children, position, onClick, ...rest }: CellHeadProps) => react_jsx_runtime.JSX.Element;
    Td: ({ children, ...rest }: CellBodyProps) => react_jsx_runtime.JSX.Element;
};

type AvatarProps = {
    image: string;
    username: string;
};
declare function Avatar({ image, username }: AvatarProps): react_jsx_runtime.JSX.Element;

type DialogRootProps = {} & DialogPrimitive.DialogProps;
type DialogPortalProps = {} & DialogPrimitive.DialogPortalProps;
type DialogTriggerProps = {} & DialogPrimitive.DialogTriggerProps;
declare const overlayVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-zinc-950/25 backdrop-blur", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-zinc-950/25 backdrop-blur", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type DialogOverlayProps = {} & DialogPrimitive.DialogOverlayProps & VariantProps<typeof overlayVariant>;
declare const containerVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "max-w-[500px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white focus:outline-none", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "max-w-[500px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white focus:outline-none", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type DialogContainerProps = {} & DialogPrimitive.DialogContentProps & VariantProps<typeof containerVariant>;
declare const contentVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type DialogContentProps = {
    as?: React.ElementType;
} & HTMLAttributes<HTMLElement> & VariantProps<typeof contentVariant>;
type DialogTitleProps = {} & DialogPrimitive.DialogTitleProps;
type DialogDescriptionProps = {} & DialogPrimitive.DialogDescriptionProps;
type DialogCloseProps = {} & DialogPrimitive.DialogCloseProps;
declare const footerVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "flex gap-4 p-4 border-t border-t-zinc-200", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "flex gap-4 p-4 border-t border-t-zinc-200", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type DialogFooterProps = {} & HTMLAttributes<HTMLElement> & VariantProps<typeof footerVariant>;
declare const headerVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type DialogHeaderProps = {} & HTMLAttributes<HTMLElement> & VariantProps<typeof headerVariant>;
declare const Dialog: {
    Root: ({ children, ...rest }: DialogRootProps) => react_jsx_runtime.JSX.Element;
    Portal: ({ children, ...rest }: DialogPortalProps) => react_jsx_runtime.JSX.Element;
    Trigger: ({ children, ...rest }: DialogTriggerProps) => react_jsx_runtime.JSX.Element;
    Overlay: ({ children, className, ...rest }: DialogOverlayProps) => react_jsx_runtime.JSX.Element;
    Header: ({ children, className }: DialogHeaderProps) => react_jsx_runtime.JSX.Element;
    Content: ({ children, as, className }: DialogContentProps) => react_jsx_runtime.JSX.Element;
    Container: ({ children, className, ...rest }: DialogContainerProps) => react_jsx_runtime.JSX.Element;
    Title: ({ children, ...rest }: DialogTitleProps) => react_jsx_runtime.JSX.Element;
    Description: ({ children, ...rest }: DialogDescriptionProps) => react_jsx_runtime.JSX.Element;
    Close: ({ children, ...rest }: DialogCloseProps) => react_jsx_runtime.JSX.Element;
    Footer: ({ children, className, ...rest }: DialogFooterProps) => react_jsx_runtime.JSX.Element;
};

type AlertDialogActionProps = {} & AlertDialogPrimitive.AlertDialogActionProps;
declare function Action({ children, ...rest }: AlertDialogActionProps): react_jsx_runtime.JSX.Element;

type AlertDialogCancelProps = {} & AlertDialogPrimitive.AlertDialogCancelProps;
declare function Cancel({ children, ...rest }: AlertDialogCancelProps): react_jsx_runtime.JSX.Element;

type AlertDialogContentProps = {} & AlertDialogPrimitive.AlertDialogContentProps;
declare function Content({ children, ...rest }: AlertDialogContentProps): react_jsx_runtime.JSX.Element;

type AlertDialogDescriptionProps = {} & AlertDialogPrimitive.AlertDialogDescriptionProps;
declare function Description({ children, ...rest }: AlertDialogDescriptionProps): react_jsx_runtime.JSX.Element;

type AlertDialogOverlayProps = {} & AlertDialogPrimitive.AlertDialogOverlayProps;
declare function Overlay({ children, ...rest }: AlertDialogOverlayProps): react_jsx_runtime.JSX.Element;

type AlertDialogPortalProps = {} & AlertDialogPrimitive.AlertDialogPortalProps;
declare function Portal({ children, ...rest }: AlertDialogPortalProps): react_jsx_runtime.JSX.Element;

type AlertDialogRootProps = {} & AlertDialogPrimitive.AlertDialogProps;
declare function Root$1({ children, ...rest }: AlertDialogRootProps): react_jsx_runtime.JSX.Element;

type AlertDialogTitleProps = {} & AlertDialogPrimitive.AlertDialogTitleProps;
declare function Title({ children, ...rest }: AlertDialogTitleProps): react_jsx_runtime.JSX.Element;

type AlertDialogTriggerProps = {} & AlertDialogPrimitive.AlertDialogTriggerProps;
declare function Trigger({ children, ...rest }: AlertDialogTriggerProps): react_jsx_runtime.JSX.Element;

declare const AlertDialog: {
    Root: typeof Root$1;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Overlay: typeof Overlay;
    Title: typeof Title;
    Description: typeof Description;
    Action: typeof Action;
    Cancel: typeof Cancel;
    Content: typeof Content;
};

declare const variants$1: tailwind_variants.TVReturnType<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, undefined, "w-full bg-zinc-50 p-2 rounded", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, {
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}>, {
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, undefined, "w-full bg-zinc-50 p-2 rounded", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, {
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
} & VariantProps<typeof variants$1> & InputMaskProps;
declare const Input: react.ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
} & VariantProps<tailwind_variants.TVReturnType<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, undefined, "w-full bg-zinc-50 p-2 rounded", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, {
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}>, {
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, undefined, "w-full bg-zinc-50 p-2 rounded", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}, {
    variant: {
        default: string;
    };
    hasError: {
        true: string;
    };
}>, unknown, unknown, undefined>>> & _react_input_mask.MaskOptions & {
    component?: undefined;
} & react.RefAttributes<HTMLInputElement>>;

declare const labelVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "font-bold text-zinc-600", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "font-bold text-zinc-600", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {} & VariantProps<typeof labelVariant>;
declare function Label({ children, className, ...rest }: LabelProps): react_jsx_runtime.JSX.Element;

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
}

interface SelectContentProps {
    children: React.ReactNode;
}

interface SelectTriggerProps {
    placeholder: string;
}

interface SelectRootProps extends HTMLAttributes<ElementType> {
    onValeuChange?: (value: string) => void;
}

declare const Select: {
    Root: ({ children, onValeuChange }: SelectRootProps) => react_jsx_runtime.JSX.Element;
    Trigger: ({ placeholder }: SelectTriggerProps) => react_jsx_runtime.JSX.Element;
    Content: ({ children }: SelectContentProps) => react_jsx_runtime.JSX.Element;
    Item: ({ value, children }: SelectItemProps) => react_jsx_runtime.JSX.Element;
};

declare const buttonVariant: tailwind_variants.TVReturnType<{
    variant: {
        default: string;
        secondary: string;
        link: string;
        destructive: string;
        ghost: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "px-4 py-2 rounded text-zinc-50 transition-colors flex gap-2", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
        secondary: string;
        link: string;
        destructive: string;
        ghost: string;
    };
    disabled: {
        true: string;
    };
}, {
    variant: {
        default: string;
        secondary: string;
        link: string;
        destructive: string;
        ghost: string;
    };
    disabled: {
        true: string;
    };
}>, {
    variant: {
        default: string;
        secondary: string;
        link: string;
        destructive: string;
        ghost: string;
    };
    disabled: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        default: string;
        secondary: string;
        link: string;
        destructive: string;
        ghost: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "px-4 py-2 rounded text-zinc-50 transition-colors flex gap-2", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
        secondary: string;
        link: string;
        destructive: string;
        ghost: string;
    };
    disabled: {
        true: string;
    };
}, {
    variant: {
        default: string;
        secondary: string;
        link: string;
        destructive: string;
        ghost: string;
    };
    disabled: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
type ButtonProps = {
    as?: ElementType;
    iconLeft?: react__default.ElementType;
    iconRight?: react__default.ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariant> & react__default.ComponentPropsWithoutRef<ElementType>;
declare function Button({ as, variant, children, disabled, className, iconLeft, iconRight, ...rest }: ButtonProps): react_jsx_runtime.JSX.Element;
declare namespace Button {
    var displayName: string;
}

declare const variants: tailwind_variants.TVReturnType<{
    checked: {
        true: string;
        indeterminated: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "w-5 h-5 rounded border border-zinc-200 bg-zinc-100", tailwind_variants_dist_config.TVConfig<{
    checked: {
        true: string;
        indeterminated: string;
    };
    disabled: {
        true: string;
    };
}, {
    checked: {
        true: string;
        indeterminated: string;
    };
    disabled: {
        true: string;
    };
}>, {
    checked: {
        true: string;
        indeterminated: string;
    };
    disabled: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    checked: {
        true: string;
        indeterminated: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "w-5 h-5 rounded border border-zinc-200 bg-zinc-100", tailwind_variants_dist_config.TVConfig<{
    checked: {
        true: string;
        indeterminated: string;
    };
    disabled: {
        true: string;
    };
}, {
    checked: {
        true: string;
        indeterminated: string;
    };
    disabled: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
type CheckboxProps = VariantProps<typeof variants> & {
    onValueChange?: (value: boolean) => void;
};
declare function Checkbox({ checked, disabled, onValueChange, }: CheckboxProps): react_jsx_runtime.JSX.Element;

type InputFileProps = {} & InputHTMLAttributes<HTMLInputElement>;
declare const InputFile: react.ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & react.RefAttributes<HTMLInputElement>>;

type MenuProps = {
    username: string;
    avatarImage: string;
    signOut: () => void;
    children: React.ReactNode;
};
declare function Menu({ signOut, children, username, avatarImage }: MenuProps): react_jsx_runtime.JSX.Element;

type FooterProps = {};
declare function Footer(): react_jsx_runtime.JSX.Element;

declare const imageVariation: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "w-24", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "w-24", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement> & VariantProps<typeof imageVariation>;
declare function Image({ className, ...rest }: ImageProps): react_jsx_runtime.JSX.Element;

declare const rootVariation: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "fixed left-0 top-0 w-full bg-zinc-950", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "fixed left-0 top-0 w-full bg-zinc-950", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type HeaderRootProps = {} & React.HTMLAttributes<HTMLElement> & VariantProps<typeof rootVariation>;
declare function Root({ children, className, ...rest }: HeaderRootProps): react_jsx_runtime.JSX.Element;

declare const Header: {
    Root: typeof Root;
    Image: typeof Image;
};

declare const textVariant: tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}>, unknown, unknown, undefined>>;
type TextProps = {
    as?: ElementType;
} & React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof textVariant>;
declare function Text({ as, children, size, ...rest }: TextProps): react_jsx_runtime.JSX.Element;

declare const headingVariant: tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, undefined, undefined, tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
        "2xl": string;
        "4xl": string;
    };
}>, unknown, unknown, undefined>>;
type HeadingProps = {
    as?: React.ElementType;
} & React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof headingVariant>;
declare function Heading({ as, children, size, className, ...rest }: HeadingProps): react_jsx_runtime.JSX.Element;

export { AlertDialog, type AlertDialogActionProps, type AlertDialogCancelProps, type AlertDialogContentProps, type AlertDialogDescriptionProps, type AlertDialogOverlayProps, type AlertDialogPortalProps, type AlertDialogRootProps, type AlertDialogTitleProps, type AlertDialogTriggerProps, Avatar, type AvatarProps, type BodyProps, Button, type ButtonProps, Card, type CardFooterProps, type CardHeadingProps, type CardTextProps, type CellBodyProps, type CellHeadProps, Checkbox, type CheckboxProps, Dialog, type DialogCloseProps, type DialogContainerProps, type DialogContentProps, type DialogDescriptionProps, type DialogFooterProps, type DialogHeaderProps, type DialogOverlayProps, type DialogPortalProps, type DialogRootProps, type DialogTitleProps, type DialogTriggerProps, Footer, type FooterProps, Header, type HeaderProps, Heading, type HeadingProps, Input, InputFile, type InputFileProps, type InputProps, Label, type LabelProps, Menu, type MenuProps, type RootProps, type RowProps, Select, type SelectRootProps, type TBodyProps, type THeadProps, Table, type TableRootProps, Text, type TextProps };
