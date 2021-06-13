import NavBar from "./Components/NavBar";
import Index from "./Pages/Index.js";
import New from "./Pages/New";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "./util/apiURL";

const URL = apiURL();

const App = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (newLog) => {setLogs({...newLog})};

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${URL}/logs`);
      setLogs(res.data);
      debugger
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
      </Switch>
    </div>
  );
};

export default App;
