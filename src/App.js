import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

//Components
import NavBar from "./Components/NavBar";

const App = () => {
  return (
  <div className="App">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:index" element={<Show />}/>
        <Route path="/logs/:index/edit" element={<Edit />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
