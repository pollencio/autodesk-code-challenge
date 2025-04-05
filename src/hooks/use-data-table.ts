"use client";

import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  TableOptions,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

type UseDataTableProps<TData> = Omit<
  TableOptions<TData>,
  | "data"
  | "getCoreRowModel"
  | "getPaginationRowModel"
  | "getSortedRowModel"
  | "getFilteredRowModel"
> & {
  data?: TData[]; // Made the data prop optional
  onRowClick?: (row: TData) => void;
};

export function useDataTable<TData>(props: UseDataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const { data, state, initialState, onRowClick, ...options } = props;

  const table = useReactTable({
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      ...state,
    },
    initialState: {
      pagination: { pageSize: 15 },
      ...initialState,
    },

    ...options,
  });

  return { ...table, onRowClick };
}
