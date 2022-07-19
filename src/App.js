import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/logs" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
