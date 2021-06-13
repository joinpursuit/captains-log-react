import React from "react";
import { useParams, Link } from "react-router-dom";

const LogDetails = ({ log }) => {
  const { index } = useParams();

  if (!log) {
    return null;
  }
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = log;

  return (
    <div>
      <h1>Captain's Log</h1>
      <h1>Show</h1>
      <h1>{title} - By {captainName}</h1>
      <h3>{post}</h3>
      <h4>{mistakesWereMadeToday}</h4>
      <h5>Days since last crisis: {daysSinceLastCrisis}</h5>
      <button>
        <a href={`/logs`}>Back</a>
      </button>
      <button>
        <Link to={`/logs/${index}/edit`}>Edit</Link>
      </button>
    </div>
  );
};

// return (
//     <>
//       <article className="container log-details">
//         <h3>
//           {log.mistakesWereMadeToday ? <span>💥</span> : null} {log.title} - By{" "}
//           {log.captainName}
//         </h3>
//         <h5>{log.post}</h5>
//         <h6>
//           <span>Days since last crisis: </span>
//           {log.daysSinceLastCrisis}
//         </h6>
//         <p>{log.description}</p>
//       </article>
//       <div className="showNavigation">
//         <div>
//           <button>
//             <Link to={`/logs`}>Back</Link>
//           </button>
//         </div> 

//         <div>
//           <button>
//             <Link to={`/logs/${index}/edit`}>Edit</Link>
//           </button>
//         </div>
//         <div> {/* <button onClick={handleDelete}>Delete</button> */}</div>
//       </div>
//     </>
//   );

export default LogDetails;
