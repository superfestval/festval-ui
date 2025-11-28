import { ArrowDownUp } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const rootVariant = tv({
  base: "w-full",
});

const captionVariant = tv({
  base: "rounded-t-lg border-b border-b-zinc-300 bg-zinc-950 p-4",
});

export type TableRootProps = {} & React.TableHTMLAttributes<HTMLTableElement> &
  VariantProps<typeof rootVariant>;

const tHeadVariant = tv({
  base: "",
});

export type THeadProps =
  {} & React.TableHTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tHeadVariant>;

const tBodyVariant = tv({
  base: "",
});

export type TBodyProps =
  {} & React.TableHTMLAttributes<HTMLTableSectionElement> &
    VariantProps<typeof tBodyVariant>;

const rowVariant = tv({
  base: "",
});

export type RowProps = {} & React.TableHTMLAttributes<HTMLTableRowElement> &
  VariantProps<typeof rowVariant>;

const cellHeadVariant = tv({
  base: "text-left border-b border-gray-300 bg-gray-200 px-4 py-3",
  variants: {
    position: {
      first: "rounded-tl-lg",
      last: "rounded-tr-lg",
    },
  },
});

export type CellHeadProps = {
  onClick?: () => void;
} & React.TableHTMLAttributes<HTMLTableCellElement> &
  VariantProps<typeof cellHeadVariant>;

const cellVariant = tv({
  base: "border-b border-b-gray-200 p-4 text-left bg-gray-50",
});

export type CellBodyProps =
  {} & React.TableHTMLAttributes<HTMLTableCellElement> &
    VariantProps<typeof cellVariant>;

export const Table = {
  Root: ({ children, className, ...rest }: TableRootProps) => (
    <table className={rootVariant({ className })} {...rest}>
      {children}
    </table>
  ),

  Caption: ({ children, className, ...rest }: TableRootProps) => (
    <caption className={captionVariant({ className })} {...rest}>
      {children}
    </caption>
  ),

  THead: ({ children, className, ...rest }: THeadProps) => (
    <thead className={tHeadVariant({ className })} {...rest}>
      {children}
    </thead>
  ),

  TBody: ({ children, className, ...rest }: TBodyProps) => (
    <tbody className={tBodyVariant({ className })} {...rest}>
      {children}
    </tbody>
  ),

  Tr: ({ children, className, ...rest }: RowProps) => (
    <tr className={rowVariant({ className })} {...rest}>
      {children}
    </tr>
  ),

  Th: ({ children, position, onClick, className, ...rest }: CellHeadProps) => (
    <th {...rest} className={cellHeadVariant({ position, className })}>
      {children}

      {onClick && (
        <button onClick={onClick} className="ml-4">
          <ArrowDownUp size={12} />
        </button>
      )}
    </th>
  ),

  Td: ({ children, className, ...rest }: CellBodyProps) => (
    <td className={cellVariant({ className })} {...rest}>
      {children}
    </td>
  ),
};
