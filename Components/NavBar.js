import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to={"/"}></NavLink>
      <NavLink to={"/logs"}>Logs</NavLink>
      <NavLink to={"/newLogs"}>New Logs </NavLink>
    </nav>
  );
};

export default NavBar