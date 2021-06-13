import { Link } from "react-router-dom";

const Log = ({ title, index }) => {
  return (
    //   <a href={`logs/${index}`}><li key={index}>{title}</li></a>
    <div>
      <Link to={`/logs/${index}`}>
        <li key={index}>{title}</li>
      </Link>
    </div>
  );
};

export default Log;
