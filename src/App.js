// Dependencies
import React from "react";
import { Routes, Route } from 'react-router-dom';
 
// Pages
import Home from "./Pages/Home.js";
import LogIndex from "./Pages/LogIndex.js";
import New from "./Pages/New.js";
import ShowDetails from "./Pages/ShowDetails.js";
import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour.js";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* Hello World - This is App.js */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogIndex />} />
          <Route path="/logs/new" element={<New />} /> 
          <Route path="/logs/:index" element={<ShowDetails />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </main>
    </div> 
    );
}

export default App;
