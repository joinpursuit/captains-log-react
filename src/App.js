// Dependencies
import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./util/apiURL";

// Components
import NavBar from "./Components/NavBar.js";

// Pages
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";

// Configuration
const API_BASE = apiUrl();

export default function App() {
  const [logs, setLogs] = useState([]);

  const addLog = (newLog) => {
    axios
      .post(`${API_BASE}/logs/logs`, newLog)
      .then((response) => {
        return axios.get(`${API_BASE}/logs`).then((response) => {
          setLogs(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateLog = (updatedLog, index) => {
    axios
      .put(`${API_BASE}/logs/${index}`, updatedLog)
      .then((response) => {
        const updateArr = [...logs];
        updateArr[index] = updatedLog;
        setLogs(updateArr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteLog = (index) => {
    axios
      .delete(`${API_BASE}/logs/${index}`)
      .then((response) => {
        const deleteArr = [...logs];
        deleteArr.splice(index, 1);
        setLogs(deleteArr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(`${API_BASE}/logs`).then((response) => {
      const { data } = response;
      setLogs(data);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logs">
            <Index logs={logs} />
          </Route>
          <Route path="/logs/new">
            <New addLog={addLog} />
          </Route>
          <Route exact path="/logs/:index">
            <Show logs={logs} deleteLog={deleteLog} />
          </Route>
          <Route path="/logs/:index/edit">
            <Edit logs={logs} updateLog={updateLog} />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
