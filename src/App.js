import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import AllLogs from "./components/AllLogs";
import NewLogForm from "./components/NewLogForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/logs" element={<AllLogs />} />
            <Route path="/logs/new" element={<NewLogForm />} />

          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
