//Dependencies

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";

//Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/logs" element={<Index />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
