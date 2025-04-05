import { API_ROUTES_V2 } from "@/lib/routes";
import { Item } from "@/lib/types";

export async function getItems() {
  let items: Item[] = [];

  try {
    const response = await fetch(API_ROUTES_V2.items);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    items = await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return items;
}
