// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Components/Pages/Edit";
import FourOFour from "./Components/Pages/FourOFour";
import Home from "./Components/Pages/Home";
import Index from "./Components/Pages/Index";
 import New from "./Components/Pages/New";
 import Show from "./Components/Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

export default function App() {
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


