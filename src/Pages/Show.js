import LogDetails from '../Components/LogDetails'

const Show = ({ deletedLog }) => {
    return (
        <div>
            <h2>Show</h2>
            <LogDetails deletedLog={deletedLog} />
        </div>
    )
}

export default Show;