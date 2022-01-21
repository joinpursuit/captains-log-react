import axios from "axios";
import { useState,  useEffect } from "react";
import {Link, useParams, useNavigate} from "react-router-dom"

function LogDetails () {
    const [log, setLog] = useState([]);
    let {index} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
            .then((res)=> {
                // console.log(res.data)
                setLog(res.data)
            }).catch(() => {
                navigate("/not-found")
            })
    }, [index])

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res) => {
            navigate("/logs")
        }).catch((err)=> {
            throw err
        })
    }
    return (
        <article className="article">
            <h3>{log.title} - By {log.captainName}</h3>
            <h5>{log.post}</h5>
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
            <div>
                <Link to={`/logs`}>
                    <button>Back</button>
                </Link>
                <Link to={`/logs/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </article>
    )
}

export default LogDetails;