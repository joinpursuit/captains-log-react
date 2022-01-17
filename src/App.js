//dependencies
import { Routes, Route } from "react-router-dom";
//components
import NavBar from "./components/NavBar";
//pages
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Routes>
          <Route exact path ="/" element={ <Home/> }/>
          <Route path="/logs" element={ <Index/> }/>
          <Route path="/logs/new" element={ <New/> }/>
          <Route path="/logs/:index" element={ <Show/> }/>
          <Route path="/logs/:index/edit" element={ <Edit/> }/>
          <Route path="*" element={ <Error/> }/>
        </Routes>
      </main>
    </>
  )
}

export default App;