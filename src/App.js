import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Index from "./Components/Index";
import New from "./Components/New";
import Show from "./Components/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route exact path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
