import { API_ROUTES_V2 } from "@/lib/routes";
import { CreateItem, Item } from "@/lib/types";

export async function getItems() {
  let items: Item[] = [];

  try {
    const response = await fetch(API_ROUTES_V2.items);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    items = (await response.json()).map(({ dueDate, ...item }: Item) => ({
      ...item,
      ...(dueDate && item.rev > 3 ? { dueDate: new Date(dueDate) } : {}),
      isApproved: item.rev > 4,
    }));
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return items;
}

export async function postItem(data: CreateItem) {
  let error: { message: string } | undefined;

  try {
    const response = await fetch(API_ROUTES_V2.items, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      error = { message: "Item was not created" };
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return { error };
}
