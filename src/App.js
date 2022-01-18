import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import AllLogs from "./Pages/AllLogs"
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Show from "./Pages/Show";

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
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;