import React, { Component } from "react";

export class NewLog extends Component {
  render() {
    return (
      <div>
        <h1>Captain's Log</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Captain's Name
            <input id="captainName" type="text"></input>
          </label>
          <label>
            Title
            <input id="title" type="text"></input>
          </label>
          <label>Post</label>
          <textarea id="post"></textarea>

          <label>
            Mistakes were made today
            <input id="mistakesWereMadeToday" type="checkbox"></input>
          </label>
          <label>
            Days Since Last Crisis
            <input id="daysSinceLastCrisis" type="number"></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewLog;
