
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';


import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

import { apiURL } from './util/apiURL';
const API = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  const addLog = async (newLog) => {
    let res;
    try {
      // make our request
      // axios.post takes the first argument url, then body.
      res = await axios.post(`${API}/logs`, newLog);
      setLogs(prevLogs => [...prevLogs, res.data]);

      // other way of doing it, potentially error prone when multiple 
      // setStates are happening 
      // setLogs([...logs, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteLog = async (index) => {
    try {
      await axios.delete(`${API}/logs/${index}`);
      const dummyState = [...logs];
      dummyState.splice(index, 1);
      setLogs(dummyState);
    } catch (err) {
      console.log(err);
    }
  };

  const showLog = async (index) => {
    try {
      await axios.get(`${API}/logs/${index}`);
      const dummyState = [...logs];
      dummyState.splice(index, 1);
      setLogs(dummyState);
    } catch (err) {
      console.log(err);
    }
  };


  const updateLog = async (updatedLog, index) => {
    try {
      await axios.put(`${API}/logs/${index}`, updatedLog);
      const newLogs = [...logs];
      newLogs[index] = updatedLog;
      setLogs(newLogs);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLogs = async () => {
    let res;
    try {
      // GET - localhost:3003/logs
      res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch(err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchLogs();

    // componentWillUnmount
    // if we return a function here its for cleanup purposes
    // otherwise we shouldn't return anything
    // return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
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
              <Show deleteLog={deleteLog} show={showLog} logs={logs}/>
            </Route>
            <Route path="/logs/:index/edit">
              <Edit updateLog={updateLog} />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
