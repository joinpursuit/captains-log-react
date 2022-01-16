import {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return(
            <nav>
                <h1 className="nav-title">&#123; <Link to="/">Captain's Log</Link> &#125;</h1>
                <div className="nav-links">
                    <button><Link to="/logs">Read Log</Link></button>
                    <button><Link to="/logs/new">Create Log</Link></button>
                </div>
            </nav>
        )
    }
}

export default Navbar;