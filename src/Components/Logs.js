import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";

function Logs() {
  const [logs, Logs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  //http://localhost:3003/bookmarks
  // useEffect(() => {
  //   axios.get(`${API}/bookmarks`)
  //   .then((response) => {
  //     console.log(response)
  //     console.log(response.data)
  //     setBookmarks(response.data)
  //   })
  //   .catch((e) => console.log('catch', e))
  // }, [])

  useEffect(() => {
    axios
      .get(`${URL}/logs`) //request to slash bookmarks -- this actually looks like http://localhost:3003
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setLogs(response.data);
      })
      .catch((e) => console.log("catch", e));
    console.log("we hit the useEffect!");
    // const fetchData = async () => {
    //   const response = await axios.get(`${API}/bookmarks`);
    //   setBookmarks(response.data);

    // fetchData();
  }, []);

  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this log</th>
            </tr>
          </thead>
          <h1>{count}</h1>
          <button onClick={() => setCount(10)}>set to 10</button>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
