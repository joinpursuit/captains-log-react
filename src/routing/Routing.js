import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Logs from "../pages/Logs";
import Edit from "../pages/Edit";
import New from "../pages/New";
import Show from "../pages/Show";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/logs/:index" element={<Show />} />
      <Route path="/logs/:index/edit" element={<Edit />} />
      <Route path="/logs/new" element={<New />} />
    </Routes>
  );
};

export default Routing;
