import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from '../util/apiURL';
const API = apiURL();

function LogDetails(props) {
  const { deleteLog } = props;
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  const fetchLog = async() =>{
    try {
      const response = await axios.get(`${API}/logs/${index}`);
      // console.log(response.data);
      setLog(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchLog()
  }, []);

  const handleDelete = () => {
    deleteLog(index)
    history.push('/logs')
  };

  return (
    <article>
      <h3>
        {/* {log.mistakesWereMadeToday ? <span>😢</span> : <span>😃</span>}  */}
        {log.title}
      </h3>
      <h5>
        <span>
          {/* <a href={log.title}>{log.title}</a> */}
          {log.title} - By {log.captainName}
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h5>
      <h6>{log.post}</h6>
      <p> {`Mistakes were made today: ${log.mistakesWereMadeToday}`}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
export default withRouter(LogDetails);


















