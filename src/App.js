import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
        <NavBar />
      {/* Routes */}
        <Routes>
          <Route path="/" />
          <Route path="/logs" element={<Index />} />
          <Route path="/logs/:index" element={<Show />} />
        </Routes>
    </div>
  );
}

export default App;
