import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./Components/NavBar";

import { apiURL } from "./util/apiURL";

const API = apiURL()

function App() {
const [logs, setLogs] = useState([])

  const fetchLogs = async() =>{
    try{
      let res = await axios.get(`${API}/logs`)
      setLogs(res.data)
    }catch(err){
      console.log(err)
    }
  }
useEffect(()=>{
  fetchLogs()
})

  return (
    <div>
      <Router>
      <NavBar/>
      <h1>Welcome to the Captain's Log</h1>
      </Router>
    </div>
  );
}

export default App;
