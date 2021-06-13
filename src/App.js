import { Route, Switch } from "react-router";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import { apiURL } from "./util/apiURL";
import { useEffect, useState } from "react";
import axios from "axios";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";
const API = apiURL();


function App() {
  const [logs, setLogs] = useState([])

  const addLog = async (NewLog) => {
    try {
      const res = await axios.post(`${API}/logs`, NewLog)
      setLogs(prevLogs => [...prevLogs, res.data])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteLog = async (index) => {
    try {
      await axios.delete(`${API}/logs/${index}`)
      const dummyState = [...logs];
      dummyState.splice(index, 1);
      setLogs(dummyState)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchLogs = async () => {
    try {
      const res = await axios.get(`${API}/logs`);
      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchLogs();
  }, [])
  return (
    <div>
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
          {/* <Show /> */}
        </Route>
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
