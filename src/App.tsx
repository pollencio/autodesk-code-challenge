import { ItemsTable } from "./components/items/items-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { useItems } from "./hooks/use-items";

export function App() {
  const { items } = useItems();

  return (
    <div className="flex flex-1 flex-col h-screen">
      <header className="p-6 h-14 flex items-center">
        <h1 className="text-3xl">Submittals</h1>
      </header>
      <main className="py-5 px-6 gap-5 grow flex flex-1 flex-col">
        <Tabs defaultValue="items" className="grow">
          <TabsList className="hidden md:block">
            <TabsTrigger value="items">Items</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
          </TabsList>
          <TabsContent
            value="items"
            className="space-y-4 grow flex flex-col flex-1"
          >
            <ItemsTable items={items} />
          </TabsContent>
          <TabsContent value="packages">Packages page goes here.</TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
