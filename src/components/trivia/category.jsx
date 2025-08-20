import { Container, Row, Col, Image } from "react-bootstrap";
import { creativity, entertainment, fun, general, sports } from "../assets"; 

function Categories() {
  return (
    <Container fluid className="my-4">
      <Row>
        {/* Left Column */}
        <Col xs={12} md={6}>
          <Container className="d-flex align-items-center mb-3">
            <Image src={general} alt="Upload Error" fluid rounded style={{ width: "50px", height: "auto" }} />
            <span className="ms-2 fw-bold">General Knowledge</span>
          </Container>

          <Container className="d-flex align-items-center mb-3">
            <Image src={entertainment} alt="Upload Error" fluid rounded style={{ width: "50px", height: "auto" }} />
            <span className="ms-2 fw-bold">Entertainment & Media</span>
          </Container>

          <Container className="d-flex align-items-center mb-3">
            <Image src={sports} alt="Upload Error" fluid rounded style={{ width: "50px", height: "auto" }} />
            <span className="ms-2 fw-bold">Sports & Lifestyle</span>
          </Container>
        </Col>

        {/* Right Column */}
        <Col xs={12} md={6}>
          <Container className="d-flex align-items-center mb-3">
            <Image src={creativity} alt="Upload Error" fluid rounded style={{ width: "50px", height: "auto" }} />
            <span className="ms-2 fw-bold">Mind & Creativity</span>
          </Container>

          <Container className="d-flex align-items-center mb-3">
            <Image src={fun} alt="Upload Error" fluid rounded style={{ width: "50px", height: "auto" }} />
            <span className="ms-2 fw-bold">Fun & Theme</span>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
