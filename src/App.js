// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./Components/Navbar";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}