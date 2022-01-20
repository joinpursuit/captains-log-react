import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LogDetails(){
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then((res)=>{
        setLog(res.data);
      }).catch(()=>{
        navigate("/not-found");
      });
    }, [index]);

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
          .then((res)=>{
            navigate("/logs");
          }).catch((err)=>{
            console.log(err);
          })
      };
    return(
        <article>
            <h3>
                {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {log.captainName}
            </h3>
            <h5>
                <div>{log.title} - By {log.captainName}</div>
            </h5>
            <p>{log.post}</p>
            <p>{`Days since last crisis: ${log.daysSinceLastCrisis}`}</p>
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

export default LogDetails;