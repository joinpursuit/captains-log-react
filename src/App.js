import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LogDetails from './components/LogDetails';
import LogEditForm from './components/LogEditForm';
import LogNewForm from './components/LogNewForm';
import Logs from './components/Logs';
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
  <NavBar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/logs' element={<Logs />} />
    <Route path='/logs/new' element={<LogNewForm />} />
    <Route path='/logs/:index' element={<LogDetails />} />
    <Route path='/logs/:index/edit' element={<LogEditForm />} />
  </Routes>
  </>
  )
}

export default App;
