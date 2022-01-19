import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Logs from './Pages/Index';
import New from './Pages/New'
import Home from './Pages/Home'
import Show from './Pages/Show'
import Edit from './Pages/Edit'

import Navbar from "./Components/NavBar"

function App() {
  return (
  <div className="App">
    <Router> 
        <Navbar />
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path='/logs/new' element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
        </Routes>
        </main>
    </Router>

  </div>
  );
}

export default App;
