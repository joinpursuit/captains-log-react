import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Index from "./Components/Index";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
