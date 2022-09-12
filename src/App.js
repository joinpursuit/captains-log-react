import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";

import Home from "./pages/home";
import Index from "./pages/index";
import New from "./pages/new";
import Show from "./pages/show";
import Edit from "./pages/edit";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Index />} />
          <Route path="/" element={<New />} />
          <Route path="/" element={<Show />} />
          <Route path="/" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}
