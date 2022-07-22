import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./Components/NavBar";

import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Error from "./Pages/Error"
import New from "./Pages/New";
import Show from "./Pages/Show";
import Index from "./Pages/Index";


function App() {
  return <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="logs/:index" element={<Show />} />
        <Route path="/logs/:index/edit" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
