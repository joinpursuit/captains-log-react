import React, { Component} from 'react';
import Logs from "./Components/Logs"
// import {apiURL} from "./util/apiURL.js";
// import axios from "axios";
import {Route, Switch, Link } from "react-router-dom"


export default class App extends Component {
    render() {
      return (
        // <div>
        //   <h1>Hi</h1>
        // </div>
        <div>
          <nav>
            <h1>
              <Link to='/logs'>Captain's Log</Link>
            </h1>
            <button>
              <Link to="/logs/new">New log</Link>
            </button>
          </nav>

          <Switch>
            <Route path='/logs' component= {Logs}/>
            <Route path="/logs/new" component={Logs}/>
            <Route path = '/logs/:index'/>
          </Switch>
       
        </div>
      )
    }
}