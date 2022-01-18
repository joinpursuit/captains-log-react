import "./NavBar.css";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <article>
                <Link to="/logs">Captain's Log</Link>
            </article>
            <aside>
                <Link to="/logs/new">New Log</Link>
            </aside>
        </header>
    )
}

export default NavBar