import NavBar from "./Components/NavBar"
import { Route , Switch } from "react-router-dom"
import Logs from "./Components/Logs"
import NewLog from "./Components/NewLog"
import axios from "axios"
import { apiURL } from "./util/apiURL"
import { useState, useEffect } from "react";
import LogDetails from "./Components/LogDetails"
import LogEdit from "./Components/LogEdit"


const API = apiURL()

function App() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios.get(`${API}/logs`)
    .then((response) => {
      setLogs(response.data)
    })
  }, [])

const updateLog = (updatedLog, index) => {
  axios
  .put(`${API}/logs/${index}`, updatedLog)
  .then(
    (response) => {
      const updateArray = [...logs];
      updateArray[index] =  updatedLog;
      setLogs(updateArray);
    }, 
    (err) => {
      console.log(err)
    })
}


const addLog = (newLog) => {
  axios.post(`${API}/logs`, newLog)
  .then((response) => {
    setLogs([...logs, newLog])
  })
  .catch((error) => {})
};

const deleteLog = (index) => {
  axios.delete(`${API}/bookmarks/${index}`)
    .then(
      (response) => {
        const updateArray = [...logs]
        updateArray.splice(index, 1)
        setLogs(updateArray)
      },
      (err) => {
        console.log(err)
      }
    )
};

  return <>
  <NavBar />
  <h1>Captain's Log</h1>
  <Switch>
    <Route path ="/logs/new"><NewLog addLog={addLog}/></Route>
    <Route path ="/logs/:index/edit"> <LogEdit logs={logs} updateLog={updateLog} /> </Route>
    <Route path ="/logs/:index"> <LogDetails logs={logs} setLogs={setLogs} deleteLog={deleteLog}/> </Route>
    <Route path ="/logs"> <Logs logs={logs}/> </Route>
  </Switch>
  </>
}

export default App;
