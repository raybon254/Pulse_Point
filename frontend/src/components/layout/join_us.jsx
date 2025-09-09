import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Trivia from "../../pages/triviapage";

function CallToAction() {
  return (
    <section style={{ backgroundColor: "#4b3f72", color: "#fff", padding: "80px 0" }}>
      <Container className="text-center">
        <h2 className="fw-bold mb-4">Start Your CalmQuest Journey Today</h2>
        <p className="mb-4">
          Join a supportive community and explore AI-powered tools for your mind and heart.
        </p>
        <Button as={NavLink} to="/trivia" variant="light" size="lg" className="fw-bold">
            Get Started
        </Button>
      </Container>
    </section>
  );
}

export default CallToAction;
