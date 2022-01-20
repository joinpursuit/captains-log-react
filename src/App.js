import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import EditLog from "./Pages/EditLog";
import LogIndex from "./Pages/LogIndex";
import Logs from "./Pages/Logs";
import NewLog from "./Pages/NewLog";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<LogIndex />} />
          <Route path="/logs/:index/edit" element={<EditLog />} />
        </Routes>
      </Router>
    </div>
  )
  
}

export default App;
