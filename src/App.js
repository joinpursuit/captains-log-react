import React from 'react';
import WelcomePage from './Components/WelcomePage'
import NavBar from './Components/NavBar';
import Logs from './Components/Logs'
import LogsForm from './Components/LogsForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'


class App extends React.Component {
  render() {
    return(
      <div>
        <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<WelcomePage/>}/>
          <Route path="/logs" element={<Logs/>}/>
          <Route path="/logs/new" element={<LogsForm/>}/>
        </Routes>
        </Router>
      </div>
    )
    }
}

export default App;
