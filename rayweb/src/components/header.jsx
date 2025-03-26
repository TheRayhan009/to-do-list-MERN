import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
export default function App() {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">To-DO-List</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
