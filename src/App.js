import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar.js";

import Home from "./pages/Home.js";
import LogsIndex from "./pages/LogsIndex.js";
import Show from "./pages/Show.js"
import Edit from "./pages/Edit.js"
import Error from "./pages/Error.js";
import New from "./pages/New.js";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />

        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/logs" element={<LogsIndex />}></Route>
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={ <Edit/> }/>
            <Route path="/logs/new" element={ <New/> }/>
            <Route path="*" element={ <Error/> }/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
