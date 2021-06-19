import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import {apiURL} from "../util/apiURL"

const API_BASE = apiURL()
 function Logsapi(props) {
    const {deletebook} = props

    const [logs, setLogs] = useState([])
    let {index} = useParams() 
    let history = useHistory()


    useEffect(()=>{
        axios.get(`${API_BASE}/logs/${index}`).then((res)=>{
        const {data} = res
        setLogs(data)
       }).catch((e)=>{
           history.push("/not-found")
       })
    } ,[index, history])
    
    const handleDelete = () => {
        deletebook(index);
        history.push("/logs");
    };

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
               <div>
                 <h3>{logs.captainName ? logs.captainName : ( <h4>Date: {logs.date}</h4>)}</h3>
               <div>
                <h4>{logs.captainName ? logs.captainName : ( <h4>Taxes % {logs.taxes}</h4>)}</h4>
                <h4>{logs.title ? logs.title : ( <h4>Retirement $ {logs.retirement}</h4>)}</h4>
                <h4>{logs.post ? logs.post : ( <h4>Save $ {logs.save}</h4>)}</h4>  
                <h4>
                {logs.daysSinceLastCrisis ? logs.daysSinceLastCrisis : null}
                </h4> 
                <p>{logs.creditcard ? ( <h4>CreditCard $ {logs.creditcard}</h4>)  : null}</p>
                <p>{logs.market ? ( <h4>Market $ {logs.market}</h4>)  : null}</p>
                <p>{logs.internet? ( <h4>Internet $ {logs.internet}</h4>)  : null}</p>
                <p>{logs.pet ? ( <h4>Pet $ {logs.pet}</h4>)  : null}</p>
                <p>{logs.car ? ( <h4>Car $ {logs.car}</h4>)  : null}</p>
                <p>{logs.insurrance ? ( <h4>Insurrance $ {logs.insurrance}</h4>)  : null}</p>    
                <p>{logs.additional ? ( <h4>Additional $ {logs.additional}</h4>)  : null}</p>   
               </div>
               </div>
               
                
           </div>
        </article>
        
    )
}

export default withRouter(Logsapi)