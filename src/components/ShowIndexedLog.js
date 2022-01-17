import DetailedLog from "./DetailedLog";

function ShowIndexedLog({index}){

    return(
        <div className="Show-log">
            <DetailedLog index={index}/>
        </div>
    );
}
export default ShowIndexedLog