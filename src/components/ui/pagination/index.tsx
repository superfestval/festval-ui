import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { tv } from "tailwind-variants";

import { usePagination } from "./hooks/usePagination";
import { Select } from "../form/select";

const pageItemVariant = tv({
  base: "rounded bg-yellow-700 py-2 px-4 text-xs text-zinc-50",
  variants: {
    disabled: {
      true: "bg-zinc-200 text-zinc-500 cursor-not-allowed",
    },
  },
});

export type PaginationProps = {
  currentPage?: number;
  perPage?: number;
  totalCount: number;
  onPageChange?: (page: number) => void;
  onPerPageChange?: (perPage: number) => void;
};

export function Pagination({
  currentPage = 1,
  totalCount,
  perPage: defaultPerpage = 10,
  onPageChange,
  onPerPageChange,
}: PaginationProps) {
  const { page, perPage, firstPage, lastPage, nextPage, previousPage, handlePerPage } =
    usePagination({
      currentPage,
      totalCount,
      onPageChange,
      onPerPageChange,
      perPage: defaultPerpage,
    });

  const totalPages = totalCount / perPage;

  return (
    <div className="flex w-full items-center justify-between py-4">
      <p className="whitespace-nowrap text-sm text-zinc-950">
        {page} de {Math.ceil(totalCount / perPage)} páginas
      </p>

      <div className="flex gap-2">
        <Select.Root
          onValueChange={handlePerPage}
          defaultValue={perPage.toString()}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Icon />
          </Select.Trigger>
          <Select.Portal>
            <Select.Content>
              <Select.Viewport>
                <Select.Item value="10">10</Select.Item>
                <Select.Item value="30">30</Select.Item>
                <Select.Item value="50">50</Select.Item>
                <Select.Item value="100">100</Select.Item>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        <button
          onClick={firstPage}
          disabled={page === 1}
          className={pageItemVariant({ disabled: page === 1 })}
        >
          <ChevronsLeft size={14} />
        </button>
        <button
          onClick={previousPage}
          disabled={page === 1}
          className={pageItemVariant({ disabled: page === 1 })}
        >
          <ChevronLeft size={14} />
        </button>
        <div className="flex items-center rounded border border-yellow-600 bg-yellow-600/25 px-4 py-2 text-xs text-yellow-600">
          <p>{page}</p>
        </div>
        <button
          onClick={nextPage}
          disabled={page >= totalPages}
          className={pageItemVariant({
            disabled: page >= totalPages,
          })}
        >
          <ChevronRight size={14} />
        </button>
        <button
          onClick={lastPage}
          disabled={page >= totalPages}
          className={pageItemVariant({
            disabled: page >= totalPages,
          })}
        >
          <ChevronsRight size={14} />
        </button>
      </div>
    </div>
  );
}
