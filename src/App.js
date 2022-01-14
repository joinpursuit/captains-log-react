// Dependencies
import React from "react";
import { Routes, Route } from 'react-router-dom';
 
// Pages
import Home from "./Pages/Home.js";
import LogIndex from "./Pages/LogIndex.js";

// Components
import Navbar from "./components/Navbar";
import Logs from "./components/Logs";

function App() {
  return (
  
    <div className="App">Hello World - This is App.js
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogIndex />} />
          {/* <Route path="/logs/new" element={<New />} /> 
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </main>
    
    
    </div>
    
    );
}

export default App;
