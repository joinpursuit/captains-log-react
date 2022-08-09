import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import LogsIndex from "./Components/LogsIndex";
import LogShow from "./Components/LogShow";
import LogNew from "./Components/LogNew";

function App() {


  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/logs" element={<LogsIndex />} />
          <Route path="/logs/:index" element ={<LogShow/>} />
          <Route path="/logs/new" element={<LogNew/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
