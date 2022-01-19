import { Routes, Route } from "react-router-dom";

import NavBar from "./compontents/Nav";
import Logs from "./compontents/Logs";
import LogDetails from "./compontents/LogDetails";
import NewLog from "./compontents/NewLog";
import EditLogs from "./compontents/EditLogs";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/:index" element={<LogDetails />} />
        <Route path="/logs/new" element={<NewLog />} />
        <Route path="/logs/:index/edit" element={<EditLogs />} />
      </Routes>
    </div>
  );
}

export default App;
