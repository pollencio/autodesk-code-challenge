import { API_ROUTES } from "@/lib/routes";
import { Item } from "@/lib/types";
import { getAgeFromBirthDate } from "@/lib/utils";

export async function getItems() {
  let Items: Item[] = [];

  try {
    const response = await fetch(API_ROUTES.Items);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    Items = (await response.json()).map((Item: Item) => {
      const birthDate = new Date(Item.birthDate);

      return {
        ...Item,
        birthDate,
        age: getAgeFromBirthDate(birthDate),
        fullName: `${Item.firstName} ${Item.lastName}`,
      };
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return Items;
}
