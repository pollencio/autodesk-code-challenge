import { API_ROUTES } from "@/lib/consts";
import { Patient } from "@/lib/types";

export async function getPatients() {
  let patients: Patient[] | null = null;

  try {
    const response = await fetch(API_ROUTES.patients);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    patients = await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return patients;
}
