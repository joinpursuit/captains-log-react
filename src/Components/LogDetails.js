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

{/* - captainName
  - title
  - post
  - mistakesWereMadeToday
  - daysSinceLastCrisis */}

`{log.title} - By {log.captainName}`
       <br></br>

        {log.post}<br></br>
       
        {/* {log.captainName} */}
      

        {log.mistakesWereMadeToday ? <span>Mistakes Were made Today</span> : null} <br></br>
 
      `"Days since last crisis: {log.daysSinceLastCrisis}"`
      <h5>
        
        <span>
       
       
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
      </h5>
   
      <div className="showNavigation">
        <div>
          {" "}
          {show}
      
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