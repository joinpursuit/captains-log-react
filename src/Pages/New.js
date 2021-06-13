import LogNewForm from '../Components/LogNew'

const New = ({ addLog }) => {
    return (
        <div>
            <h2>New</h2>
            <LogNewForm addLog={addLog} />
        </div>
    )
}

export default New;