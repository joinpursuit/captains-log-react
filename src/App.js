import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Logs from './Components/Logs';
import NewLogs from './Components/NewLogs';
import axios from 'axios';
import { apiURL } from './util/apiURL';
import { Switch, Route } from 'react-router-dom';
import LogDetails from './Components/LogDetails';
import Four0Four from './Components/Four0Four';
import Home from './Components/Home';

const API = apiURL()

function App() {
  const [logs, setLogs] = useState([])

  const addLog = (newLog) => {
    //the second argument is the body of the request
    axios.post(`${API}/logs`, newLog).then((response) => {
      const { data } = response
      setLogs(data)
    }).catch((e) => {
      console.log(e)
    })
  }


  const deletedLog = (index) => {
    axios.get(`${API}/logs/${index}`)
      .then((response) => {
        const updateArray = [...logs]
        updateArray.splice(index, 1)
        setLogs(updateArray)
      }).catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    axios.get(`${API}/logs`)
      .then((response) => {
        const { data } = response
        console.log(data)
        setLogs(data)
      })
  }, [])
  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/logs">
            <Logs logs={logs} />
          </Route>
          <Route exact path="/logs/new">
            <NewLogs addLog={addLog} />
          </Route>
          <Route exact path="/logs/:index">
            <LogDetails logs={logs} deletedLog={deletedLog} />
          </Route>
          <Route path='*'>
            <Four0Four />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;