import NavBar from "./Components/NavBar";
import Index from "./Pages/Index.js"
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [logs, setLogs] = useState([]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/logs">
          <Index logs={logs} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
