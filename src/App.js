import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import{Switch} from "react-router-dom"
import NavBar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import LogsIndex from "./pages/LogsIndex.js";
import Logs from "./components/Logs.js"

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/logs" elements={<LogsIndex />}></Route>
          {/* <Route path="/logs/new" element={ <New/> }/>
          <Route path="/logs/:index" element={ <Show/> }/>
          <Route path="/logs/:index/edit" element={ <Edit/> }/>
          <Route path="*" element={ <Error/> }/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
