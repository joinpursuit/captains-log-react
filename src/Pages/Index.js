import Logs from "../Components/Logs";

const Index = ({logs}) => {
    return (
        <main>
            <h1>Index</h1>
            <Logs logs={logs}/>
        </main>
    )
}

export default Index;