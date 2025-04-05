import { PatientsContext } from "@/lib/contexts";
import { Patient } from "@/lib/types";
import { ReactNode, useState } from "react";

const PatientsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>();

  const addPatient = (patient: Patient) => {
    setPatients((prev) => (prev ? [...prev, patient] : prev));
  };

  return (
    <PatientsContext.Provider value={{ patients, addPatient, setPatients }}>
      {children}
    </PatientsContext.Provider>
  );
};

export function Providers({ children }: { children: ReactNode }) {
  return <PatientsProvider>{children}</PatientsProvider>;
}
