import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/logs">Captain's Logs</NavLink>
            <NavLink to="/logs/new">Add New Entry</NavLink>
        </nav>
    )
}

export default NavBar;