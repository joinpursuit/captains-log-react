import { Link } from "react-router-dom";

const Log = (props) => {
  const { title } = props.log;
  const { id } = props.id;
  return (
    <div className="log">
      <Link to={`/logs/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default Log;
