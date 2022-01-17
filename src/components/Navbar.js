import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className='nav'>
      <h1>
        <Link to="/logs">Captain's Log</Link>
      </h1>
      <div id="new-log-button-container">
        <Link to="/logs/new">
          <button>New Log</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;