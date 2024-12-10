import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import * as react from 'react';
import react__default, { ElementType, ButtonHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, HTMLAttributes } from 'react';
import * as _react_input_mask from '@react-input/mask';
import { InputMaskProps } from '@react-input/mask';

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

type MenuProps = {
    username: string;
    avatarImage: string;
    signOut: () => void;
    children: React.ReactNode;
};
declare function Menu({ signOut, children, username, avatarImage }: MenuProps): react_jsx_runtime.JSX.Element;

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

declare const buttonVariant: tailwind_variants.TVReturnType<{
    variant: {
        default: string;
        secondary: string;
        link: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "px-4 py-2 rounded text-zinc-50 transition-colors", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
        secondary: string;
        link: string;
    };
    disabled: {
        true: string;
    };
}, {
    variant: {
        default: string;
        secondary: string;
        link: string;
    };
    disabled: {
        true: string;
    };
}>, {
    variant: {
        default: string;
        secondary: string;
        link: string;
    };
    disabled: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        default: string;
        secondary: string;
        link: string;
    };
    disabled: {
        true: string;
    };
}, undefined, "px-4 py-2 rounded text-zinc-50 transition-colors", tailwind_variants_dist_config.TVConfig<{
    variant: {
        default: string;
        secondary: string;
        link: string;
    };
    disabled: {
        true: string;
    };
}, {
    variant: {
        default: string;
        secondary: string;
        link: string;
    };
    disabled: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
type ButtonProps = {
    as?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariant> & react__default.ComponentPropsWithoutRef<ElementType>;
declare function Button({ as, variant, children, disabled, className, ...rest }: ButtonProps): react_jsx_runtime.JSX.Element;
declare namespace Button {
    var displayName: string;
}

declare const variants$1: tailwind_variants.TVReturnType<{
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
type CheckboxProps = VariantProps<typeof variants$1> & {
    onValueChange?: (value: boolean) => void;
};
declare function Checkbox({ checked, disabled, onValueChange, }: CheckboxProps): react_jsx_runtime.JSX.Element;

declare const variants: tailwind_variants.TVReturnType<{
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
} & VariantProps<typeof variants> & InputMaskProps;
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

type InputFileProps = {} & InputHTMLAttributes<HTMLInputElement>;
declare const InputFile: react.ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & react.RefAttributes<HTMLInputElement>>;

declare const labelVariant: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "font-bold", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "font-bold", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
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

type AvatarProps = {
    image: string;
    username: string;
};
declare function Avatar({ image, username }: AvatarProps): react_jsx_runtime.JSX.Element;

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
type CellHeadProps = {} & React.TableHTMLAttributes<HTMLTableCellElement> & VariantProps<typeof cellHeadVariant>;
type CellBodyProps = {} & React.TableHTMLAttributes<HTMLTableCellElement>;
declare const Table: {
    Root: ({ children, ...rest }: TableRootProps) => react_jsx_runtime.JSX.Element;
    Caption: ({ children, ...rest }: TableRootProps) => react_jsx_runtime.JSX.Element;
    THead: ({ children, ...rest }: THeadProps) => react_jsx_runtime.JSX.Element;
    TBody: ({ children, ...rest }: TBodyProps) => react_jsx_runtime.JSX.Element;
    Tr: ({ children, ...rest }: RowProps) => react_jsx_runtime.JSX.Element;
    Th: ({ children, position, ...rest }: CellHeadProps) => react_jsx_runtime.JSX.Element;
    Td: ({ children, ...rest }: CellBodyProps) => react_jsx_runtime.JSX.Element;
};

export { Avatar, type AvatarProps, Button, type ButtonProps, type CellBodyProps, type CellHeadProps, Checkbox, type CheckboxProps, Footer, type FooterProps, Header, Heading, type HeadingProps, Input, InputFile, type InputFileProps, type InputProps, Label, type LabelProps, Menu, type MenuProps, type RowProps, Select, type SelectRootProps, type TBodyProps, type THeadProps, Table, type TableRootProps, Text, type TextProps, headingVariant, textVariant };
