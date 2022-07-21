import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
    const [log, setLog] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(
        () => {
          axios
            .get(`${API}/logs/${index}`)
            .then((response) => setLog(response.data))
            .catch((error) => navigate(`/404`));
        }, [index]);

        const handleDelete = () => {
            axios
              .delete(`${API}/logs/${index}`)
              .then((response) => navigate(`/logs`))
              .catch((error) => console.error(error));
          };

  return (
    //need to fix this. 
    <article>
      <h3>
       Captain Name: {log.captainName ? <span>⭐️</span> : null} {log.captainName}
      </h3>
      <h5>
        <span>
         Title:  </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.title}
      </h5>
      <h6>Post: {log.post}</h6>

{`Mistakes Were Made Today: ${log.mistakesWereMadeToday ? "True" : "False"}`}

      {/* missing day */}
      <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>



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


    
  )
}




