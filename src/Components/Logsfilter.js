import LogMap from "./LogMap.js"

export default function Logsfilter({logs}) {
    return (
        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Information</th>
                            <th>See this Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((logmap, index)=>{
                        return <LogMap key={index} logmap={logmap} index={index}/>
                        })}
                    </tbody>
                </table>
            </section> 
        </div>
    )
}
