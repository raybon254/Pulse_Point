import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container fluid className="space-between">
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          Pulse Point
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto fw-bold">
            <Nav.Link as={NavLink} to="/" className="nav-hover">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/features" className="nav-hover">
              Features
            </Nav.Link>
            <Nav.Link as={NavLink} to="/how-it-works" className="nav-hover">
              How It Works
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-hover">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-hover">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register" className="nav-hover">
              Register
            </Nav.Link>
          </Nav>
          <Button
            style={{ backgroundColor: "#707B7C", color: "white", border: "none" }}
            className="r3 fw-bold fs-6 px-4 py-2 signup-btn"
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
