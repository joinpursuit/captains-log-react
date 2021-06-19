import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Error from "./Pages/FourOFour";
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
        setLogs([...logs, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateLog = (updateLog, i) => {
    axios.put(`${API_BASE}/logs/${i}`, updateLog).then(
      (res) => {
        const updateArr = [...logs]
        updateArr[i] = updateArr
        setLogs(updateArr)
      }
    )
  };

  const deleteLog = (i) => {
    axios.delete(`${API_BASE}/logs/${i}`).then((res)=>{
      const updateArr = [...logs]
      updateArr.splice(i, 1)
      setLogs(updateArr)
    })
  }

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
          <Route exact path="/logs">
            <Index logs={logs} />
          </Route>
          <Route path="/logs/new">
            <New addLog={addLog} />
          </Route>
          <Route>
            <Show path="/logs/:index" logs={logs} deleteLog={deleteLog} />
          </Route>
          <Route>
            <Edit logs={logs} updateLog={updateLog} />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
