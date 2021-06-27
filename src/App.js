import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Logs from "./components/Logs";
import Log from "./components/Log";
import New from "./components/New";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" render={() => <div><h1>Welcome to Captain's Logs API</h1></div>} />
            <Route path="/logs/new" component={New} />
            <Route path="/logs/:index">
              <Log />
            </Route>
            <Route path="/logs">
              <Logs />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App;
