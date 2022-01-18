import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
        <NavBar />
      {/* Routes */}
        <Routes>
          <Route path="/" />
          <Route path= "/logs" />
        </Routes>
    </div>
  );
}

export default App;
