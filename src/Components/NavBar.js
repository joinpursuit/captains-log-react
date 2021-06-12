import { NavLink }  from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/logs">Captain's Logs</NavLink>
            <NavLink to="/logs/new">Add new Log</NavLink>
        </nav>
    )
}

export default NavBar;