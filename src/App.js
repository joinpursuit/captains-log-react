import React from "react"
import NavBar from "./Components/Common/NavBar"
import Logs from "./Components/Pages/Routes/Logs"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="wrap">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<div>Home</div>}/>
      <Route path="/logs" element={<Logs/>} />
      </Routes>
    </div> 
  )
}

export default App;
