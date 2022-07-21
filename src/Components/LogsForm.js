import { useState } from "react";
import { useNavigate  } from "react-router-dom";

const LogsForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [days, setDays] = useState(0);
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const apiURL = process.env.REACT_APP_API;
    const newlogRoute = `${apiURL}logs`;

    fetch(newlogRoute, {
      method: "POST",
      body: JSON.stringify({ captainName: name, title, post, days, checked }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate('/logs')
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Captain's Log</h1>
        <label>Captain's Name:</label>
        <input
          type="text"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="captainName"
        />
        <label>Title</label>
        <input
          type="text"
          name="title-post"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          id="title"
        />
        <label>Post:</label>
        <textarea
          type="text"
          name="post-body"
          placeholder="What happened today?"
          onChange={(event) => {
            setPost(event.target.value);
          }}
          id="post"
        />
        <label>Days Since Last Crisis</label>
        <input
          type="number"
          name="day-count"
          placeholder="0"
          onChange={(event) => {
            setDays(parseInt(event.target.value, 10));
          }}
          id="daysSinceLastCrisis"
        />
        <label>Mistakes were made today:</label>
        <input
          type="checkbox"
          checked={checked}
          name="accept"
          onChange={() => {
            setChecked(!checked);
          }}
          id="mistakesWereMadeToday"
        />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LogsForm;
