import Logs from "../Components/Logs";

function Index({logs}){
    return(
        <div className="Index">
            <h2>Index</h2>
            <Logs logs={logs}/>
        </div>
    )
}

export default Index;