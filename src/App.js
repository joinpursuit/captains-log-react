// DEPENDENCIES
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";


//PAGES
import Edit from "./Pages/Edit";
import FourOFour from  "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";


//COMPONENTS
import NavBar from "./Components/NavBar";
import FootBar from "./Components/FootBar"

const API_BASE = apiURL();


function App() {
  const [logs, setLogs] = useState([]);

  //Create a Log
  const addLog = (newLog) => {
    axios.post(`${API_BASE}/logs`, newLog)
      .then(response => {
        setLogs([...logs, newLog])
      },
      error => console.error(error)
      )
      .catch(c => console.warn(c));
  };

  //Delete a Log
  const deleteLog = (index) => {
    axios.delete(`${API_BASE}/logs/${index}`)
      .then(response => {
        const updateArray = [...logs];
        updateArray.splice(index, 1);
        setLogs(updateArray);
      },
      error => console.error(error)
      )
      .catch(c => console.warn(`Catch: ${c}`));
  };

  //Update Log
  const updateLog = (updatedLog, index) => {
    axios.put(`${API_BASE}/logs/${index}`, updatedLog)
      .then(response => {
        const updateArray = [...logs];
        updateArray[index] = updatedLog;
        setLogs(updateArray);
      },
      error => console.error(`Error: ${error}`)
      )
      .catch(c => console.warn(`Warning: ${c}`));
  };

  //Load Logs on Page Load
  useEffect(() => { 
    axios.get(`${API_BASE}/logs`)
      .then((response => {
        const { data } = response;
        setLogs(data);
      }))
   }, [API_BASE])

  return (
    <div className="App">
      <Router>
        <NavBar />

        <main>
          <Switch>
            
            <Route path="/logs/new">
              <New addLog={addLog}/>
            </Route>

            <Route exact path="/logs/:index">
              <Show logs={logs} deleteLog={deleteLog}/>
            </Route>

            <Route path="/logs/:index/edit">
              <Edit logs={logs} updateLog={updateLog}/>
            </Route>
            
            <Route exact path="/logs">
              <Index logs={logs} />
            </Route>
            

            <Route excat path= "/">
              <Home />
            </Route>
            
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
        <FootBar />
      </Router>
    </div>
  ) 
}

export default App;