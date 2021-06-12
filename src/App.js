import { Route, Switch } from "react-router";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

import { apiURL } from './util/apiURL';
import { useEffect } from "react";
import axios from "axios";
const API = apiURL();

function App() {
  const fetchData = async () => {
    let res;
    try {
      res = await axios.get(`${API}/logs`);
      console.log(res.data)
    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/logs"}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
