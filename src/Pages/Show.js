import React from "react";
import LogDetails from "../Components/LogDetails";
import { Link, useParams } from "react-router-dom";

function Show() {
    let { index } = useParams();
    return (
        <>
        <div>
            <h2>Show</h2>
            <LogDetails />
        </div>
        <div>
        <Link to={`/logs/${index}/edit`}>
          <button>Edit</button>
        </Link>
        </div>
        <Link to={"/logs"}>
          <button>Back</button>
        </Link>
      </>
    );
}

export default Show;