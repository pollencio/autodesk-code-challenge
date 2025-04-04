import { PatientsContext } from "@/lib/contexts";
import { CreatePatient, Patient } from "@/lib/types";
import { useContext } from "react";

type UsePatientsValue = {
  patients: Patient[];
  createPatient: (patient: Patient) => void;
};

export function usePatients(): UsePatientsValue {
  const context = useContext(PatientsContext);

  if (!context) {
    throw new Error("usePatients must be used within a PatientsProvider");
  }

  function createPatient(patient: CreatePatient) {
    const newPatient: Patient = {
      ...patient,
      id: crypto.randomUUID(),
    };

    context?.addPatient(newPatient);
  }

  return { patients: context.patients, createPatient };
}
