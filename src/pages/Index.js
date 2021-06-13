import Logs from '../components/Logs'

const Index = ({ logs }) => {
    return (
        <div>
            <h1>Captain's Log</h1>
            <h2>Index</h2>
            <Logs logs={logs} />
        </div>
    )
}

export default Index
