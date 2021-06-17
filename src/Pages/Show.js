import { useState } from "react";
import { useParams } from "react-router-dom";
import LogDetails from "../Components/LogDetails";

import React from 'react'

function Show(props) {
    const {logs, deleteLog} = props;
    let { index } = useParams();
    const [log] = useState(logs[index]);
    return (
        <div className="Show">
            <h2>Show</h2>
            <section>
                <LogDetails 
                    log = {log}
                    index = {index}
                    deleteLog = {deleteLog}
                />
            </section>
        </div>
    );
};

export default Show;