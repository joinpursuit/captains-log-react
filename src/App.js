import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Logs from './Pages/Log';

//Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
        <Routes>
            <Route path="/logs" element={<Logs />} />
        </Routes>
        </main>
      </Router>
    </div>
  )
}


export default App;
