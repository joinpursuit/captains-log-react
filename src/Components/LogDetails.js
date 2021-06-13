import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
function BookmarkDetails(props) {
  const { deleteLogs } = props;
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let history = useHistory();
  useEffect(() => {}, []);
  const handleDelete = () => {};
  return (
    <article>
      <h3>
        {log.isFavorite ? <span>:star:️</span> : null} {log.title}
      </h3>
      <h5>
        <span>
          <a href={log.url}>{log.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h5>
      <h6>{log.post}</h6>
      <p>{log.mistakesWereMadeToday}</p>
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
export default withRouter(BookmarkDetails);


















