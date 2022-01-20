import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import Logs from "./Logs";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/logs/new" element={<New />} />
    </Routes>
  );
};

export default Routing;

// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import LogDetail from '../pages/LogDetail';
// import Logs from '../pages/Logs';

// const Routing = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/logs" element={<Logs />} />
//       <Route path="/logs/:index" element={<LogDetail/>} />
//     </Routes>
//   );
// };

// export default Routing;
