import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Logs from './Pages/Index';
import FormPage from './Pages/New'
import Home from './Pages/Home'
import Show from './Pages/Show'

//Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path='/logs/new' element={<FormPage />} />
            <Route path="/logs/:index" element={<Show />} />


        </Routes>
        </main>
      </Router>
    </div>
  )
}


export default App;