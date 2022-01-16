import LogDetails from "../components/LogDetails";

function ShowDetails() {
    return (
      <div className="ShowDetails">
        <h2>
          Show
          {/* To show the details of an individual log, based on its index. */}
        </h2>
        <LogDetails />
      </div>
    );
  }
  
  export default ShowDetails;