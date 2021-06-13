import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import NewLogs from "./Components/NewLogs";
import ShowLog from "./Components/ShowLog";
import Edit from "./Components/Edit"
function App() {
  return (<>
    <Router >
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/logs">
          <Logs />
        </Route>
        <Route path="/logs/new">
          <NewLogs  />
        </Route>
        <Route path="/logs/:index/edit">
          <Edit />
        </Route>
        <Route path="/logs/:index">
          <ShowLog />
        </Route>
      </Switch>
    </Router>
  </>);
}

export default App;
