import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="container-fluid p-3 bg-primary text-white btn-group gap-3">
        <h1 className="">
          <Link className="btn btn-outline-warning text-white" to="/logs">Logs</Link>
        </h1>
        <h1 className="">
        {/* <button className="btn btn-warning text-primary rounded"> */}
          <Link className="btn btn-warning text-primary rounded text-decoration-none" to="/logs/new">New Log</Link>
        {/* </button> */}
        </h1>
      </nav>
    );
}

export default NavBar