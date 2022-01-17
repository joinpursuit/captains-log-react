import './LogsList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Log from '../Log/Log';

const LogsList = () => {
  const [logs, setLogs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(async () => {
    const logsData = await axios.get(URL + '/logs');
    setLogs(logsData.data);
  }, []);

  const allListItems = logs.map((e, i) => <Log item={e} index={i} />);

  return (
    <table className="LogsList">
      <tr className="heading">
        <th>Mistakes</th>
        <th>Captain's Name</th>
        <th>See this Log</th>
      </tr>
      {allListItems}
    </table>
  );
};

export default LogsList;