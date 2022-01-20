import Logs from "../components/Logs.js"

export default function LogsIndex({logs}) {
    return (
        <div>
            <h2>Index</h2>
            <Logs logs={logs}/>
        </div>
    )
}