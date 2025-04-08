import { useDataTable } from "@/hooks/use-data-table";
import { Item } from "@/lib/types";
import { ChevronDown, Funnel, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { DataTable, DataTableSearch } from "../ui/data-table";
import { CreateItemModal } from "./create-item-modal";
import { itemsColumns, itemsFilterFn } from "./items-columns";

interface ItemsTableProps {
  items?: Item[];
}

export function ItemsTable({ items }: ItemsTableProps) {
  const table = useDataTable({
    columns: itemsColumns,
    data: items,
    globalFilterFn: itemsFilterFn,
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <>
      <div className="flex justify-between gap-4">
        <CreateItemModal />
        <div className="flex gap-4">
          <Button variant="outline" className="hidden md:flex">
            <SquareArrowOutUpRight />
            Export
            <ChevronDown />
          </Button>
          <DataTableSearch
            table={table}
            placeholder="Search by title or ball in court"
          />
          <Button variant="outline" size="icon" className="hidden md:flex">
            <Funnel />
          </Button>
        </div>
      </div>
      <DataTable table={table} isLoading={!items} />
    </>
  );
}
