import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import * as react from 'react';
import { ElementType, ButtonHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import * as _react_input_mask from '@react-input/mask';
import { InputMaskProps } from '@react-input/mask';
import * as SelectElement from '@radix-ui/react-select';

type FooterProps = {};
declare function Footer(): react_jsx_runtime.JSX.Element;

declare const imageVariation: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "w-24", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "w-24", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement> & VariantProps<typeof imageVariation>;
declare function Image({ className, ...rest }: ImageProps): react_jsx_runtime.JSX.Element;

declare const rootVariation: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "fixed left-0 top-0 flex max-h-20 w-full items-center justify-between bg-zinc-950 p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "fixed left-0 top-0 flex max-h-20 w-full items-center justify-between bg-zinc-950 p-4", tailwind_variants_dist_config.TVConfig<unknown, {} | {}>, unknown, unknown, undefined>>;
type RootProps = {} & React.HTMLAttributes<HTMLElement> & VariantProps<typeof rootVariation>;
declare function Root({ children, className, ...rest }: RootProps): react_jsx_runtime.JSX.Element;

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
declare function Heading({ as, children, size, ...rest }: HeadingProps): react_jsx_runtime.JSX.Element;

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
type ButtonProps<T extends ElementType = "button"> = {
    as?: T;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariant>;
declare function Button({ as, variant, children, disabled, className, ...rest }: ButtonProps): react_jsx_runtime.JSX.Element;

declare const variants$1: tailwind_variants.TVReturnType<{
    checked: {
        true: string;
    };
}, undefined, "w-5 h-5 rounded border border-zinc-200 bg-zinc-100", tailwind_variants_dist_config.TVConfig<{
    checked: {
        true: string;
    };
}, {
    checked: {
        true: string;
    };
}>, {
    checked: {
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    checked: {
        true: string;
    };
}, undefined, "w-5 h-5 rounded border border-zinc-200 bg-zinc-100", tailwind_variants_dist_config.TVConfig<{
    checked: {
        true: string;
    };
}, {
    checked: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
type CheckboxProps = VariantProps<typeof variants$1> & {};
declare function Checkbox({ checked }: CheckboxProps): react_jsx_runtime.JSX.Element;

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

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {};
declare function Label({ children, ...rest }: LabelProps): react_jsx_runtime.JSX.Element;

type SelectRootProps = {
    placeholder?: string;
} & SelectElement.SelectContentProps & React.RefAttributes<HTMLDivElement>;
type SelectItemProps = {} & SelectElement.SelectItemProps & React.RefAttributes<HTMLDivElement>;
declare const Select: {
    Root: ({ placeholder, children, ...rest }: SelectRootProps) => react_jsx_runtime.JSX.Element;
    Option: ({ children, ...rest }: SelectItemProps) => react_jsx_runtime.JSX.Element;
};

export { Button, type ButtonProps, Checkbox, type CheckboxProps, Footer, type FooterProps, Header, Heading, type HeadingProps, Input, InputFile, type InputFileProps, type InputProps, Label, type LabelProps, Menu, type MenuProps, Select, type SelectItemProps, type SelectRootProps, Text, type TextProps, headingVariant, textVariant };
