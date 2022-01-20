import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/logs">Logs</Link>

      <Link to="/new">New</Link>
    </nav>
  );
};

export default NavBar;
