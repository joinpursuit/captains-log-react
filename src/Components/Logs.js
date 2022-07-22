import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Log from './Log';

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/logs`)
            .then((res) => { setLogs(res.data) })
            .catch((error) => console.error(error))
    }, [])

    return (
        <div className='logs'>
            <section>
                <table>
                    <td>
                        {logs.map((log, index) => {
                            return (
                                <div >
                                    <Log key={log.title} index={index} log={log} />
                                </div>
                            )
                        })}
                    </td>
                </table>
            </section>
        </div>
    )
}
