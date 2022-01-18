import { Link } from "react-router-dom";

const Log = ({log, index}) => {
    return (
        <section>
            <span>⭐️</span>
            {/* {log.title} */}
            {/* {log.post} */}
            <Link to={`/logs/${index}`}> ✏️ </Link>
        </section>
    );
}
export default Log;