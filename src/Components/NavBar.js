import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to='/logs'>Current Captains' Logs</Link>
      </h1>
      <button>
        <Link to='/logs/new'>New Captain Log</Link>
      </button>
    </nav>
  );
}
