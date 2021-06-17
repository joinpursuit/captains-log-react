import LogNewForm from "../Components/LogNewForm";

function New(props) {
    const { addLog } = props;
    return (
        <div className="New">
            <h2>New</h2>
            <LogNewForm addLog={addLog} />
        </div>
    )
}

export default New
