//Dependencies

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

//Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/logs" element={<Index />}></Route>
            <Route path="/logs/:idx" element={<Show />}></Route>
            <Route path="/logs/:idx/edit" element={<Edit />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
