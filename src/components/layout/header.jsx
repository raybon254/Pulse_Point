import { Navbar, Nav,  Container, Button } from "react-bootstrap";

function NavBar(){
    return (
        < Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand href="home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar">
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="">
                            <Nav.Link href="home"></Nav.Link>
                            <Nav.Link href="#features"></Nav.Link>
                            <Nav.Link href="how-it-works"></Nav.Link>
                            <Nav.Link href="about"></Nav.Link>
                            <Nav.Link href="contact"></Nav.Link>
                            <Nav.Link href="register"></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar.Toggle>
            </Container>
        </Navbar>
    )
}

export default NavBar;