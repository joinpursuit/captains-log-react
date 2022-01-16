// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// STYLESHEET
import "./App.css";

// PAGES
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";

// COMPONENTS
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
