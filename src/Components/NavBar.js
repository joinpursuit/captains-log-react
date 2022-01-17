import { Link } from "react-router-dom";

import "./NavBar.css";


function NavBar() {
  return (
    <nav>
      <Link to="/logs">
        <h1>Captain's Log</h1>
      </Link>
      <button>
      <Link to="/logs/new">
        New Log
        {/* <button>New Log</button> */} {/* why doesn't this pass? */}
      </Link>
      </button>
      
    </nav>
  );
}

export default NavBar;