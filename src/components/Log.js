import { Link } from "react-router-dom";

const Log = ({log, index}) => {
    return (
        <section>
            <span>⭐️</span>
            <div>{log.title}:</div>

            <div> {log.post} </div>
            <Link to={`/logs/${index}`}> ✏️ </Link>
        </section>
    );
}
export default Log;