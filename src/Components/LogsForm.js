import { useState } from 'react'


const LogsForm = () => {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [post, setPost] = useState("")
    const [days, setDays] = useState("")

  return (
    <form>
      <h1>New Log</h1>
      <label>
        <b>Captain's Name:</b>
        <input type="text" name="name" />
        <b>Title</b>
        <input type="text" name="title-post" />
        <b>Post:</b>
        <input
          type="text"
          name="post-body"
          placeholder="What happened today?"
        />
        <b>Days Since Last Crisis</b>
        <input type="number" name="day-count" placeholder="0" />
        <b>Mistakes were made today:</b>
        <input type="checkbox" id="accept" name="accept" value="yes" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LogsForm;
