import { ItemsContext } from "@/lib/contexts";
import { CreateItem, Item } from "@/lib/types";
import { getItems } from "@/services/item.service";
import { useContext, useEffect } from "react";

type UseItemsValue = {
  createItem: (Item: Item) => void;

  Items?: Item[];
};

export function useItems(): UseItemsValue {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItems must be used within a ItemsProvider");
  }

  function createItem(Item: CreateItem) {
    const newItem: Item = {
      ...Item,
      id: crypto.randomUUID(),
    };

    context?.addItem(newItem);
  }

  useEffect(() => {
    console.info("Fetching Items ...");
    getItems().then(context.setItems);
  }, [context.setItems]);

  return { Items: context.items, createItem };
}
