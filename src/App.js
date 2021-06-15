import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import apiURL from "./util/apiURL";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Logs from "./Components/Logs";
import New from "./Components/New";
import Show from "./Components/Show";

const API = apiURL();

function App() {
  const [logsArr, setLogsArr] = useState([]);

  const fetchLogs = async () => {
    let res;
    try {
      res = await axios.get(`${API}/logs`);
      console.log(res.data);
      setLogsArr(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const addLog = async (newLog) => {
    let res;
    try {
      res = await axios.post(`${API}/logs`, newLog);
      setLogsArr((prevLogs) => [...prevLogs, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Route path="/logs/new">
            <New addLog={addLog} />
          </Route>
          <Route exact path="/logs">
            <Logs logsArr={logsArr} />
          </Route>
          <Route path="/logs/:index">
            <Show />
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
