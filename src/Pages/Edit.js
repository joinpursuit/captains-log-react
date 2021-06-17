import LogEditForm from "../Components/LogEditForm";

export default function Edit(props) {
    const {updateLog, logs} = props;
    return (
        <div className="New Edit">
            <h2>Edit</h2>
            <LogEditForm updateLog={updateLog} logs={logs} />
        </div>
    )
}
