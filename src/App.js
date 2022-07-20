import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:index" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
