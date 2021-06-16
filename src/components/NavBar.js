import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <Link to='/logs'>Logs</Link>
            <Link to='/logs/:index'>Single Log</Link>
            <Link to='/logs/new'>New Log</Link>
        </nav>
    )
}

export default NavBar; 