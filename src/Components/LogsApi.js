import { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log";

function LogsApi() {
    const [logs, setLogs] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get(`${URL}/logs`);
            setLogs(response.data)
        }
        fetchApi();
    }, []);

    return (
        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Take me there</th>
                            <th>See this Log</th>
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
export default LogsApi;