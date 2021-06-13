import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "./util/apiURL";
import axios from "axios";

const URL = apiURL();

const App = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (newLog) => {setLogs({...newLog})};

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${URL}/logs`);
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
        <Route path="/logs/:index">
         <Show />
        </Route>

      </Switch>
    </div>
  );
};

export default App;
