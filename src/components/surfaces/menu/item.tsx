import { AnchorHTMLAttributes, forwardRef } from "react";

export type MenuItemProps = {
  icon?: React.ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Item = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ children, icon: Icon, ...rest }: MenuItemProps, ref) => {
    return (
      <a
        {...rest}
        ref={ref}
        className="flex w-full items-center gap-2 p-4 transition-colors hover:bg-zinc-100/75 hover:text-yellow-700"
      >
        {Icon && <Icon size={14} />}
        {children}
      </a>
    );
  }
);
