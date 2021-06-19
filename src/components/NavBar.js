import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <Link to='/logs'>Logs</Link>
            <Link to='/logs/new'>New Log</Link>
            <br />
            <h1>Captain's Log</h1>
        </nav>
    )
}

export default NavBar; 