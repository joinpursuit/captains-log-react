import Log from "./Log"

const Logs = ({ logs }) => {
    return (
    <ul>
        {logs.map((log, index) => {
            return <Log key={index} log={log} index={index} />
        })}
    </ul>
    )
}

export default Logs;