import Log from "./Log"

const Logs = ({logs}) => {

    return (
        <div>
            <h1> Captain's Log</h1>
            <h1> Index</h1>

            <ul>
                {logs.map((log, index) => {
                    return <Log  key={index} title={log.title} index={index}/>
                })}
            </ul>
        </div>
    )
}

export default Logs