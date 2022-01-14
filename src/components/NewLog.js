import "./NewLog.css";
const NewLog = () => {
  return (
    <div className="newLog">
      <h1>New</h1>
      <form>
        <label for="capName">
          Captain's Name:
          <br />
        </label>
        <input type="text" name="capName"></input>
        <label for="title">
          <br />
          Title
          <br />
        </label>
        <input type="text" name="title"></input>
        <label for="post">
          <br />
          Post
          <br />
        </label>
        <input
          type="text"
          name="post"
          placeholder="What Happened Today?"
        ></input>
        <label for="lastCrisis">
          <br />
          Days Since Last Crisis
          <br />
        </label>
        <input type="number" name="lastCrisis"></input>
        <label for="mistakes">
          <br />
          Mistakes were made today:
          <br />
        </label>
        <input type="checkbox" name="mistakes"></input>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default NewLog;
