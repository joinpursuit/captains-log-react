import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className='nav'>
      <h1>
        <Link to="/logs">Captain's Log</Link>
      </h1>
      <div id="new-log-button-container">
        <button>
          <Link to="/logs/new">New Log</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;