import LogEditForm from "../Components/LogEditForm";
import { Link } from "react-router-dom";

function Edit() {
  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <LogEditForm />
      <Link to="/logs">Back</Link>
    </div>
  );
}

export default Edit;
