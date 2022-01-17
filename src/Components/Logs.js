import axios from "axios"
import { useEffect, useState } from "react"

const API = process.env.REACT_APP_API_URL

function Logs() {
    const [ logs, setLogs ] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/logs`)
            .then((res) => {
                console.log(res.data)
                setLogs(res.data)
            })
            .catch((err) => {
                throw err
            })
    }, [])

    return(
        <div className="Logs">
            <section>
                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return <Log />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Logs;