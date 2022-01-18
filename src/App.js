import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LogDetails from "./Components/LogDetails";

import AllLogs from "./Pages/AllLogs"
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logs" element={<AllLogs />} />
          <Route path="*" element={<FourOFour />} />
          <Route path="/logs/new" element={<New/>} />
          <Route path="/logs/:index" element={<LogDetails />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;