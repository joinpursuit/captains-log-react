import { useEffect, useState } from "react";
import Log from "./Log";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Logs = () => {
    const [ logs, setLogs ] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/logs`)
            .then((res)=> {
                console.log(res);
            })
    })

    return (
        <section className="logs">
            <div>Take me there</div>
            <Log/>
        </section>
    );
}
export default Logs;