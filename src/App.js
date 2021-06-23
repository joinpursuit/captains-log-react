import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Index from "./Components/Pages/Index";
import New from "./Components/Pages/New";
import Show from "./Components/Pages/Show";
import FourOFour from "./Components/Pages/FourOFour";
import Edit from "./Components/Pages/Edit";

const API = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get(`${API}/logs`).then((response) => {
      const { data } = response;
      setLogs(data);
    });
  }, []);

  return (
    <div>
      <main>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/logs">
              <Index logs={logs} />
            </Route>
            <Route path="/logs/new">
              <New />
            </Route>
            <Route path="/logs/:index">
              <Show />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
