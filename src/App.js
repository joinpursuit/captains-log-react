import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";
import LogsApi from "./Components/LogsApi";
import LogDetails from "./Components/LogDetails";


function App() {
  return (
    <div>
      <NavBar />  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/logs" element={<LogsApi />} />
        <Route path="*" element={<FourOFour />} />
        <Route path="/logs/:index" element={<LogDetails />} />
      </Routes>
    </div>
  );
}

export default App;