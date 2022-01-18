import {Link, useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

const URL = process.env.REACT_APP_URL

const LogsDetails = () => {
    const {index} = useParams()

    const navigate = useNavigate()

    const [log , setLog] = useState({})

    useEffect(()=>{
        async function FetchData(){
            const {data} = await axios.get(`${URL}/logs/${index}`)
            setLog(data)
        }
        FetchData()
    }, [])

    const handleDelete = () => {
        axios
        .delete(`${URL}/logs/${index}`)
        .then(()=> navigate("/logs"))
    }

    return (
        <div>
           <h1>Show</h1>
            <h2>{log.title} - By {log.captainName}</h2>
            <p>{log.post}</p>
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
            <Link to={`/logs`}>Back</Link>
            <Link to={`/logs/${index}/edit`}>Edit</Link>
            <Link to={`/logs`}>
                <button onClick={handleDelete} >Delete</button>
            </Link>
        </div>
        
    )
}

export default LogsDetails