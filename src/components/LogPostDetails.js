import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap"


function LogPostDetails() {
    const [log, setLog] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API_URL}/logs/${index}`)
        .then((res) => {
            setLog(res.data);
        }).catch(("/not-found"));
    }, []);

    const handleDelete = () => {
        axios.delete(`${API_URL}/logs/${index}`)
        .then((res) => {
          navigate("/logs");
        }).catch((err) => {
          console.log(err)
        })
      };

    return (
        <div>
            <h2>Show</h2>
            <Card>
                <Card.Header as="h3">{log.title} - By {log.captainName}</Card.Header>
                <Card.Body>
                    <Card.Title>Log Post</Card.Title>
                    <Card.Text>
                        {log.post}
                    </Card.Text>
                    <Card.Title>Mistakes</Card.Title>
                    <Card.Text>
                    {log.mistakesWereMadeToday ? (
                        <span>❌</span>
                        ) : (
                        <span>&nbsp; &nbsp; &nbsp;</span>
                    )}
                    </Card.Text>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        Days since last crisis: {log.daysSinceLastCrisis}
                    </Card.Text>
                    <Button as={Link} to="/logs" variant="secondary">Back</Button>{' '}
                    <Button as={Link} to={`/logs/${index}/edit`} variant="warning">Edit</Button>{' '}
                    <Button onClick={handleDelete} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LogPostDetails;