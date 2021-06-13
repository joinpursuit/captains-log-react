import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";
import { apiURL } from "./util/apiURL";

import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

const API = apiURL();

function App() {
  const [captainLogs, setCaptainLogs] = useState([]);

  // const deleteBookmark = async (index) => {
  //   try {
  //     await axios.delete(`${API}/bookmarks/${index}`);
  //     const deleteIndex = [...bookmarks];
  //     deleteIndex.splice(index, 1);
  //     setBookmarks(deleteIndex);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const addNewCaptainLog = async (newCaptainLog) => {
    try {
      const res = await axios.post(`${API}/logs`, newCaptainLog);
      setCaptainLogs([...captainLogs, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateCaptainLog = async (updatedCaptainLog, index) => {
    try {
      await axios.get(`${API}/logs/${index}`, updatedCaptainLog);
      const newCaptainLog = [...captainLogs];
      newCaptainLog[index] = updatedCaptainLog;
      setCaptainLogs(newCaptainLog);
    } catch (err) {
      console.log(err);
    }
  };

  const fecthCaptainLog = async () => {
    try {
      let res = await axios.get(`${API}/logs`);
      setCaptainLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fecthCaptainLog();
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/logs">
            <Index captainLogs={captainLogs} />
          </Route>
          <Route path="/logs/new">
            <New addNewCaptainLog={addNewCaptainLog} />
          </Route>
          <Route exact path="/logs/:index">
            <Show />
          </Route>
          <Route path="/logs/:index/edit">
            <Edit updateCaptainLog={updateCaptainLog} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
