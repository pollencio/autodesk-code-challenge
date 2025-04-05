import { ItemsTable } from "./components/items/items-table";
import { useItems } from "./hooks/use-items";

export function App() {
  const { Items } = useItems();

  return (
    <div className="flex flex-1 flex-col h-screen">
      <header className="px-6 h-14 flex items-center">
        <h1 className="text-3xl font-bold">Submittals</h1>
      </header>
      <main className="py-5 px-6 gap-5 grow flex flex-1 flex-col">
        <ItemsTable Items={Items} />
      </main>
    </div>
  );
}
