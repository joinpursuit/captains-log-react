import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import axios from "axios"

function LogEditForm() {
    let { index } = useParams();
    let navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        daysSinceLastCrisis: 0,
        mistakesWereMadeToday: false,
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    
    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    useEffect(() => {
        axios.get(`${API_URL}/logs/${index}`)
        .then((res) => {
          setLog(res.data);
        }).then((err) => {
          console.log(err)
        })
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.put(`${API_URL}/logs/${index}`, log)
        .then((res) => {
          setLog(res.data)
          navigate(`/logs/${index}`);
        }).catch((err) => {
          console.log(err.response.data);
        })
      };

    return (
        <div>
            <h2>Edit</h2>
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
            <Button as={Link} to={`/logs/${index}`} variant="secondary">Back</Button>

            {/* <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Captain's Name</Form.Label>
                    <Form.Control
                        id="captainName"
                        value={log.captainName}
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Name..."
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        id="title"
                        value={log.title}
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Title..."
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="post">Post</Form.Label>
                    <Form.Control
                        // type="input"
                        as="textarea"
                        id="post"
                        value={log.post}
                        onChange={handleTextChange}
                        placeholder="What happened today?"
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Days Since Last Crisis</Form.Label>
                    <Form.Control
                        id="daysSinceLastCrisis"
                        value={log.daysSinceLastCrisis}
                        onChange={handleTextChange}
                        type="number"
                        placeholder="Input number..."
                    />
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
            </Form> */}
        </div>
    )
}

export default LogEditForm;