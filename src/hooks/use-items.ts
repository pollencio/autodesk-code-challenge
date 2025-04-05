import { ItemsContext } from "@/lib/contexts";
import { CreateItem, Item } from "@/lib/types";
import { getItems, postItem } from "@/services/item.service";
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
    console.info("Creating a new Item ...");
    const newItem: Item = {
      ...item,
      id: crypto.randomUUID(),
    };
    const { error } = await postItem(newItem);

    if (newItem && !error) {
      context?.addItem(newItem);

      return { data: newItem };
    } else {
      return { error };
    }
  }

  useEffect(() => {
    console.info("Fetching Items ...");
    getItems().then(context.setItems);
  }, [context.setItems]);

  return { items: context.items, createItem };
}
