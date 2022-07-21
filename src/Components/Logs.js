import { useEffect, useState } from 'react'
import axios from 'axios'
import Log from './Log'
const API = process.env.REACT_APP_API_URL

function Logs() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios.get(`${API}/logs`).then((res) => {
      setLogs(res.data)
    })
  }, [])
  return (
    <div className='Log'>
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Captain's Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Logs
