import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
      {/* NavBar */}
        <NavBar />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
