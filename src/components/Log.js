import { Link } from "react-router-dom";

function Log({ log, index }) {
return (
    <tr>
    <Link to={`/logs/${index}`}>{log.title}</Link>
    </tr>
);
}
//Displays a list of `log.title` that are clickable to take the user to `/logs/:index`.

export default Log;