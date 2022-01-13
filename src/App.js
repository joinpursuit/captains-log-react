import { useState, useEffect } from "react";
import {Routes, Route } from "react-router-dom";
import axios from "axios";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Logs from "./components/Logs";
import LogDetails from "./components/LogDetails";
import NewLogs from "./components/NewLogs";
import EditLogs from "./components/EditLogs";

const App = () => {

    return (
        <div className="App">
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>

                    <Route path="/logs"element={<Logs/>}/>
                    
                    <Route path="/logs/:index"element={<LogDetails/>}/>

                    <Route path="/logs/:new"element={<NewLogs/>}/>

                    <Route path="/logs/:edit"element={<EditLogs/>}/>

                    <Route path="*"></Route>
                </Routes>
        </div>
    )
}

//That star path night not be needed just go back and delete later if anything. 
export default App;
