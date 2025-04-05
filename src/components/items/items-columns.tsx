"use client";

import { Item } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
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
    enableHiding: true,
  },
  {
    accessorKey: "dueDate",
    header: "Due date",
    enableHiding: true,
  },
  {
    accessorKey: "isApproved",
    header: "Responsible",
    cell: ({ row }) => (
      <span>{row.getValue("isApproved") ? "Approved" : "Not Approved"}</span>
    ),
    enableHiding: true,
  },
  {
    id: "actions",
    header: () => <Settings className="text-muted-foreground" />,
    enableHiding: false,
  },
];
