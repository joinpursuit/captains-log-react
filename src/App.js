import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import Show from "./Components/Show";
import NewLog from "./Components/NewLog";
import { apiURL } from "./util/apiURL";

const API = apiURL();

function App() {
  const [ logs, setLogs ] = useState([]);
  // const [ isLoading, setIsLoading ] = useState(true);
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const fetchLogs = async () => {
    // debugger
    try {
      const res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLog = async (index) => {
    try {
      await axios.delete(`${API}/logs/${index}`);
      const dummyState = [...logs];
      dummyState.splice(index, 1);
      setLogs(dummyState);
    } catch (error) {
      console.log(error)
    }
  }

  const addLog = async (newLog) => {
    try {
      debugger
      const res = await axios.post(`${API}/logs`, newLog);
      setLogs((prevLog) => [...prevLog, res.data]);
      debugger
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logs">
            <Logs logs={logs} />
          </Route>
          <Route exact path="/logs/new">
            <NewLog logs={logs} addLog={addLog} newLog={newLog} setNewLog={setNewLog}
             />
          </Route>
          <Route exact path="/logs/:index">
            <Show logs={logs} 
            deleteLog={deleteLog}
             />
          </Route>
          {/* <Route path="*">
            <FourOFour />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
