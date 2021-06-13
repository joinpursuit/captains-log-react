import { Route, Switch } from "react-router";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import { apiURL } from "./util/apiURL";
import { useEffect, useState } from "react";
import axios from "axios";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOhFour";
import Edit from "./Pages/Edit";
import "./App.css"
const API = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  // Add a new log
  const addLog = async (newLog) => {
    try {
      const res = await axios.post(`${API}/logs`, newLog);
      setLogs((prevLog) => {
        return [...prevLog, res.data];
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Update a specific log
  const updateLog = async (logToUpdate, index) => {
    try {
      await axios.put(`${API}/logs/${index}`, logToUpdate);
      const newLogs = [...logs]
      newLogs[index] = logToUpdate
      setLogs(newLogs)
    } catch (error) {
      console.log(error);
    }
  }

  // Deletes a specific log
  const deleteLog = async (index) => {
    try {
      await axios.delete(`${API}/logs/${index}`);
      const newLogs = [...logs];
      newLogs.splice(index, 1);
      setLogs(newLogs);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch all data
  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="app">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/logs"}>
          <Index logs={logs} />
        </Route>
        <Route path={"/logs/new"}>
          <New addLog={addLog} />
        </Route>
        <Route exact path={"/logs/:index"}>
          <Show deleteLog={deleteLog} />
        </Route>
        <Route exact path={"/logs/:index/edit"}>
          <Edit updateLog={updateLog} />
        </Route>
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
