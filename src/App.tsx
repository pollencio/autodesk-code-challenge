import { PatientsTable } from "./components/patients/patients-table";
import { usePatients } from "./hooks/use-patients";

export function App() {
  const { patients } = usePatients();

  return (
    <div className="py-5 px-6 gap-5 h-screen flex flex-1 flex-col">
      <PatientsTable patients={patients} />
    </div>
  );
}
