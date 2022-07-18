import { useState, useEffect } from 'react';
import axios from 'axios';
import Log from './Log';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setLogs(response.data);
    });
  }, []);

  return (
    <div className="Logs">
      <section>
        <table>
          <thead></thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Logs;