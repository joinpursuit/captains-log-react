// Dependencies
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar"

//Pages
import Home from "./Pages/Home"
import Index from "./Pages/Index";
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import New from "./Pages/New"


function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/logs" element={<Index />}/>
        <Route path="/logs/:index" element={<Show />}/>
        <Route path="/logs/:index/edit" element={<Edit />} />
        <Route path="/logs/new" element={<New />}/>
      </Routes>
    </div>
  );
};

export default App;