import './LogsList.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from '../ListItem/ListItem';

const LogsList = () => {
  const [logs, setLogs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(async () => {
    const logsData = await axios.get(URL + '/logs');
    setLogs(logsData.data);
  }, []);

  const allListItems = logs.map((e) => <ListItem item={e} />);

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
