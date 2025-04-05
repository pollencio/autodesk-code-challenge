import { useDataTable } from "@/hooks/use-data-table";
import { Item } from "@/lib/types";
import { ChevronDown, Funnel, Plus, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { DataTable, DataTableSearch } from "../ui/data-table";
import { itemsColumns, itemsFilterFn } from "./items-columns";

interface ItemsTableProps {
  Items?: Item[];
}

export function ItemsTable({ Items }: ItemsTableProps) {
  const table = useDataTable({
    columns: itemsColumns,
    data: Items,
    globalFilterFn: itemsFilterFn,
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <>
      <div className="flex justify-between">
        <Button>
          <Plus />
          Create Item
        </Button>
        <div className="flex gap-4">
          <Button variant="outline">
            <SquareArrowOutUpRight />
            Export
            <ChevronDown />
          </Button>
          <DataTableSearch
            table={table}
            placeholder="Search by title or ball in court"
          />
          <Button variant="outline" size="icon">
            <Funnel />
          </Button>
        </div>
      </div>
      <DataTable table={table} isLoading={!Items} />
    </>
  );
}
