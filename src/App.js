import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
import FourOFour from "./Pages/FourOFour.js";

function App() {
  return (
  <div className="App">
  <Router>
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:index" element={<Show />} />
        <Route path="/logs/:index/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </main>
  </Router>
</div>
);
}

export default App;
