import React from "react";
import NewLog from "../Components/NewLog";
import { Link } from "react-router-dom";

function New() {
    return (
        <>
            <div>
                <h2>New Log</h2>
                <NewLog />
            </div>
            <div>
                <Link to ={"/logs"}>
                    <button>Cancel</button>
                </Link>
            </div>
        </>
    );
}

export default New;