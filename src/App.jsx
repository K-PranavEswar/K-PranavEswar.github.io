import { useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Loader onComplete={() => setLoading(false)} />
  ) : (
    <Home />
  );
}

export default App;