import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import { apiURL } from "./util/apiURL";

// further down..., but still above `App` component
const API = apiURL();

function App() {
  const { logs, setLogs } = useState;

  const fetchLogs = async () => {
    axios
      .get(`${API}/logs`)
      .then(
        (response) => setLogs(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logs">
            <Logs logs={logs} />
          </Route>
          {/* <Route path="/logs/new">
            <New addBookmark={addBookmark} />
          </Route>
          <Route exact path="/logs/:index">
            <Show bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
