import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Log from "./Log";

function LogDetails() {
    const [log, setLog] = useState([]);
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      async function fetchApi() {
          const response = await axios.get(`${URL}/logs`);
          setLog(response.data)
      }
      fetchApi();
  }, []);

    const handleDelete = () => {
      axios.delete(`${URL}/logs/${index}`).then(() => navigate("/logs"));
    };

    return (
        <article>
              <h2>Show</h2>
              <p></p>
              <h3>
                {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {log.captainName}
              </h3>
              <h5>
                {log.title}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h5>
              <h6>{log.post}</h6>
              <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
              <div>
                <div>
                    <a href ={"/logs"}>
                        <button>Back</button>
                    </a>
                </div>
                <div>
                    <a href={`logs/${index}/edit`}>
                        <button>Edit</button>
                    </a>
                </div>
                </div>
                <div>
                  {" "}
                  <button onClick={handleDelete}>Delete</button>
                </div>
            </article>
          );
}

export default LogDetails;