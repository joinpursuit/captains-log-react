import { useState, useEffect } from 'react';
import { apiURL } from './util/apiURL';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar';
import Home from './Page/Home';
import ShowIndex from './Page/ShowIndex';
import NewLog from './Page/NewLog';
import Logs from './Page/Logs';
import FourOFour from './Page/FourOFour';
import Edit from './Page/Edit';
import { response } from 'express';

const API_BASE = apiURL();


function App() {
  const [ logs, setLogs ] = useState([]);

  const addLog = () => {};

  const editLog = () => {};

  const deleteLog = () => {};

  useEffect(() => {
    axios.get(`${API_BASE}/logs`)
      .then(response => {
        const { data } = response;
        setLogs(data);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <NavBar />
        <main>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/logs/new">
              <NewLog />
            </Route>

            <Route path="/logs/:id/edit">
              <Edit />
            </Route>

            <Route path="/logs/:id">
              <ShowIndex />
            </Route>

            {/* <Route path="/logs">
              <Logs logs={logs}/>
            </Route> */}

            <Route path="*">
              <FourOFour />
            </Route>

          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
