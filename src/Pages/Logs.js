import Logsfilter from '../Components/Logsfilter'


 function Logs({logs}) {
    return (
        <div>
            <h2>Index</h2>
           <Logsfilter logs={logs}/>
          
        </div>
    )
}
export default Logs