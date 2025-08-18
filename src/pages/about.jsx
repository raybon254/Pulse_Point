import { Card, Container, Row, Col, Image } from "react-bootstrap";
import release from "../assets/release.jpg";
import isolation1 from "../assets/isolation1.jpg";
import mentalnosie1 from "../assets/mentalnoise1.jpg";
import pressure1 from "../assets/pressure1.jpeg"; 
import "./about.css"; 

function About() {
  return (
    <main className="py-4">
      <Container>
        {/* Quotes Row */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="about-header">Dr. Andrew Solomon</Card.Title>
                <Card.Text className="about-text">
                  "The opposite of depression is not happiness, but vitality."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Image src={release} alt="Release" fluid rounded className="about-img" />
          </Col>

          <Col md={4}>
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="about-header">Dr. Stuart Brown</Card.Title>
                <Card.Text className="about-text">
                  "Play is not a luxury, it's a necessity. It's how we recharge,
                  relieve stress and stay resilient."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Issues Row */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="about-card">
              <Card.Header className="about-header">Modern Pressure</Card.Header>
              <Image src={pressure1} alt="Pressure" fluid className="about-img" />
              <Card.Body>
                <Card.Text className="about-text">
                  <p>Real-Time</p>
                  <p>Supportive conversations with counselors or peers</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="about-card">
              <Card.Header className="about-header">Social Isolation</Card.Header>
              <Image src={isolation1} alt="Isolation" fluid className="about-img" />
              <Card.Body>
                <Card.Text className="about-text">
                  <p>Fun</p>
                  <p>Interactive Trivia to boost positivity</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="about-card">
              <Card.Header className="about-header">Constant Mental Noise</Card.Header>
              <Image src={mentalnosie1} alt="Mental Noise" fluid className="about-img" />
              <Card.Body>
                <Card.Text className="about-text">
                  <p>Tools to help:</p>
                  <p>Breath</p>
                  <p>Pause</p>
                  <p>Reflect</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Impact Row */}
        <Row>
          <Col>
            <Card className="about-card">
              <Card.Header className="about-header">Real-World Impact</Card.Header>
              <Card.Body>
                <Card.Text className="about-text">
                  <p>➤ Reduces feelings of isolation</p>
                  <p>➤ Encourages consistent mental wellness check-ins</p>
                  <p>➤ Positive engagement instead of endless doom-scrolling</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;
