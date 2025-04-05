"use client";

import { SEX_LABEL } from "@/lib/consts";
import { Patient } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { SortableTableHeader } from "../ui/data-table";

export const patientsColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <SortableTableHeader column={column}>Full name</SortableTableHeader>
    ),
    cell: ({ row }) => <span className="ml-4">{row.getValue("fullName")}</span>,
    enableHiding: false,
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <SortableTableHeader column={column}>Age</SortableTableHeader>
    ),
    cell: ({ row }) => <span className="ml-4">{row.getValue("age")}</span>,
    enableHiding: true,
  },
  {
    accessorKey: "sex",
    header: ({ column }) => (
      <SortableTableHeader column={column}>Sex</SortableTableHeader>
    ),
    cell: ({ row }) => (
      <span className="ml-4">{SEX_LABEL[row.original.sex]}</span>
    ),
    enableHiding: true,
  },
  {
    accessorKey: "dniType",
    header: "DNI type",
    enableHiding: true,
  },
  {
    accessorKey: "dniNumber",
    header: "DNI number",
    enableHiding: true,
  },
  {
    accessorKey: "countryId",
    header: "Country",
    enableHiding: true,
  },
  {
    accessorKey: "territorialZone",
    header: "Zone",
    cell: ({ row }) => <span className="ml-4">{row.getValue("age")}</span>,
    enableHiding: true,
  },
  {
    accessorKey: "municipalityId",
    header: "Municipality",
    enableHiding: true,
  },
  {
    accessorKey: "originCountryId",
    header: "Origin country",
    enableHiding: true,
  },
];
