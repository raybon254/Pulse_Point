import { Container, Row, Col, Card } from "react-bootstrap";

function Features() {
  return (
    <section style={{ backgroundColor: "#eef7ff", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5">Core Features</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>AI-Generated Trivia</Card.Title>
                <Card.Text>Enjoy unique, intelligent questions tailored to your mood.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Mindfulness Tools</Card.Title>
                <Card.Text>Use meditation, breathing, and journaling features to stay calm.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Community Talk Rooms</Card.Title>
                <Card.Text>Chat with others in supportive and topic-based talk rooms.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
