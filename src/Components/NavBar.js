import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/logs">Captain's Logs</NavLink>
        </nav>
    )
}

export default NavBar;