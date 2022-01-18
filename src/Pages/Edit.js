import React from "react";
import LogEdit from "../Components/LogEdit";
import { Link, useParams } from "react-router-dom";

function Edit() {
    let { index } = useParams();
    return (
        <>
            <div>
                <h2>Edit</h2>
                <LogEdit />
            </div>
            <div>
                <Link to={`/logs/${index}`}>
                    <button>Back</button>
                </Link>
            </div>
        </>
    );
}

export default Edit;