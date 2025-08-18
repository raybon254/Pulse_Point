import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"; 

function Footer() {
  return (
    <footer className="bottom">
      <div className="py-4 bg-light shadow-sm">
        <Container>
          <Row className="gy-4">
            <Col md={6}>
              <p>
                <span className="fw-bold">Pulse Point</span> is your trusted guide for well-being, offering resources and tools to help you monitor your health, manage stress, and find balance in everyday life.
                 Our mission is to connect you with the support and knowledge you need to thrive — one heartbeat at a time.
              </p>
            </Col>
            <Col md={6}>
              <h5 className="fw-bold">Support & Resources</h5>
              <p>➤ Mental Health Tips</p>
              <p>➤ Stress Management Guides</p>
              <p>➤ Pressure Release Exercises</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-3 text-center text-white footer-bottom">
        <p className="mb-1">&copy; {new Date().getFullYear()} Pulse Point</p>
        <p className="fw-bold mb-0">"From Stress to Strength, One Pulse at a Time. ☁️"</p>
      </div>
    </footer>
  );
}

export default Footer;
