import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import New from "./pages/New";

function App() {
  return (
  <div className="App">
    <Router>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path= "/logs" element ={<Index/>}/>
          <Route path = "/logs/new" element = {<New/>}/>
        </Routes>
      </main>
    </Router>
  </div>
  )
}

export default App;
