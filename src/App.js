import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIndex from "./pages/LogIndex";
import Logs from "./pages/logs";
import Nav from "./components/Nav";
import NewLog from "./pages/NewLog";
import EditLog from "./pages/EditLog";

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
          {/* '/logs/edit */}
          <Route path="/logs/:index/edit" element={<EditLog />} />
          {/* '/logs/:index */}
          <Route path="/logs/:index" element={<LogIndex />} />
        </Routes>
        {/* Hello World */}
      </main>
    </div>
  );
}

export default App;
