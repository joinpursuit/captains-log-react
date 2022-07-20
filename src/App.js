
import  React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import NewLog from "./Components/NewLog";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function App() {
  console.log(API);
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios.get(`${API}/logs`).then((res) => {
      setLogs(res.data);
    });
  }, []);

 console.log(logs)

  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/new" element={<NewLog />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
