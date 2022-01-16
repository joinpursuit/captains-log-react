export default function Log({log, index}) {
    return(
        <tr className="Log">
            <td>
               {log.mistakesWereMadeToday}
            </td>
            <td>
                {log.captainName}
            </td>
            <td>
                {log.title}
            </td>
        </tr>
    )
}