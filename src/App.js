import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./Components/NavBar";
import { apiURL } from "./util/apiURL";
import axios from "axios";
import Logs from "./Components/Logs";
import NewLog from "./Components/NewLog";

const API = apiURL();
function App() {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    let res;
    try {
      res = await axios.get(`${API}/logs`);
      debugger;
      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLogs();
  });

  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path={"/logs/new"}>
            <NewLog />
          </Route>
          <Route path={"/logs"}>
            <Logs logs={logs} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
