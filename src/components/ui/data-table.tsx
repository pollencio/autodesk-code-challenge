import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  type Column,
  flexRender,
  type Table as TTable,
} from "@tanstack/react-table";
import { ArrowDownUp, ArrowUpZA } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { Button } from "./button";
import { Skeleton } from "./skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface DataTableProps<TData> {
  table: TTable<TData> & {
    onRowClick?: (row: TData) => void;
  };

  isLoading?: boolean;
}

export function DataTable<TData>({ table, isLoading }: DataTableProps<TData>) {
  const isMobile = useIsMobile();
  const tableRows = table.getRowModel().rows;
  const { pageIndex, pageSize } = table.getState().pagination;

  // Hide columns on mobile
  useEffect(() => {
    if (isMobile) {
      table.getAllColumns().map((column) => {
        if (column.getCanHide()) {
          column.toggleVisibility();
        }
      });
    }
  }, [isMobile, table]);

  // Show loading skeleton
  if (isMobile === undefined || isLoading)
    return (
      <div className="flex flex-1 flex-col grow gap-2 h-full items-end">
        <Skeleton className="size-full" />
        <Skeleton className="h-9 w-96 flex" />
      </div>
    );

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {tableRows?.length ? (
            tableRows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => table.onRowClick?.(row.original)}
                className={cn({ "cursor-pointer": !!table.onRowClick })}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                No hay resultados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {!!tableRows?.length && pageSize < table.getRowCount() && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {!isMobile && "Mostrando del"} {pageIndex * pageSize + 1} al{" "}
            {pageSize > table.getRowCount()
              ? table.getRowCount()
              : (pageIndex + 1) * pageSize}{" "}
            de {table.getRowCount()} resultados.
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

interface SortableTableHeaderProps<TData> {
  column: Column<TData, unknown>;
  children: ReactNode;
}

export function SortableTableHeader<TData>({
  column,
  children,
}: SortableTableHeaderProps<TData>) {
  const isSorted = column.getIsSorted();

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting()}
      className="[&_svg]:size-3.5"
    >
      {children}
      {!isSorted && <ArrowDownUp />}
      {isSorted && (isSorted === "asc" ? <ArrowUpZA /> : <ArrowUpZA />)}
    </Button>
  );
}
