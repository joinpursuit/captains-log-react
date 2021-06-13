import LogEditForm from "../Components/LogEditForm"

const Edit = ({updateLog}) => {
    return (
        <section>
            <LogEditForm updateLog={updateLog}/>
        </section>
    )
}

export default Edit