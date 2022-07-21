import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h1>Captain's Log</h1>
      <h1>
        <Link to="/logs">Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
};

export default Nav;
