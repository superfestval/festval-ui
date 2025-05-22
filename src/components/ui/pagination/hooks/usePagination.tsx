import { useState } from "react";
import { PaginationProps } from "../index";

export function usePagination({
  currentPage = 1,
  perPage: currentPerPage = 10,
  totalCount = 0,
  onPageChange,
  onPerPageChange,
}: PaginationProps) {
  const [page, setPage] = useState(currentPage);
  const [perPage, setPerPage] = useState(currentPerPage);

  const nextPage = () => {
    if (page >= Math.ceil(totalCount / currentPerPage)) {
      return;
    }

    setPage(page + 1);
    onPageChange?.(page + 1);
  };

  const previousPage = () => {
    if (page <= 1) {
      return;
    }

    setPage(page - 1);
    onPageChange?.(page - 1);
  };

  const firstPage = () => {
    setPage(1);
    onPageChange?.(1);
  };

  const lastPage = () => {
    setPage(Math.ceil(totalCount / currentPerPage));
    onPageChange?.(Math.ceil(totalCount / currentPerPage));
  };

  const handlePerPage = (value: string) => {
    setPerPage(Number(value));
    setPage(1);
    onPerPageChange?.(Number(value));
  };

  return {
    page,
    perPage,
    nextPage,
    lastPage,
    firstPage,
    previousPage,
    handlePerPage,
  };
}
