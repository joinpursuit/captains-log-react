import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Pages/Home"
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
        <NavBar />
      {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/logs" element={<Index />} />
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/new" element={<New />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
    </div>
  );
}

export default App;
