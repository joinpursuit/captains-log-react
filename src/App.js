import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import {apiURL} from "./util/apiURL.js";

import Index from "./Pages/Index.js"
import Logs from "./Pages/Logs.js"
import New from "./Pages/New.js"
import Show from "./Pages/Show"
import NavBar from "./Components/NavBar.js"

const API_BASE = apiURL()

function App() {
  const [book, setBook] = useState([])

  const deletebook =(index)=>{}
 

  useEffect(() => {
    axios.get(`${API_BASE}/logs`).then((res)=>{
      const { data } = res;
      console.log(data)
      setBook(data)
    })
  }, []);
  
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/logs">
              <Logs logs={book}/>
            </Route>
            <Route path="/logs/new">
              <New />
            </Route>
            <Route path="/logs/:index">
              <Show log={book} deletelogs={deletebook}/>
            </Route>
          </Switch>
        </main>
      </Router>
        
    </div>
  )
}

export default App;
