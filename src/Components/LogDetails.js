import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
    .then((res)=>{
      setLog(res.data);
    }).catch(()=>{
      navigate("/not-found")
    });

    // fetch(`${process.env.REACT_APP_API_URL}/logs/${index}`)
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     setLog(data);
    //   }).catch(()=>{
    //     navigate("/not-found");
    //   });

  }, [index])
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
        {log.mistakesWereMadeToday ? <span>💥</span> : null} {log.title} - By {log.captainName}
      </h3>
      <h5>
        <span>
          {log.post}
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* {log.post} */}
      </h5>
      <h6>Days since last crisis: {log.daysSinceLastCrisis}</h6>
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
};

export default LogDetails;