import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import AllLogs from "./components/AllLogs";
import ShowIndexedLog from "./components/ShowIndexedLog";
import NewLogForm from "./components/NewLogForm";
import EditLog from "./components/EditLog";
import ErrorMsg from "./components/ErrorMsg"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/logs" element={<AllLogs />} />
            <Route path="/logs/new" element={<NewLogForm />} />
            <Route path="/logs/:index" element={<ShowIndexedLog />} />
            <Route path="/logs/:index/edit" element={<EditLog />} />
            <Route path="*" element={<ErrorMsg />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
