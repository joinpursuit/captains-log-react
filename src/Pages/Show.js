import React from "react";
import { Link } from "react-router-dom";

export default function Show() {
  return (
    <div className="Show">
      <section>
        <h1>Captain's Log</h1>
        <h2>Show</h2>
        <Link to="/logs">Back</Link>
        {"  "}
        <Link to="/logs/0/edit">Edit</Link>
        {"  "}
      </section>
    </div>
  );
}
