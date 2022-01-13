import "./NavBar.css";
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <article>
                <Link to="/">Captain's Log</Link>
            </article>
            <aside>
                <Link to="/logs">NEW LOG</Link>
            </aside>
        </header>
    )
}