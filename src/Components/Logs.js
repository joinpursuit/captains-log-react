import Log from "./Log"

export default function Logs(props) {
    const { logs } = props;
    return (
        <div className="Logs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Post</th>
                            <th>Last time Tested</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return <Log key={index} log={log} index={index}/>
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}
