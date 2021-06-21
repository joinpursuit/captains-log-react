import Logs from '../Components/Logs'

export default function Show({logs}) {
    return (
        <div>
            <h2>Index</h2>
            <Logs logs={logs}/>
        </div>
    )
}
