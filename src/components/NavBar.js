import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <div><button><Link to="/logs">Logs</Link></button></div>
            <div><button><Link to="/logs/new">New Log</Link></button></div>
            {/* <div><h1><Link to="/">Captain's Log</Link></h1></div> */}
        </nav>
    )
      
}