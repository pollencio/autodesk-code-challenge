import { ItemsContext } from "@/lib/contexts";
import { Item } from "@/lib/types";
import { ReactNode, useState } from "react";

const ItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>();

  const addItem = (item: Item) => {
    setItems((prev) => (prev && item ? [item, ...prev] : prev));
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export function Providers({ children }: { children: ReactNode }) {
  return <ItemsProvider>{children}</ItemsProvider>;
}
