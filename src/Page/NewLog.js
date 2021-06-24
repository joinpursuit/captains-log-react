import NewForm from "../components/NewForm";

function NewLog({ addLog }) {
    return (
        <div>
            <h2>Fill out form</h2>
            <NewForm addLog={addLog} />
        </div>
    );
};

export default NewLog;
