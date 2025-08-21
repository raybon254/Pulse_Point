import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Cardinterface from "./card";
import creativity from "../../assets/creativity.jpg";
import entertainment2 from "../../assets/entertainment2.jpeg";
import fun from "../../assets/fun.jpg";
import general from "../../assets/general.jpeg";
import sports from "../../assets/sports.jpg";
import "./category.css";

function Categories() {
  const SidebarCard = ({ src, label, onClick }) => (
    <Card className="mb-4 shadow-sm hover-card text-center border-0"  style={{ cursor: "pointer", borderRadius: "12px",background: "#f9f9f9",transition: "transform 0.2s ease, box-shadow 0.2s ease" }} onClick={onClick} >
      <Card.Body className="d-flex flex-column align-items-center">
        <Image src={src} alt={label} fluid rounded style={{  width: "200px", height: "100px", objectFit: "cover" }} className="mb-2"/>
        <span className="fw-bold" style={{ fontSize: "1.2rem", color: "#2c3e50" }}>{label}</span>
      </Card.Body>
    </Card>
  );

  return (
    <Container fluid className="">
      <Row>
        {/* Left Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3 " style={{ background: "linear-gradient(180deg, #2c3e50, #34495e)" }}>
          <SidebarCard src={general} label="General Knowledge" onClick={() => console.log("General clicked")} />
          <SidebarCard src={entertainment2} label="Entertainment & Media" onClick={() => console.log("Entertainment clicked")} />
          <SidebarCard src={sports} label="Sports & Lifestyle" onClick={() => console.log("Sports clicked")} />
        </Col>

        {/* Center Content */}
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-center p-4" style={{ background: "#ecf0f1" }} >
          <Card className="shadow-lg border-0" style={{ width: "100%", maxWidth: "1020px", minHeight: "500px", borderRadius: "16px", background: "#ffffff"}} >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Cardinterface />
            </Card.Body>
          </Card>
        </Col>

        {/* Right Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3" style={{ background: "linear-gradient(180deg, #2c3e50, #34495e)" }}>
          <SidebarCard src={creativity} label="Mind & Creativity" onClick={() => console.log("Creativity clicked")} />
          <SidebarCard src={fun} label="Fun & Theme" onClick={() => console.log("Fun clicked")} />
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
