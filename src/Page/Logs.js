import Log from "../components/Log";

function Logs({ logs }) {

    return (
        <ol>
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
        </ol>
    );
};

export default Logs;
