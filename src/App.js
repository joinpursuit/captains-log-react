import { Router as Route } from "react-router-dom";
import NavBar from "../Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="./" component={Home} />
      <Route exact path="./logs" component={Logs} />
      <Route exact path="./newLogs" component={NewLogs} />
    </div>
  );
}

export default App;
