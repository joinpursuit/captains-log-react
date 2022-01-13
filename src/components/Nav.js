import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="navBar">
        <h1>Captain's Log</h1>
        <Link to="/">
          <div className="homeButton">HOME</div>
        </Link>
        <Link to="/logs">
          <div className="logButton">LOGS</div>
        </Link>
        <Link to="/logs/new">
          <div className="newLogButton">NEW</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
