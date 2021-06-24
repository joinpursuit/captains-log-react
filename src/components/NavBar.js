import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <button>
                <Link to="/">Home</Link>
            </button>{' '}

            <button>
                <Link to="/logs">List of Logs</Link>
            </button>{' '}

            <button>    
                <Link to="/logs/new">New Log</Link>
            </button>
        </nav>
    );
};

export default NavBar;
