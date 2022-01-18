import React from "react"
import NavBar from "./Components/Common/NavBar"
import Logs from "./Components/Logs"
import EditLog from "./Components/EditLog"
import NewLog from "./Components/NewLog"
import {Routes, Route} from "react-router-dom"
import LogsDetails from "./Components/LogDetail"

function App() {
  return (
    <div className="wrap">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<div>Home</div>}/>
        <Route path="/logs" element={<Logs/>} />
        <Route path="/logs/:index" element={<LogsDetails/>} />
        <Route path="/logs/:index/edit" element={<EditLog/>}/>
        <Route path="/logs/new" element={<NewLog/>} />
      </Routes>
    </div> 
  )
}

export default App;
