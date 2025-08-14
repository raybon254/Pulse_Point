import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLightbulb, FaComments, FaHeart } from "react-icons/fa";

function Work() {
  return (
    <section style={{ backgroundColor: "#f9f5ff", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5">How It Works</h2>
        <Row>
          <Col md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaLightbulb size={40} className="mb-3 text-warning" />
                <Card.Title>Daily Insights</Card.Title>
                <Card.Text>Receive thought-provoking questions and reflections each day.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaComments size={40} className="mb-3 text-info" />
                <Card.Title>Interactive Chats</Card.Title>
                <Card.Text>Engage in real-time with our AI or community for deeper insights.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <FaHeart size={40} className="mb-3 text-danger" />
                <Card.Title>Emotional Support</Card.Title>
                <Card.Text>Stay connected and feel supported through every step.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Work;
