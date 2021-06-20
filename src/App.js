import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import './app.css'
import axios from 'axios'
// Pages
import Index from './Pages/Index'
import Show from './Pages/Show'
import Edit from './Pages/Edit'
import New from './Pages/New'
import FourOFour from './Pages/FourOFour'
// API
import { apiURL } from './util/apiURL'
const API = apiURL()

const Home = () => {
  return <div>Welcome to the Captain's Log!</div>
}



export default function App() {

  const [ logs, setLogs ] = useState([])

  const addLog = (newLog) => {
    axios.post(`${API}/logs`, newLog)
    .then((response) => {
      return axios.get(`${API}/logs`)
    })
    .then(response => {
      setLogs(response.data)
    })
    .catch(e => console.log(e))
  }


  useEffect(() => {
    axios.get(`${API}/logs`)
    .then((response) => {
      setLogs(response.data)
    })
    .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Captain's Log</h1>
      <Switch>
        <Route exact path="/logs">
          <Index logs={logs} />
        </Route>
        <Route path='/logs/new'>
          <New addLog={addLog} />
        </Route>
        <Route exact path='/logs/:index'>
          <Show logs={logs} />
        </Route>
        <Route path='/logs/:index/edit'>
          <Edit />
        </Route>
        <Route exact path='/' render={Home} />
        <Route path='/not/found' component={FourOFour} />
      </Switch>
    </div>
  )
}
