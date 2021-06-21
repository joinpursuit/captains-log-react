import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { apiURL } from "./util/apiURL";
import React from "react";
import axios from "axios";
import Show from "./Pages/Show";
import New from "./Pages/New";
import LogIndex from "./Pages/LogIndex";

const API_BASE = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  const newLog = (logs) => {
    axios.post(`${API_BASE}/logs`, logs).then((response) => {
      return axios.get(`${API_BASE}/logs`)
    }).then((response)=> {
      setLogs(response.data)
    })

  }

  useEffect(() => {
    axios.get(`${API_BASE}/logs`).then((response) => {
      const { data } = response;
      setLogs(data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/logs">
              <Show logs={logs} />
            </Route>
            <Route path="/logs/new">
              <New newLog={newLog} />
            </Route>
            <Route path="/logs/:index">
              <LogIndex logs={logs} />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
