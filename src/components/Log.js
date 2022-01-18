import { Link } from "react-router-dom";
import "./Log.css"

//http://localhost:3000/logs
const Log = ({log, index}) => {
    return (
        <section className="log">
            <span>⭐️</span>
            <div>{log.title}:</div>

            <div> {log.post} </div>
            <a href={`http://localhost:3000/logs/${index}`} target="_blank" rel="noreferrer">
                <Link to={`/logs/${index}`}> 🔶View</Link>
            </a>
            
        </section>
    );
}
export default Log;