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
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <table>
        <tbody>
          <tr>
            <td>Captain's Name</td>
            <td>{log.captainName}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{log.title}</td>
          </tr>
          <tr>
            <td>Entry</td>
            <td>{log.post}</td>
          </tr>
          <tr>
            <td>Were mistakes made?</td>
            <td>{log.mistakesWereMadeToday ? <div>😱</div> : <div>😎</div>}</td>
          </tr>
          <tr>
            <td>Days since last crisis</td>
            <td>{log.daysSinceLastCrisis}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default LogDetails;
