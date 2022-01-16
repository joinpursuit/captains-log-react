import { Routes, Route } from "react-router-dom";
import Logs from "./components/Logs";
import LogDetails from "./components/LogDetails";
import Home from "./components/Home";
import LogEditForm from "./components/LogEditForm";
import LogNewForm from "./components/LogNewForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/logs/:index" element={<LogDetails />} />
        <Route path="/logs/:index/edit" element={<LogEditForm />} />
        <Route path="/logs/new" element={<LogNewForm />} />
      </Routes>
    </>
  );
}

export default App;
