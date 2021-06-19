import Log from './Log'

const Logs = ({ logs } ) => {
    return(
        <section>
             <h2>Index</h2>
            <ul>
            <li>
            {logs.map((log, index) => {
                return  <h3><Log key={ index } log={log} index={index}  /></h3>
            })}
            </li>
            </ul>
        </section>
    )
}

export default Logs