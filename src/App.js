import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import {apiURL} from "./util/apiURL.js";

import Index from "./Pages/Index.js"
import Edit from "./Pages/Edit.js";
import Logs from "./Pages/Logs.js"
import New from "./Pages/New.js"
import Show from "./Pages/Show"
import Four0Four from "./Pages/Four0Four.js";
import NavBar from "./Components/NavBar.js"

const API_BASE = apiURL()

function App() {
  const [book, setBook] = useState([])

  const addBook = (newBook)=>{
    axios.post(`${API_BASE}/logs`, newBook).then((res)=>{
      return axios.get(`${API_BASE}/logs`)
    }).then((res)=>{
      setBook(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  const updatebook = (updateBook, index)=>{
    axios.put(`${API_BASE}/logs/${index}`, updateBook).then(
      //success
      (res)=>{
        const update = [...book]
        update[index]= updateBook
        setBook(update)
      },
      //error
      (error)=>{
        console.log(error)
      }
    )
  }

  const deletebook =(index)=>{
    axios.delete(`${API_BASE}/logs/${index}`).then(
    (res)=>{
      const del = [...book]
      del.splice(index, 1)
      setBook(del)
    },
    (err)=>{console.log(err)})
  }
 

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
              <New  addBook={addBook}/>
            </Route>
            <Route  exact path="/logs/:index">
              <Show log={book} deletelogs={deletebook}/>
            </Route>
            <Route path="/logs/:index/edit">
              <Edit logs={book} updatelogs={updatebook}/>
            </Route>
            <Route path={'*'}>
              <Four0Four />
            </Route>
          </Switch>
        </main>
      </Router>
        
    </div>
  )
}

export default App;
