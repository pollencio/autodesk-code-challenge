import { createContext } from "react";
import { Item } from "./types";

export type ItemsContextValue = {
  setItems: (Items: Item[]) => void;
  addItem: (Item: Item) => void;

  items?: Item[];
};

export const ItemsContext = createContext<ItemsContextValue | undefined>(
  undefined,
);
