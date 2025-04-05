import { useDataTable } from "@/hooks/use-data-table";
import { Item } from "@/lib/types";
import {
  ChevronDown,
  Funnel,
  Plus,
  Search,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { DataTable } from "../ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { itemsColumns } from "./items-columns";

interface ItemsTableProps {
  Items?: Item[];
}

export function ItemsTable({ Items }: ItemsTableProps) {
  const table = useDataTable({
    columns: itemsColumns,
    data: Items,
  });

  return (
    <Tabs defaultValue="items">
      <TabsList>
        <TabsTrigger value="items">Items</TabsTrigger>
        <TabsTrigger value="packages">Packages</TabsTrigger>
      </TabsList>
      <TabsContent value="items">
        <div className="space-y-4 grow flex flex-col flex-1">
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
              <Button variant="outline">
                <Search />
                Search
              </Button>
              <Button variant="outline">
                <Funnel />
              </Button>
            </div>
          </div>
          <DataTable table={table} isLoading={!Items} />
        </div>
      </TabsContent>
      <TabsContent value="packages">Packages page goes here.</TabsContent>
    </Tabs>
  );
}
