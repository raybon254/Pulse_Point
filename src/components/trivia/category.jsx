import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Cardinterface from "./card";
import creativity from "../../assets/creativity.jpg";
import entertainment2 from "../../assets/entertainment2.jpeg";
import fun from "../../assets/fun.jpg";
import general from "../../assets/general.jpeg";
import sports from "../../assets/sports.jpg";

function Categories() {
  return (
    <Container fluid className="my-4">
      <Row>
        {/* Left Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-start p-2" style={{background : "#344747ff"}}>
          <Container className="d-flex flex-column align-items-center mb-3">
            <Image src={general} alt="Upload Error" fluid rounded style={{ width: "100px", height: "auto" }} className="mb-2"/>
            <span className="ms-2 fw-bold">General Knowledge</span>
          </Container>

          <Container className="d-flex flex-column align-items-center mb-3">
            <Image src={entertainment2} alt="Upload Error" fluid rounded style={{ width: "100px", height: "auto" }} className="mb-2"/>
            <span className="ms-2 fw-bold">Entertainment & Media</span>
          </Container>

          <Container className="d-flex flex-column align-items-center mb-3">
            <Image src={sports} alt="Upload Error" fluid rounded style={{ width: "100px", height: "auto" }} className="mb-2"/>
            <span className="ms-2 fw-bold">Sports & Lifestyle</span>
          </Container>
        </Col>

        {/* Center Content */}
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-center bg-white">
          <Cardinterface />
        </Col>

        {/* Right Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-start p-3" style={{background : "#344747ff"}}>
          <Container className="d-flex flex-column align-items-center mb-3">
            <Image src={creativity} alt="Upload Error" fluid rounded style={{ width: "100px", height: "auto" }} className="mb-2"/>
            <span className="ms-2 fw-bold">Mind & Creativity</span>
          </Container>

          <Container className="d-flex flex-column align-items-center mb-3">
            <Image src={fun} alt="Upload Error" fluid rounded style={{ width: "100px", height: "auto" }} className="mb-2"/>
            <span className="ms-2 fw-bold">Fun & Theme</span>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
