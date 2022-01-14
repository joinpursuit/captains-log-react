import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className='nav'>
      <h1>
        This is Navbar.js
        <Link to="/logs">Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
}

export default Navbar;