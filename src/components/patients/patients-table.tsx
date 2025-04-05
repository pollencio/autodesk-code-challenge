import { useDataTable } from "@/hooks/use-data-table";
import { Patient } from "@/lib/types";
import { CircleUserRound, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { DataTable } from "../ui/data-table";
import { patientsColumns } from "./patients-columns";

interface PatientsTableProps {
  patients?: Patient[];
}

function PatientsCount({ count }: { count?: number }) {
  return (
    <div className="flex gap-2.5 items-center">
      <CircleUserRound color="oklch(0.554 0.046 257.417)" size={32} />
      <div className="flex gap-1 items-center">
        <h2 className="text-2xl font-semibold">{count ?? "-"}</h2>
        <span className="text-muted-foreground">patients</span>
      </div>
    </div>
  );
}

export function PatientsTable({ patients }: PatientsTableProps) {
  const table = useDataTable({
    columns: patientsColumns,
    data: patients,
  });

  return (
    <div className="space-y-4 grow flex flex-col flex-1">
      <div className="flex justify-between">
        <PatientsCount count={patients?.length} />
        <div className="flex gap-4">
          <Button>
            <Plus />
            Create patient
          </Button>
        </div>
      </div>
      <DataTable table={table} isLoading={!patients} />
    </div>
  );
}
