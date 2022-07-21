import { useEffect, useState } from 'react';
import axios from 'axios';
import Log from './log';
const API = process.env.REACT_APP_API_URL;

function LogsGallery() {
  const [logs, setLog] = useState([]);
  useEffect(() => {
    //fetch a list of bookmarks from our API
    axios.get(`${API}/logs`).then((res) => {
      setLog(res.data);
      console.log(res);
    });
    //load those bookmarks into our react state
  }, []);
  return (
    <div className='LogsGallery'>
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, arrayIndex) => {
              return <Log key={arrayIndex} log={log} arrayIndex={arrayIndex} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default LogsGallery;
