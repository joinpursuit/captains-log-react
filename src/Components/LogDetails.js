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
      <h3>
        {log.isFavorite ? <span>⭐️</span> : null} {log.name}
      </h3>
      <h5>
        <span>
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

export default LogDetails;
