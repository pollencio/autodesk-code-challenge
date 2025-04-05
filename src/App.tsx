import { PatientsTable } from "./components/patients/patients-table";
import { usePatients } from "./hooks/use-patients";

export function App() {
  const { patients } = usePatients();

  return (
    <div className="flex flex-1 flex-col h-screen">
      <header className="px-6 h-14 flex items-center border-b">
        <h1 className="text-3xl font-bold">Patients</h1>
      </header>
      <main className="py-5 px-6 gap-5 grow flex flex-1 flex-col">
        <PatientsTable patients={patients} />
      </main>
    </div>
  );
}
