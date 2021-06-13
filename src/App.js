import { Route, Switch } from "react-router";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

import { apiURL } from './util/apiURL';
import { useEffect, useState } from "react";
import axios from "axios";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
const API = apiURL();

function App() {
  const [logs, setLogs] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/logs"}>
          <Index logs={logs}/>
        </Route>
        <Route exact path={"/logs/:index"}>
          <Show logs={logs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
