import { createContext } from "react";
import { Patient } from "./types";

export type PatientsContextValue = {
  patients: Patient[] | null;
  setPatients: (patients: Patient[] | null) => void;
  addPatient: (patient: Patient) => void;
};

export const PatientsContext = createContext<PatientsContextValue | undefined>(
  undefined,
);
