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
  }, [logs]);

  const allListItems = logs.map((e, i) => <Log key ={i.toString()} item={e} index={i} />);

  return (
    <div className="LogsList">
      <div className="heading">
        <h4>Mistakes</h4>
        <h4>Captain's Name</h4>
        <h4>See this Log</h4>
      </div>
      {allListItems}
    </div>
  );
};

export default LogsList;