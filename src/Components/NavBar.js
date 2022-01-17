import { Link } from "react-router-dom";

import "./NavBar.css";


function NavBar() {
  return (
    <div className="nav">
      <Link to="/logs">
        <h1>Captain's Log</h1>
      </Link>
      <button>
        <Link to="/logs/new">
          New Log
          {/* <Link to="/logs/new"><button>New Log</button> </Link> */} {/* why doesn't this pass? */}
        </Link>
      </button>
      
    </div>
  );
}

export default NavBar;