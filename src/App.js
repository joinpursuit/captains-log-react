import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Logs from './components/Logs.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import{ apiUrl } from './util/apiURL'

// CONFIGURATION
const API_BASE = apiUrl()

const App = () => {

  const [ logs, setLogs ] = useState([])

  useEffect(() => {
    axios.get(`${API_BASE}/logs`)
    .then((response)=>{ 
      const { data } = response
      setLogs(data)
     })
  }, [])


  return (
    <div className="container-fluid">
      <NavBar />
      <Switch>
        <Route path="/logs">
          <Logs logs={logs}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
