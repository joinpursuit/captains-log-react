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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Captain's Name</Form.Label>
                    <Form.Control id="captainName" value={log.captainName} onChange={handleTextChange} type="text" placeholder="Name..." />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control id="title" value={log.title} onChange={handleTextChange} type="text" placeholder="Title..." />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="post">Post</Form.Label>
                    <Form.Control id="post" value={log.post} onChange={handleTextChange} type="text" placeholder="What happened today" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Days Since Last Crisis</Form.Label>
                    <Form.Control id="daysSinceLastCrisis" value={log.daysSinceLastCrisis} onChange={handleTextChange} type="number" placeholder="Input number..." />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Mistakes were Made Today</Form.Label>
                    <Form.Check 
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        id="mistakesWereMadeToday"
                        value={log.mistakesWereMadeToday}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewLogForm;
