import axios from "axios"
import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'

const URL = process.env.REACT_APP_URL
console.log(URL)

const Logs = () => {
    const [logs, useLogs] = useState([])

    useEffect(()=>{
        async function FetchData(){
            const {data} = await axios.get(`${URL}/logs`)
            console.log(data)
            useLogs(data)
        }
        FetchData()
    }, [])
    return (
        <div>
            {logs.map((log, i)=> <Link key={i} to={`/logs/${i}`}>{log.title}</Link>)}
        </div>
    )
}

export default Logs