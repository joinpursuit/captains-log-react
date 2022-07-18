import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="logo">Captain's Log</h1>
      </Link>
      <Link to="/logs">
        <button className="logButton">LOGS</button>
      </Link>
      <Link to="/logs/new">
        <button className="newLogButton">NEW</button>
      </Link>
    </div>
  );
};

export default Nav;