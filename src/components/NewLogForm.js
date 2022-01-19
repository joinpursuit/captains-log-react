import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NewLogForm(){
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    });

    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/logs`, log)
        .then((res) => {
            navigate("/logs");
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <div>
            <h2>New Log</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name</label>
                <br />
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name..."
                />
                <br />
                <label htmlFor="title">Title</label>
                <br />
                <input
                    id="title"
                    type="text"
                    value={log.title}
                    placeholder="Title..."
                    onChange={handleTextChange}
                />
                <br />
                <label htmlFor="post">Post</label>
                <br />
                <textarea
                    id="post"
                    type="textarea"
                    name="post"
                    value={log.post}
                    placeholder="What happened today?..."
                    onChange={handleTextChange}
                />
                <br />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
                <br />
                <input
                    id="daysSinceLastCrisis"
                    name="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Input number of days..."
                />
                <br />
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
                <br />
                <input
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    // checked={log.mistakesWereMadeToday}
                />
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            {/* <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCaptainName">
                    <Form.Label>Captain's Name</Form.Label>
                    <Form.Control 
                        id="captainName"
                        name="captainName"
                        value={log.captainName}
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Name..." 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        id="title"
                        name="title"
                        value={log.title}
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Title..."
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPost">
                    <Form.Label htmlFor="post">Post</Form.Label>
                    <Form.Control
                        // as='input'
                        type="textarea"
                        id="post"
                        name="post"
                        value={log.post}
                        onChange={handleTextChange}
                        placeholder="What happened today"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDaysSinceLastCrisis">
                    <Form.Label>Days Since Last Crisis</Form.Label>
                    <Form.Control
                        id="daysSinceLastCrisis"
                        name="daysSinceLastCrisis"
                        value={log.daysSinceLastCrisis}
                        onChange={handleTextChange}
                        type="number"
                        placeholder="Input number..."
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMistakesWereMadeToday">
                    <Form.Label>Mistakes were Made Today</Form.Label>
                    <Form.Check 
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        id="mistakesWereMadeToday"
                        name="mistakesWereMadeToday"
                        value={log.mistakesWereMadeToday}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
        </div>
    )
}

export default NewLogForm;


{/* <label htmlFor='post'>Post</label>
                    <textarea id='post' name="title" name="post" value={log.post} onChange={handleTextChange} type="text" placeholder="What happened today" /> */}