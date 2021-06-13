import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Route } from "react-router-dom";
import Logs from "./Components/Logs";
import New from "./Components/New";
import apiURL from "./util/apiURL";
import axios from "axios";
console.log(apiURL)
const API = apiURL();

function App() {
  const [log, setLog] = useState([]);

  const fetchLogs = async () => {
    let res;
    try {
      res = await axios.get(`${API}/captainLog`)
      setLog(res.data)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);


  return (
    <div>
      <Navbar />
      <Route path="/logs/new">
        <New />
      </Route>
      <Route exact path="/logs">
        <Logs />
      </Route>
    </div>
  );
}

export default App;
