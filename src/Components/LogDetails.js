import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter} from "react-router-dom";
import axios from "axios";
import { apiURL} from "../util/apiURL";


function LogDetails(props) {
    const { deleteLog } = props;
    const [log, setLog] = useState([]);
    const API_BASE = apiURL();

    let { index } = useParams();
    let history = useHistory();


    useEffect(() => {
        axios.get(`${API_BASE}/logs/${index}`)
            .then(response => {
                setLog(response.data);
            },
            error => {console.error(`Error: ${error}`)}
            )
            .catch(c => {
                console.warn(`Warning: ${c}`);
                history.push("/not-found")
            })
    }, [index, history, API_BASE]);


    const handleDelete = () => {
        deleteLog(index);
        history.push("/logs");
    }

    return (
        <article>
            <h3>
                {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {" "} {log.captainName}
            </h3>
            <h5>
                <span>
                    {log.title}
                </span>
            </h5>
            <h6>
                {`${log.captainName} has been avoiding crisis since ${log.daysSinceLastCrisis} days.`}
            </h6>
            <p>{`Post: ${log.post}`}</p>

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

export default withRouter(LogDetails)



