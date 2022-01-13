import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";

function App() {
  return (
    <div className="App">
        {/* <h1>IT WORKS</h1> */}
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
