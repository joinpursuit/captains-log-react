import { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
    const [log, setLog] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
  
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/logs/${index}`)
        .then((res)=>{
            setLog(res.data);
        }).catch(()=>{
            navigate("/not-found");
        })  
    }, [index, navigate]);

    const handleDelete = () =>{
      axios.delete(`${process.env.REACT_APP_API_URL_FROM_OUR_BACKEND}/logs/${index}`)
        .then((res)=>{
          navigate("/logs");
        }).catch((err)=>{
          console.log(err);
        })
    };

    return (
      <article>
        <h3>
            {log.title} - By {log.captainName}
        </h3>
        <p>
            Post: {log.post}
        </p>
       
        <h2>
            Mistakes Made today:
            {log.mistakesWereMadeToday ? 
            (<span><input type="checkbox" checked disabled/>💥 Yes</span>) : 
            (<span><input type="checkbox" disabled/>🙅‍♂‍ No</span>)}
        </h2>

        <h5>
            Days since last crisis: {log.daysSinceLastCrisis}
        </h5>
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
  