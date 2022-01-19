import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./LogDetails.css";

const LogDetails = () => {
  const [log, setLog] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${id}`)
      .then((response) => setLog(response.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/logs/${id}`)
      .then(() => navigate("/logs"))
      .catch(() => navigate("/not_found"));
  };
  //   const handleBack = () => {
  //     navigate("/logs");
  //   };
  //   const handleEdit = () => {
  //     navigate(`/logs/${id}/edit`);
  //   };

  const { captainName, title, post, daysSinceLastCrisis } = log;
  return (
    <section className="log-details">
      <div className="log-details-head">
        <h3>
          {title} - By {captainName}
        </h3>
        <div>{post}</div>
        <div>{`Days since last crisis: ${daysSinceLastCrisis}`}</div>
      </div>
      <div className="log-details-buttons">
        <button className="gray">
          <Link to="/logs">Back</Link>
        </button>
        <button className="yellow">
          <Link to={`/logs/${id}/edit`}>Edit</Link>
        </button>
        <button className="red" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </section>
  );
};

export default LogDetails;
