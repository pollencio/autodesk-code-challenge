import { createContext } from "react";
import { Patient } from "./types";

export type PatientsContextValue = {
  patients: Patient[];
  addPatient: (patient: Patient) => void;
};

export const PatientsContext = createContext<PatientsContextValue | undefined>(
  undefined,
);
