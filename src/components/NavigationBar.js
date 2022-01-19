import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/logs">Captain's Log</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/logs/new">New Log</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar;