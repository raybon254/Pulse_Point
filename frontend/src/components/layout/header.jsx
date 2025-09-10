import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar 
      expand="lg" 
      sticky="top" 
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08)",
        padding: "0.5rem 1rem",
        transition: "all 0.3s ease"
      }}
    >
      <Container fluid>
        <Navbar.Brand 
          as={NavLink} 
          to="/" 
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            fontSize: "1.8rem",
            color: "#326789",
            display: "flex",
            alignItems: "center",
            transition: "all 0.3s ease",
            textDecoration: "none"
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#5C9EAD";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#326789";
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>🌿</span> 
          Pulse Point
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="main-navbar" 
          style={{
            border: "none",
            padding: "0.25rem",
            fontSize: "1.25rem"
          }}
        >
          <span style={{
            display: "block",
            width: "25px",
            height: "2px",
            backgroundColor: "#326789",
            margin: "6px 0",
            transition: "0.3s"
          }}></span>
          <span style={{
            display: "block",
            width: "25px",
            height: "2px",
            backgroundColor: "#326789",
            margin: "6px 0",
            transition: "0.3s"
          }}></span>
          <span style={{
            display: "block",
            width: "25px",
            height: "2px",
            backgroundColor: "#326789",
            margin: "6px 0",
            transition: "0.3s"
          }}></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto" style={{ marginLeft: "2rem" }}>
            <Nav.Link 
              as={NavLink} 
              to="/" 
              style={{
                fontWeight: "500",
                color: "#2C3E50",
                margin: "0 1rem",
                padding: "0.5rem 0",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#5C9EAD";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#2C3E50";
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about" 
              style={{
                fontWeight: "500",
                color: "#2C3E50",
                margin: "0 1rem",
                padding: "0.5rem 0",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#5C9EAD";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#2C3E50";
              }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              style={{
                fontWeight: "500",
                color: "#2C3E50",
                margin: "0 1rem",
                padding: "0.5rem 0",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#5C9EAD";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#2C3E50";
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="#register" 
              style={{
                fontWeight: "500",
                color: "#2C3E50",
                margin: "0 1rem",
                padding: "0.5rem 0",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#5C9EAD";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#2C3E50";
              }}
            >
              Register
            </Nav.Link>
          </Nav>
          <Button 
            style={{
              backgroundColor: "#E39774",
              color: "white",
              border: "none",
              borderRadius: "30px",
              padding: "0.5rem 1.5rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(227, 151, 116, 0.3)"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#6a8064ff";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 16px rgba(227, 151, 116, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#6a8064ff";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(227, 151, 116, 0.3)";
            }}
          >
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;