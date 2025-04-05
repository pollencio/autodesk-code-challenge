import { ItemsContext } from "@/lib/contexts";
import { CreateItem, Item } from "@/lib/types";
import { getItems } from "@/services/item.service";
import { useContext, useEffect } from "react";

type UseItemsValue = {
  createItem: (item: CreateItem) => Promise<{ error?: { message: string } }>;

  items?: Item[];
};

export function useItems(): UseItemsValue {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItems must be used within a ItemsProvider");
  }

  async function createItem(item: CreateItem) {
    console.info("Create a new Item ...");
    const newItem: Item = {
      ...item,
      id: crypto.randomUUID(),
    };

    if (newItem) {
      context?.addItem(newItem);

      return {};
    } else {
      return { error: { message: "Error creating item" } };
    }
  }

  useEffect(() => {
    console.info("Fetching Items ...");
    getItems().then(context.setItems);
  }, [context.setItems]);

  return { items: context.items, createItem };
}
