
const Index = ({logs}) =>{
    return(
        <div>
            <h1>Captain's Log</h1>
           <ul>{logs.map(log=>{
               return <li key={log.title}>
           
          <Link to={`/logs/${log.title}`}> {log.title}</Link></li>
        })} 
          </ul>
        </div>
    )
}

export default Index