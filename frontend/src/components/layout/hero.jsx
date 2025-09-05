import { Container, Row, Col, Card } from "react-bootstrap";

function Hero() {
  return (
    <section style={{ background: "linear-gradient(135deg, #e0f7fa, #f1f8ff)", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">Welcome to CalmQuest / MindSpark</h1>
            <p className="lead mt-3">
              Helping you tackle stress, loneliness, burnout, and loss of focus — all while keeping
              you engaged through meaningful interaction.
            </p>
          </Col>
          <Col md={6}>
            <Card className="shadow border-0">
              <Card.Img src="/images/hero-image.jpg" alt="CalmQuest Preview" />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
