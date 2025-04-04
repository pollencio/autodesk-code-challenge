import { PatientsContext } from "@/lib/contexts";
import { Patient } from "@/lib/types";
import { ReactNode, useState } from "react";

const PatientsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const addPatient = (patient: Patient) => {
    setPatients((prev) => [...prev, patient]);
  };

  return (
    <PatientsContext.Provider value={{ patients, addPatient }}>
      {children}
    </PatientsContext.Provider>
  );
};

export function Providers({ children }: { children: ReactNode }) {
  return <PatientsProvider>{children}</PatientsProvider>;
}
