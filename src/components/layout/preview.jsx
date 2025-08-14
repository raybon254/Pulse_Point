import { Container, Card } from "react-bootstrap";

function Preview() {
  return (
    <section style={{ backgroundColor: "#fdf6f0", padding: "60px 0" }}>
      <Container>
        <Card className="shadow border-0 mx-auto" style={{ maxWidth: "800px" }}>
          <Card.Body>
            <Card.Title className="text-center mb-3">A Glimpse Into CalmQuest</Card.Title>
            <Card.Text>
              Discover how our platform blends interactive experiences with wellness tools to help
              you stay focused, connected, and inspired every day.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default Preview;
