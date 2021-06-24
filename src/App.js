import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

import NavBar from "./Components/NavBar";

const API_BASE = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  const addLog = (newLog) => {
    axios
      .post(`${API_BASE}/logs`, newLog)
      .then((response) => {
        setLogs([...logs, newLog]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteLog = (index) => {
    axios.delete(`${API_BASE}/logs/${index}`).then(
      (response) => {
        const updateArray = [...logs];
        updateArray.splice(index, 1);
        setLogs(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const updateLog = (updatedLog, index) => {
    axios.put(`${API_BASE}/logs/${index}`, updatedLog).then(
      (response) => {
        const updateArray = [...logs];
        updateArray[index] = updatedLog;
        setLogs(updateArray);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  useEffect(() => {
    axios.get(`${API_BASE}/logs`).then((response) => {
      const { data } = response;
      // console.log(data)
      setLogs(data);
    });
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
              <Show logs={logs} deleteLog={deleteLog} />
            </Route>
            <Route path="/logs/:index/edit">
              <Edit logs={logs} updateLog={updateLog} />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
