"use client";

import { Item } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ColumnDef, Row } from "@tanstack/react-table";
import { format } from "date-fns";
import { Settings } from "lucide-react";
import { SortableTableHeader } from "../ui/data-table";

export const itemsColumns: ColumnDef<Item>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortableTableHeader column={column}>Status</SortableTableHeader>
    ),
    cell: ({ row }) => <span className="ml-4">{row.getValue("status")}</span>,
    enableHiding: false,
  },
  {
    accessorKey: "refNumber",
    header: "#",
    enableHiding: false,
  },
  {
    accessorKey: "rev",
    header: "Rev",
    enableHiding: true,
  },
  {
    accessorKey: "name",
    header: "Title",
    enableHiding: true,
  },
  {
    accessorKey: "category",
    header: "Type",
    enableHiding: true,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    enableHiding: true,
  },
  {
    accessorKey: "package",
    header: "Package",
    enableHiding: true,
  },
  {
    accessorKey: "sellerName",
    header: "Ball in court",
    cell: ({ row }) => (
      <div>
        <p>{row.getValue("sellerName")}</p>
        <p className="text-muted-foreground">{row.getValue("category")}</p>
      </div>
    ),
    enableHiding: true,
  },
  {
    accessorKey: "dueDate",
    header: "Due date",
    cell: ({ row }) => {
      const dueDate = row.original.dueDate;
      return <span>{dueDate ? format(dueDate, "PP") : "-"}</span>;
    },
    enableHiding: true,
  },
  {
    accessorKey: "isApproved",
    header: "Responsible",
    cell: ({ row }) => {
      const isApproved = row.getValue("isApproved");
      return (
        <span className={cn("text-red-700", { "text-green-700": isApproved })}>
          {isApproved ? "Approved" : "Not Approved"}
        </span>
      );
    },
    enableHiding: true,
  },
  {
    id: "actions",
    header: () => <Settings className="text-muted-foreground" />,
    enableHiding: true,
  },
];

export function itemsFilterFn(
  row: Row<Item>,
  _columnId: string,
  filterValue: string,
) {
  const item = row.original;
  const normalizedFilterValue = filterValue.toLowerCase();

  return (
    item.name.toLowerCase().startsWith(normalizedFilterValue) ||
    item.sellerName.toLowerCase().startsWith(filterValue)
  );
}
