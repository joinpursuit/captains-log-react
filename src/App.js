import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

// REACT_APP_API_URL

const App = () => {
  return(
  <div className="App">
<NavBar/>
<main>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/logs" element={<IndexLogs/>}/>
  </Routes>
</main>
  </div>
  );
}

export default App;
