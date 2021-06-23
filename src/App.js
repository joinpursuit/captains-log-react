import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { apiURL } from './util/apiURL';

import NavBar from './components/NavBar';
import Home from './Page/Home';
import ShowIndex from './Page/ShowIndex';
import NewLog from './Page/NewLog';
import Logs from './Page/Logs';
import FourOFour from './Page/FourOFour';
import Edit from './Page/Edit';

const API_BASE = apiURL();

function App() {
  const [ logs, setLogs ] = useState([]);

  // const addLog = () => {};

  // const editLog = () => {};

  const deleteLog = (index) => {
    axios.delete(`${API_BASE}/logs/${index}`)
      .then(response => {
        const updateArray = [...logs];
        updateArray.splice(index, 1);
        setLogs(updateArray);
      })
      .catch(console.error());
  };

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

            <Route path="/logs/:index/edit">
              <Edit />
            </Route>

            <Route path="/logs/:index">
              <ShowIndex logs={logs} deleteLog={deleteLog}/>
            </Route>

            <Route path="/logs">
              <Logs logs={logs}/>
            </Route>

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
