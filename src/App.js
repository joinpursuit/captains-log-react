import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";
import NavBar from "./Components/NavBar";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

const API = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  const addLog = async (newLog) => {
    try {
      const res = await axios.post(`${API}/logs`, newLog)
      setLogs(prevLogs=>[...prevLogs, res.data])
    } catch (error) {
      console.log(error)
    }
  };
  const deleteLog = async (index) => {
    try {
      const res = await axios.delete(`${API}/logs/${index}`)
      const dummyState = [...logs]
      dummyState.splice(index, 1)
      setLogs(dummyState)
    } catch (error) {
      console.log(error)
    }
  };
  const updateLog = async (updatedLog, index) => {
    try {
      const res = await axios.put(`${API}/logs/${index}`, updatedLog)
      debugger
      const newLogs = [...logs]
      newLogs[index] = updatedLog
      setLogs(newLogs)
    } catch (error) {
      console.log(error)
    }
  };

  const fetchLogs = async () => {
    try {
      const response = await axios.get(`${API}/logs`);
      console.log(response.data);
      setLogs(response.data);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchLogs();
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
            <Route path="/logs/:index">
              <Show logs={logs} deleteLog={deleteLog} />
            </Route>
            <Route path="/logs/:index/edit">
              <Edit logs={logs} updateLog={updateLog} />
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
