const Log = ({log, index}) => {
    return (
        <div className="Log">
            <a href={`/logs/${index}`} >{log.title}</a>
        </div>
    )
}

export default Log;