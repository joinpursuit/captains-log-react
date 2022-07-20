import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav.js'



function App() {
  return <div>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/logs" element={<Logs />}></Route>
    <Route path="/logs/new" element={<NewLogs />}></Route>
    </Routes>
  </div>;
}

export default App;
