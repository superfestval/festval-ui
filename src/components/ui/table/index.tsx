import { ArrowDownUp } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

export type TableRootProps = {} & React.TableHTMLAttributes<HTMLTableElement>;

export type THeadProps =
  {} & React.TableHTMLAttributes<HTMLTableSectionElement>;

export type TBodyProps =
  {} & React.TableHTMLAttributes<HTMLTableSectionElement>;

export type RowProps = {} & React.TableHTMLAttributes<HTMLTableRowElement>;

const cellHeadVariant = tv({
  base: "bg-zinc-200 p-4 text-left text-zinc-600",
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

export type CellBodyProps =
  {} & React.TableHTMLAttributes<HTMLTableCellElement>;

export const Table = {
  Root: ({ children, ...rest }: TableRootProps) => (
    <table className="m-auto mt-6 w-full max-w-[1120px]" {...rest}>
      {children}
    </table>
  ),
  Caption: ({ children, ...rest }: TableRootProps) => (
    <caption
      className="rounded-t-lg border-b border-b-zinc-300 bg-zinc-950 p-4"
      {...rest}
    >
      {children}
    </caption>
  ),
  THead: ({ children, ...rest }: THeadProps) => (
    <thead className="rounded-t" {...rest}>
      {children}
    </thead>
  ),
  TBody: ({ children, ...rest }: TBodyProps) => (
    <tbody {...rest}>{children}</tbody>
  ),
  Tr: ({ children, ...rest }: RowProps) => (
    <tr className="rounded-t bg-zinc-50" {...rest}>
      {children}
    </tr>
  ),
  Th: ({ children, position, onClick, ...rest }: CellHeadProps) => (
    <th {...rest} className={cellHeadVariant({ position })}>
      {children}

      {onClick && (
        <button onClick={onClick} className="ml-4">
          <ArrowDownUp size={12} />
        </button>
      )}
    </th>
  ),
  Td: ({ children, ...rest }: CellBodyProps) => (
    <td className="border-b border-b-zinc-200 px-4 py-2" {...rest}>
      {children}
    </td>
  ),
};
