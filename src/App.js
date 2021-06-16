import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./Components/NavBar";
import { apiURL } from "./util/apiURL";
import axios from "axios";
import Logs from "./Components/Logs";
import NewLog from "./Components/NewLog";
import Edit from "./Pages/Edit"
import LogDetails from "./Components/LogDetails"

const API = apiURL();
function App() {
  const [logs, setLogs] = useState([]);

  const addLog = async (newLog) => {
    let res;
    try {
      res = await axios.post(`${API}/logs`, newLog);
      setLogs((prevLogs) => [...prevLogs, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLog = async (updatedLogs, index) => {
    try {
      await axios.put(`${API}/logs/${index}`, updatedLogs);
      const newLogs = [...logs];
      newLogs[index] = updatedLogs;
      setLogs(newLogs);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLog = async (index) => {
    try {
        await axios.delete(`${API}/logs/${index}` )
        const prevState = [...logs]
        prevState.splice(index, 1)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchLogs = async () => {
    let res;
    try {
      res = await axios.get(`${API}/logs`);

      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/logs"}>
            <Logs logs={logs} />
          </Route>
          <Route exact path={"/logs/new"}>
            <NewLog addLog={addLog} />
          </Route>
          <Route exact path={"/logs/:index"}>
            <LogDetails deleteLog={deleteLog} />
          </Route>
          <Route exact path={"/logs/:index/edit"}>
            <Edit updateLog={updateLog}> </Edit>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
