import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENTS
import NavBar from "./Components/Navbar";

// PAGES AKA REACT ROUTES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      {/* <h1>IT WORKS</h1> */}
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
