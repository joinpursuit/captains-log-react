import { NavLink } from "react-router-dom"
import "../Styles/NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/logs">Captain's Logs</NavLink>
            <NavLink to="/logs/new">New Log</NavLink>
        </nav>
    )
}

export default NavBar;