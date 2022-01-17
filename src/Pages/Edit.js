import LogEditForm from "../components/LogEditForm";

function Edit() {
    return (
      <div className="Edit">
        <h2>
            This page will point to: LogsEdit component. 
            This is an edit form pre-filled with the info of an individual log to edit.
        </h2>
        <LogEditForm />
      </div>
    );
  }
  
  export default Edit;