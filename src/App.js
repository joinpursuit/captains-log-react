import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Logs from './components/Logs';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
  <NavBar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/logs' element={<Logs />} />
  </Routes>
  </>
  )
}

export default App;
