import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Logs from "./components/Logs";
import LogDetails from "./components/LogDetails";
import NewLog from "./components/NewLog";
import EditLog from "./components/EditLog";

const API = process.env.REACT_APP_API_URL;

const App = () => {
    const [log, setLog] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`${API}/logs`);
        setLog(response.data);
    };
    useEffect(() => {fetchData();
}, []);

    return (
        <div className="App">
                <Nav/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>

                    <Route path="/logs"element={<Logs/>}/>
                    
                    <Route path="/logs/:index"element={<LogDetails/>}/>

                    <Route path="/logs/new"element={<NewLog/>}/>

                    <Route path="/logs/:index/edit"element={<EditLog/>}/>

                    <Route path="/logs/:index"element={<EditLog/>}/>

                    <Route path="*"></Route>
                </Routes>
        </div>
    )
}

export default App;