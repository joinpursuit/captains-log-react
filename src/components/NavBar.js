//Display 2 links , /logs & /logs/new
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <h1><Link to="/">Captain's Log</Link></h1>
            <button>
                <Link to="/logs">Logs</Link>
            </button>
            <button>
                <Link to="/logs/new">New Log</Link>
            </button>
        </nav>
    )
      
}