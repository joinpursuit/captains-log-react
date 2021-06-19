import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Logs from "./components/Logs";
import NewLog from "./components/NewLog";
import LogDetails from "./components/LogDetails";
import EditLog from './components/EditLog';

import { apiURL } from "./util/apiURL";
const API = apiURL();

const App = () => {
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchLogs();
  }, []);

  const addLog = async (newLog) => {
    try {
      const res = await axios.post(`${API}/logs`, newLog);
      setLogs(prevLogs => 
        { return [...prevLogs, res.data]
        });
    } catch (err) {
      console.log(err);
    }
  };

  const updateLog = async (updatedLog, index) => {
    try{
     await axios.put(`${API}/logs/${index}`, updatedLog)
      const newLogs = [...logs]
      newLogs[index] = updatedLog
      setLogs(newLogs)
    } catch (err) {
      console.log(err);
    }
  }

  const deleteLog = async (index) => {
    try {
       await axios.delete(`${API}/logs/${index}`)
      const newLogs = [...logs]
      newLogs.splice(index, 1)
      setLogs(newLogs)
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/logs">
            <Logs logs={logs} />
          </Route>

          <Route path="/logs/new">
            <NewLog addLog={addLog} />
          </Route>

          <Route exact path="/logs/:index">
            <LogDetails deleteLog={deleteLog}/>
          </Route>

        <Route path='/logs/:index/edit'>
        <EditLog updateLog={updateLog}/>
        </Route>

          <Route path="*"></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
