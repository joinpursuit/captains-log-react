import Log from "./Log"
import { useParams } from "react-router-dom"

const Logs = ({logs}) => {
    const { index } = useParams()


    // const goBack = () => {
    //     history.push("/logs")
    // }

    return (
        <div>
            <h1>Show</h1>
            <h1> Captain's Log</h1>
            <h1> Index</h1>

            <ul>
                {logs.map((log, index) => {
                    return <Log  key={index} title={log.title} index={index}/>
                })}
                <a href="/logs">Back</a>
            </ul>
            <button>Delete</button>
        </div>
    )
}

export default Logs