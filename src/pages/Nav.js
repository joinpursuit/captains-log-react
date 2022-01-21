import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/logs">Logs</Link>
      <Link to="/logs/new">New</Link>
    </nav>
  );
};

export default Nav;
