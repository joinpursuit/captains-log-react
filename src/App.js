import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Logs from "./Components/Logs";
import New from "./Components/New";
import apiURL from "./util/apiURL";
import axios from "axios";
import Show from "./Components/Show";
console.log(apiURL);
const API = apiURL();

function App() {
  const [logsArr, setLogsArr] = useState([]);
  const fetchLogs = async () => {
    let res;
    try {
      res = await axios.get(`${API}/logs`);

      setLogsArr(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Route path="/Logs/new">
            <New />
          </Route>
          <Route exact path="/Logs">
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
