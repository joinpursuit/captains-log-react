import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./src/Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
      {/* NavBar */}
        <NavBar />
      {/* Routes */}
        <Routes>
          <Route path="/" />
          <Route path= "/logs" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
