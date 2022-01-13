import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Logs from "./Components/Index"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        {/* <Route path="" element={} /> */}
      </Routes>
    </div>
    )  
}

export default App;
