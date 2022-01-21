import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import LogIndex from './LogIndex';
import Logs from './Logs';
import NewLog from './NewLog';
import EditLog from './EditLog';

const Routings = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/logs/new" element={<NewLog />} />
      <Route path="/logs/:index/edit" element={<EditLog />} />
      <Route path="/logs/:index" element={<LogIndex />} />
    </Routes>
  );
};

export default Routings;