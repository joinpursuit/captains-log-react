import { useState } from "react";
import { useHistory } from "react-router-dom";

const New = () => {

    const [log, setLog] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: 0
    });

    const handleChange = () => {
      
    }
    
    return (
      <div>
        <h1>Add Log</h1>
        <form>
          <label htmlFor="captainName">Captain's Name</label>
          <input type="text" id="captainName" value={captainName} />
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" />
          <label htmlFor="post">Post:</label>
          <input type="text" id="post" />
          <label htmlFor="mistakes">Mistakes Were MAde Today:</label>
          <input type="text" id="mistakes" />
          <label htmlFor="lastCrisis">Days Since Last Crisis:</label>
          <input type="number" id="lastCrisis" />
        </form>
      </div>
    );
  


};

export default New;
