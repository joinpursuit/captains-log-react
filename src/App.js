import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LogIndex from "./components/LogIndex";
import Logs from "./components/logs";
import Nav from "./components/Nav";
import NewLog from "./components/NewLog";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* main */}
      <main>
        {/* routes */}
        <Routes>
          {/* '/' home */}
          <Route exact path="/" element={<Home />} />
          {/* '/logs' */}
          <Route path="/logs" element={<Logs />} />
          {/* '/logs/new' */}
          <Route path="/logs/new" element={<NewLog />} />
          {/* '/logs/:index */}
          <Route path="/logs/:index" element={<LogIndex />} />
          {/* '/logs/edit */}
        </Routes>
        {/* Hello World */}
      </main>
    </div>
  );
}

export default App;
