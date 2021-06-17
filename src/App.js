import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Logs from "./Components/Logs";
import NewLog from "./Components/NewLog";
import { apiURL } from "./util/apiURL";
import { Switch, Route } from "react-router";
import axios from "axios";

const API_BASE = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  const addLog = (newLog) => {
    axios
      .post(`${API_BASE}/logs`, newLog)
      .then((res) => {
        setLogs([...setLogs, newLog]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateLog = () => {};
  const deleteLog = () => {};

  useEffect(() => {
    axios.get(`${API_BASE}/logs`).then((res) => {
      const { data } = res;
      setLogs(data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route path="/logs/new">
            <NewLog addLog={addLog} />
          </Route>
          <Route path="/logs">
            <Logs logs={logs} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
