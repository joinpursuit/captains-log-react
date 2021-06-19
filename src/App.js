import React from "react"
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL";
import axios from "axios";
import Navbar from "./Components/Navbar"
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/Index"
import Show from "./Pages/Show";

const API_BASE = apiURL();

function App() {
  const { logs, setLogs } = useState([])

  useEffect(() => {
    axios.get(`${API_BASE}/logs`).then((response) => {
      const { data } = response;
      setLogs(data);

      console.log(data);
    });
  }, []);


  return (
  <div>
<Navbar />
<Switch>
  <Route exact path="/"> <Home /> </Route>
  <Route path="/logs/new"> <New /> </Route>
  <Route path="/logs/:index"> <Show /> </Route>
  <Route path="/logs"> <Index /> </Route>
  <Route path="*"> <FourOFour /> </Route>
    </Switch>
</div>
  );
}

export default App;
