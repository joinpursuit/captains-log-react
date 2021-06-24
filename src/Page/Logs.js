import Log from "../components/Log";

function Logs({ logs }) {

    return (
        <div>
            <h1>Captain's Logs</h1>
            {logs.map((log, i) => {
                return (
                    <li key={i}>
                        <Log 
                            index={i}
                            log={log}
                        />
                    </li>
                );
            })};
        </div>
    );
};

export default Logs;
