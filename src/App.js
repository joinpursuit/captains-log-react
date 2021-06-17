import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Logs from './components/Logs'
import NewLog from './components/NewLog'
import Log from './components/Log'
import LogDetails from './components/LogDetails'

import { apiURL } from './util/apiURL'
const API = apiURL()

const App = () => {
  const [logs, setLogs] = useState([])




const fetchLogs = async () => {
  let res
    try {
    res = await axios.get(`${API}/logs`)
    setLogs(res.data)
  }
  catch(err){
    console.log(err);
  }
}

useEffect(() => {

  fetchLogs();
}, [])
  

  return (
    <div className='App'>
      <Router>
        <NavBar />
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path ='/logs'>
              <Logs logs={logs} />
            </Route>

            <Route path ='/logs/new'>
              <NewLog />
            </Route>

            <Route exact path ='/logs/:index'>
              <LogDetails />
            </Route>

          <Route path = '*'>
            
          </Route>

          </Switch>

      </Router>
    </div>
  )
}





export default App; 