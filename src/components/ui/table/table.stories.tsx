import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  ColumnSort,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { Table, TableRootProps } from "./index";
import { Heading } from "@/components/typograph/heading";
import { Input } from "@/components/ui/form/input";
import { Checkbox } from "../form/checkbox";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

const defaultData: User[] = [
  {
    id: 1,
    firstName: "Tanner",
    lastName: "Linsley",
    email: "tanner@gmail.com",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
  },
  {
    id: 2,
    firstName: "Kevin",
    lastName: "Vandy",
    email: "kevin@gmail.com",
    age: 27,
    visits: 200,
    progress: 100,
    status: "Single",
  },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        onValueChange={(value) => table.toggleAllPageRowsSelected(value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onValueChange={(value) => row.toggleSelected(value)}
      />
    ),
    enableSorting: true,
    enableHiding: false,
  }),
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("firstName", {
    header: () => "First name",
    cell: (info) => info.getValue(),
    enableSorting: true,
  }),
  columnHelper.accessor("email", {
    header: () => "E-mail",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
];

export default {
  component: Table.Root,
  render: ({ children, ...rest }) => {
    const [data, _setData] = useState(() => [...defaultData]);

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
    });

    return (
      <Table.Root>
        <Table.THead>
          {table.getHeaderGroups().map((item) => (
            <Table.Tr key={item.id}>
              {item.headers.map((header) => (
                <Table.Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.THead>
        <Table.TBody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table.Root>
    );
  },
  title: "Display/Table",
  tags: ["autodocs"],
} as Meta<TableRootProps>;

export const Default: StoryObj<TableRootProps> = {};

export const Ordenable: StoryObj<TableRootProps> = {
  render: ({ children, ...rest }) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [data, _setData] = useState<User[]>(() => [...defaultData]);

    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting,
      },
    });

    return (
      <Table.Root>
        <Table.THead>
          {table.getHeaderGroups().map((item) => (
            <Table.Tr key={item.id}>
              {item.headers.map((header, index) =>
                index > 0 ? (
                  <Table.Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.Th>
                ) : (
                  <Table.Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.Th>
                )
              )}
            </Table.Tr>
          ))}
        </Table.THead>
        <Table.TBody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table.Root>
    );
  },
};

export const WithCaption: StoryObj<TableRootProps> = {
  render: ({ children, ...rest }) => {
    const [data, _setData] = useState(() => [...defaultData]);

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
    });

    return (
      <Table.Root>
        <Table.Caption>
          <Heading className="mb-4 text-left text-zinc-50">User list</Heading>
          <Input
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            placeholder="Search user"
            className="border-zinc-800 bg-zinc-900 text-zinc-50 placeholder:text-zinc-500"
          />
        </Table.Caption>
        <Table.THead>
          {table.getHeaderGroups().map((item) => (
            <Table.Tr key={item.id}>
              {item.headers.map((header) => (
                <Table.Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.THead>
        <Table.TBody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table.Root>
    );
  },
};
