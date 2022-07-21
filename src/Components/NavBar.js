import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <h2>
        <Link to='/logs'>Captain's Log</Link>
      </h2>
      <button>
        <Link to='/logs/new'>New Log</Link>
      </button>
    </nav>
  );
};
export default NavBar;
