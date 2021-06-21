import Logs from '../Components/Logs'
import LogDetail from '../Components/LogDetail'

export default function Show({logs}) {
    return (
        <div>
            <h2>Index</h2>
            <Logs logs={logs}/>
            <LogDetail/>
        </div>
    )
}
