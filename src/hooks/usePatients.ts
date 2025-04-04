import { PatientsContext } from "@/lib/contexts";
import { CreatePatient, Patient } from "@/lib/types";
import { getPatients } from "@/services/patients.service";
import { useContext, useEffect } from "react";

type UsePatientsValue = {
  patients: Patient[] | null;
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

  useEffect(() => {
    getPatients().then(context.setPatients);
  }, [context.setPatients]);

  return { patients: context.patients, createPatient };
}
