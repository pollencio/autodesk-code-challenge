"use client";

import { Patient } from "@/lib/types";
import { getAgeFromBirthDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { SortableTableHeader } from "../ui/data-table";

export const patientsColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <SortableTableHeader column={column}>Nombre completo</SortableTableHeader>
    ),
    cell: ({ row }) => <span>{row.getValue("fullName")}</span>,
    enableHiding: false,
  },
  {
    accessorKey: "dniType",
    header: "ID",
    enableHiding: true,
  },
  {
    accessorKey: "dniNumber",
    header: "Documento",
    enableHiding: false,
  },
  {
    accessorKey: "sex",
    header: "Sexo",
    enableHiding: true,
  },
  {
    accessorKey: "birthDate",
    header: ({ column }) => (
      <SortableTableHeader column={column}>Edad</SortableTableHeader>
    ),
    cell: ({ row }) => {
      const age = getAgeFromBirthDate(row.getValue("birthDate"));

      return <span className="ml-4">{age}</span>;
    },
    enableHiding: true,
  },
];
