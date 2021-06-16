import {useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Logs from './components/Logs'
import NewLog from './components/NewLog'
import Log from './components/Log'


const App = () => {


  return (
    <div className='App'>
      <Router>
        <NavBar />
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path ='/logs'>
              <Logs />
            </Route>

            <Route path ='/logs/new'>
              <NewLog />
            </Route>

            <Route path ='/logs/:index'>
              <Log />
            </Route>


          </Switch>

      </Router>
    </div>
  )
}





export default App; 