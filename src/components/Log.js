function Log({ log, index }) {
    return (
        <>
            <h2>Captain Name: {log.captainName}</h2>
            <h3>Title of Post: <a href={`/logs/${index}`}>{log.title}</a></h3>
        </>
    );
};

export default Log;
