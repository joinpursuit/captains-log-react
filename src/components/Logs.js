import Log from "./Log";
import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from 'react-bootstrap';

function Logs(){
    const [logs, setLogs] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    console.log(API_URL)
    useEffect(()=>{
        axios.get(`${API_URL}/logs`)
        .then((res) => {
            setLogs(res.data);
            // console.log(res.data)
        }).catch((err) => {
            throw err;
        });
    }, [])

    return(
        <div className="Log">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Mistakes</th>
                    <th>Captain Name</th>
                    <th>Log Post</th>
                </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => {
                        return <Log key={index} log={log} index={index} />;
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Logs;