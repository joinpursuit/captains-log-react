import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter } from "react-router-dom"


 function Logsapi(props) {
    const {deletelogs} = props

    const [logs, setLogs] = useState([])
    let {index} = useParams() 
    let history = useHistory()


    useEffect(()=>{} ,[])
    const handleDelete = () => {};

    return (  
        <article>
            
           <div className="showButton">
                <div>
                    <Link to={`/logs`}> 
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/logs/${index}/edit`}> 
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                <button onClick={handleDelete}>Delete</button>
                </div>
           </div> 
           <div className="info">
            <strong>{logs.captainName}</strong>
                <h3>
                    {logs.title}
                </h3>
                <h4>
                    {logs.post}
                </h4>  
                <p>
                {logs.daysSinceLastCrisis}
                </p> 
                <h3>Aqui debe ir la informacion que le sigue</h3>
           </div>
        </article>
        
    )
}

export default withRouter(Logsapi)