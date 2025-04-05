import { createContext } from "react";
import { Item } from "./types";

export type ItemsContextValue = {
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;

  items?: Item[];
};

export const ItemsContext = createContext<ItemsContextValue | undefined>(
  undefined,
);
