import {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import {apiURL} from "./util/apiURL.js";

import Index from "./Pages/Index.js"
import Logs from "./Pages/Logs.js"
import New from "./Pages/New.js"

import NavBar from "./Components/NavBar.js"

const API_BASE = apiURL()

function App() {
  const [logs, setLogs] = useState([])
 

  useEffect(() => {
    axios.get(`${API_BASE}`).then((res)=>{
      const { data } = res;
      console.log(data)
      setLogs(data)
    })
  }, []);

  return (
    <div className="App">
      <Route>
        <NavBar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path to="/logs">
              <Logs />
            </Route>
            <Route exact path to="/logs/new">
              <New logs={logs}/>
            </Route>
          </Switch>
        </main>
      </Route>
        
    </div>
  )
}

export default App;
