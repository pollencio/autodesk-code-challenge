import { API_ROUTES } from "@/lib/routes";
import { Patient } from "@/lib/types";
import { getAgeFromBirthDate } from "@/lib/utils";

export async function getPatients() {
  let patients: Patient[] = [];

  try {
    const response = await fetch(API_ROUTES.patients);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    patients = (await response.json()).map((patient: Patient) => {
      const birthDate = new Date(patient.birthDate);

      return {
        ...patient,
        birthDate,
        age: getAgeFromBirthDate(birthDate),
        fullName: `${patient.firstName} ${patient.lastName}`,
      };
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return patients;
}
