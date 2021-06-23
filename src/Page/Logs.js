import Log from "../components/Log";

function Logs({ logs }) {

    return (
        <div>
            <ul>
                {logs.map((log, i) => 
                    <li>
                        <Log 
                            key={i}
                            index={i}
                            log={log}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Logs;
