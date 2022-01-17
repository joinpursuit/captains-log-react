import {Link, useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

const URL = process.env.REACT_APP_URL
console.log(URL)

const LogsDetails = () => {
    const {index} = useParams()

    const [log , setLog] = useState({})

    useEffect(()=>{
        async function FetchData(){
            const {data} = await axios.get(`${URL}/logs/${index}`)
            setLog(data)
        }
        FetchData()
    }, [])

    return (
        <div>
           <h1>Show</h1>
            <h2>{log.title} - By {log.captainName}</h2>
            <p>{log.post}</p>
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
            <Link to={`/logs`}>BACK</Link>
            <Link to={`/logs/${index}/edit`}>EDIT</Link>
            <Link to={`/logs`}>DELETE</Link>
        </div>
        
    )
}

export default LogsDetails