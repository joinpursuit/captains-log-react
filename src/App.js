import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import New from "./pages/New.js";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/new" element={<New />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
