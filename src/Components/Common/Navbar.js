import "./NavBar.css";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <header className="Log">
            <article>
                <Link to="/logs">Captain's Log</Link>
            </article>
            <aside>
                <Link to="/logs/new">NEW LOG</Link>
            </aside>
        </header>
    )
}

export default NavBar