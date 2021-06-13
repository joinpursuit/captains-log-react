import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import Show from "./Components/Show";
import { apiURL } from "./util/apiURL";

// further down..., but still above `App` component
const API = apiURL();

function App() {
  const [ logs, setLogs ] = useState([]);

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
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logs">
            <Logs logs={logs} />
          </Route>
          <Route exact path="/logs/:index">
            <Show logs={logs} 
            // deleteLog={deleteLog}
             />
          </Route>
          {/* <Route path="/logs/new">
            <New addBookmark={addBookmark} />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
