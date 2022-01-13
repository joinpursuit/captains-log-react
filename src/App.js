import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Nav from "./components/Nav"
import Home from "./components/Home"
import Logs from "./components/Logs"
import LogDetails from "./components/LogDetails"
import NewLogs from "./components/NewLogs"
import EditLogs from "../components/EditLogs";

const App = () => {

    
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route exact path="/logs">
                        <Logs/>
                    </Route>
                    
                    <Route exact path="/logs/:index">
                        <LogDetails/>
                    </Route>

                    <Route exact path="/logs/:new">
                        <NewLogs/>
                    </Route>

                    <Route exact path="/logs/:edit">
                        <EditLogs/>
                    </Route>

                    <Route path="*"></Route>
                </Switch>
            </Router>
        </div>
    )
}

//That star path night not be needed just go back and delete later if anything. 
export default App;
