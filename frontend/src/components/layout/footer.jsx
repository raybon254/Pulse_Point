import { Container, Row, Col } from "react-bootstrap";
import "./footer.css"; 

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main py-5">
        <Container>
          <Row className="gy-4 align-items-start">
            <Col md={6}>
              <h4 className="footer-brand">Pulse Point</h4>
              <p className="footer-description">
                Your trusted guide for well-being, offering resources and tools to help you monitor your health, manage stress, and find balance in everyday life.
                Our mission is to connect you with the support and knowledge you need to thrive — one heartbeat at a time.
              </p>
            </Col>
            <Col md={3}>
              <h5 className="footer-title">Support & Resources</h5>
              <ul className="footer-links">
                <li>➤ Mental Health Tips</li>
                <li>➤ Stress Management Guides</li>
                <li>➤ Pressure Release Exercises</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="footer-title">Connect With Us</h5>
              <div className="footer-social">
                <span className="social-icon">🌿</span>
                <span className="social-icon">💭</span>
                <span className="social-icon">☁️</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom py-3 text-center">
        <Container>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Pulse Point</p>
          <p className="footer-tagline">"From Stress to Strength, One Pulse at a Time. ☁️"</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;