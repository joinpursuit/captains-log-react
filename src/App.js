import { Route, BrowserRouter as Router, Routes, } from "react-router-dom"

import HomePage from "./Pages/HomePage";
import FourOFour from "./Pages/FourOFour";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/logs" element={<Index />}/>
            <Route path="/logs/new" element={<New />}/>
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="/logs/:index" element={<Show />}/>
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
