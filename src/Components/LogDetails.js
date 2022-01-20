import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
    .then((res)=>{
      setLog(res.data);
    })
    .catch(()=>{
      navigate("/not-found");
    })
  }, [index, navigate]);

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
    .then((res)=>{
      navigate("/logs");
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <article>
      <h5>
        <span>
          {log.title} - By {log.captainName}
        </span>
      </h5>
      <h6>{log.post}</h6>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default LogDetails;
