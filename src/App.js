
import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import NewLog from "./Components/NewLog";
import Log from "./Components/Log";
import FourOFour from "./Components/FourOFour";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function App() {

  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<Log/>} />
          <Route path="*" element={<FourOFour/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
