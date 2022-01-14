import { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log";

function Logs() {
    const URL = process.env.REACT_APP_API_URL;
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        axios
        .get(`${URL}/logs`)
        .then((response) => setLogs(response.data));
    }, []);

    return (
        <div className="Logs">
        <section>
            <table>
            <thead>
                <tr>
                <th></th>
                <th>Take me there</th>
                <th>See this bookmark</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log, index) => {
                    return <Log key={index} log={log} index={index} />;
                })}
            </tbody>
            </table>
        </section>
        </div>
    );
}

export default Logs;