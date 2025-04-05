import { API_ROUTES } from "@/lib/consts";
import { Patient } from "@/lib/types";

export async function getPatients() {
  let patients: Patient[] = [];

  try {
    const response = await fetch(API_ROUTES.patients);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    patients = (await response.json()).map((patient: Patient) => ({
      ...patient,
      birthDate: new Date(patient.birthDate),
      fullName: `${patient.lastName} ${patient.firstName}`,
    }));
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return patients;
}
