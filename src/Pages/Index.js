import Logs from "../Components/Logs";

const Index = ({logs}) => {
    return (
        <section>
            <h1>Index</h1>
            <Logs logs={logs}/>
        </section>
    )
}

export default Index;