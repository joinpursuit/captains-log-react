export default function Log({log, index}) {
    return(
        <tr className="Log">
            <td>
               {log.mistakesWereMadeToday ? (<span>💥</span>) : null}
            </td>
            <td>
                {log.captainName}
            </td>
            <td>
                <a href={`${process.env.REACT_APP_API_URL}/logs/${index}`}>
                {log.title}
                </a>
            </td>
        </tr>
    )
}