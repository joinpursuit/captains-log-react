import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Edit from "./Pages/Edit.js"
import FourOFour from "./Pages/FourOFour"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import New from "./Pages/New"
import Show from "./Pages/Show"
const URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:index" element={<Show />} />
        <Route path="/bookmarks/:index/edit" element={<Edit/>} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
    )  
}

export default App;
