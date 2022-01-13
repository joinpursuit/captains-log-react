import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="" element={} /> */}
      </Routes>
    </div>
    )  
}

export default App;
