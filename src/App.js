import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import New from './pages/New';
import Show from './pages/Show';
import Edit from "./pages/Edit";
import Index from './pages/Index';
import Four0Four from './pages/Four0Four'
import './App.css';


import { apiURL } from './util/apiURL';
const API = apiURL();


function App() {
  const [logs, setLogs] = useState([]);

  const addLog = async (newLog) => {
    try {
      const res = await axios.post(`${API}/logs`, newLog);
      setLogs(prevState => [...prevState, res.data]);
    } catch (error) {
      console.log(error)
    }
  }

  const updateLog = async (updatedLog, index) => {
    try {
      await axios.put(`${API}/logs/${index}`, updatedLog);
      const newLogs = [...logs];
      newLogs[index] = updatedLog;
      setLogs(newLogs);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch (error) {
      console.log(error)
      setLogs([]);
    }
  }

  useEffect(() => {
    fetchLogs();
  }, []);


  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logs">
            <Index logs={logs} />
          </Route>
          <Route path="/logs/new">
            <New addLog={addLog}/>
          </Route>
          <Route exact path="/logs/:index">
              <Show logs={logs} />
            </Route>
          <Route path="/logs/:index/edit">
            <Edit updateLog={updateLog}/>
          </Route>
          <Route path="/*">
            <Four0Four />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
