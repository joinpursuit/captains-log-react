import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Index />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="/logs/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
