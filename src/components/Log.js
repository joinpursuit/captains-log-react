import { Link } from 'react-router-dom'

const Log = ({ log, index }) => {
    
    return(
        <section>
         <Link to={`/logs/${index}`}>{log.title}</Link>
        </section>
    )
}


export default Log; 