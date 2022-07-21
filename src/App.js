import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import LogEdit from './Components/LogEdit';
import Logs from './Components/Logs';
import LogNew from './Components/LogNew'
import LogDetail from './Components/LogDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/logs/new" element={<LogNew />} />
            <Route path="/logs/:index" element={<LogDetail />} />
            <Route path="/logs/:index/edit" element={<LogEdit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
