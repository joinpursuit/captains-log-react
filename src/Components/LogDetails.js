import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();

const LogDetails = ({ deleteLog }) => {
  const [log, setLog] = useState({});
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const res = await axios.get(`${API}/Logs/${index}`);
        setLog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLog();
  }, [index]);

  const handleDelete = () => {
    deleteLog(index);
    history.push("/logs");
  };

  return (
    <section>
      <div>
        <Link to={`/logs`}>
          <button>Back</button>
        </Link>
        <Link to={`/logs/${index}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              {log.title} - By {log.captainName}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entry</td>
            <td>{log.post}</td>
          </tr>
          <tr>
            <td>Were mistakes made?</td>
            <td>{log.mistakesWereMadeToday ? <div>😱</div> : <div>😎</div>}</td>
          </tr>
          <tr>
            <td>Days since last crisis: {log.daysSinceLastCrisis}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default LogDetails;
