import { createContext } from "react";
import { Patient } from "./types";

export type PatientsContextValue = {
  setPatients: (patients: Patient[]) => void;
  addPatient: (patient: Patient) => void;

  patients?: Patient[];
};

export const PatientsContext = createContext<PatientsContextValue | undefined>(
  undefined,
);
