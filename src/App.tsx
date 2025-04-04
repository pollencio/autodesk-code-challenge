import { usePatients } from "./hooks/usePatients";

function App() {
  const { patients } = usePatients();
  console.log("* ~ App ~ patients:", patients);

  return <>Holi</>;
}

export default App;
