// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";


// COMPONENTS
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />

            {/* <Route path="/bookmarks" element={<Index />} />
            <Route path="/bookmarks/new" element={<New />} />
            <Route path="/bookmarks/:index" element={<Show />} />
            <Route path="/bookmarks/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}