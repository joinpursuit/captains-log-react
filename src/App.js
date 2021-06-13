import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "./util/apiURL";
import axios from "axios";

const API = apiURL();

const App = () => {
  const [logs, setLogs] = useState([]);

  const addLog = async (newLog) => {
    try {
      const res = await axios.post(`${API}/logs`, newLog);
      setLogs((prevLogs) => [...prevLogs, res.data]);
    } catch (error) {}
  };

  const updateLog = async (updatedLog, index) => {
    try {
      await axios.put(`${API}/logs/${index}`, updatedLog);
      const newLogs = [...logs];
      newLogs[index] = updatedLog;
      setLogs(newLogs);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/logs">
          <Index logs={logs} />
        </Route>
        <Route path="/logs/new">
          <New addLog={addLog} />
        </Route>
        <Route path="/logs/:index/edit">
          <Edit updateLog={updateLog} />
        </Route>
        <Route exact path="/logs/:index">
          <Show />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
