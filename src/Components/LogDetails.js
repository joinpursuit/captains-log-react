import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();

function LogDetails({ deleteLog,show }) {
  const [log, setLog] = useState({});
  let { index } = useParams();
  let history = useHistory();

  const fetchLog = async () => {
    try {
      const res = await axios.get(`${API}/logs/${index}`);
      setLog(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchLog();
  }, []);

  const handleDelete = () => {
    deleteLog(index);
    history.push('/logs');
  };

  return (
    <article>
        {log.title}
        {/* {log.captainName} */}
      
      <h3>
        {log.isFavorite ? <span>⭐️</span> : null} {log.name}
      </h3>
      <h5>
        
        <span>
        {log.post}
          <a href={log.url}>{log.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.url}
      </h5>
      <h6>{log.category}</h6>
      <p>{log.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          {show}
      
          <Link to={`/logs/`}>
          
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