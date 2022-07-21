import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
