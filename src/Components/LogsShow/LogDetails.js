import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

import "./LogDetails.scss";

const API = process.env.REACT_APP_API_URL;

const LogDetails = () => {
  const [log, setLog] = useState({});
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // eslint-disable-line

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="showLog">
      <header>Captain's Log</header>
      <br />
      <h1>
        {log.title} - By {log.captainName}
      </h1>
      <p>Post: {log.post}</p>
      <span>
        Mistakes today: {log.mistakesWereMadeToday ? "True" : "False"}
        <br />
        Days since last crisis: {log.daysSinceLastCrisis}
      </span>
      <section className="logButtons">
        <Link className="logLinks" to="/logs">
          <Button variant="secondary">Back</Button>
        </Link>
        <Link className="logLinks" to={`/logs/${index}/edit`}>
          <Button variant="primary">Edit</Button>
        </Link>
        <Link className="logLinks" to={`/logs`}>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default LogDetails;
