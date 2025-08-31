import { useState } from "react";
import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap"; 
import Cardinterface from "./card";
import creativity from "../../assets/creativity.jpg";
import entertainment2 from "../../assets/entertainment2.jpeg";
import fun from "../../assets/fun.jpg";
import general from "../../assets/general.jpeg";
import sports from "../../assets/sports.jpg";
import "./category.css";


const categories = {
  general: ["General Knowledge", "Geography", "History", "Science", "Mathematics"],
  entertainment: ["Movies", "TV Shows", "Music", "Video Games", "Art & Literature", "Celebrities & Pop Culture"],
  sports: ["Football", "Health & Fitness", "Travel & Places", "Fashion & Lifestyle"],
  fun: ["Animals & Wildlife", "Environment & Sustainability", "Holidays & Festivals", "Business & Economy", "Medicine & Health", "Social Media Trends", "Mythology & Legends", "Random Fun Facts"],
  creativity: ["Riddles & Puzzles", "Technology & Innovation", "Mental Health & Wellness", "Adventure & Exploration", "Space & Astronomy"],
};

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const SidebarCard = ({ src, label, onClick }) => (
    <Card
      className="mb-4 shadow-sm hover-card text-center border-0"
      style={{ cursor: "pointer", borderRadius: "12px", background: "#f9f9f9", transition: "transform 0.2s ease, box-shadow 0.2s ease" }} onClick={onClick}>
      <Card.Body className="d-flex flex-column align-items-center">
        <Image src={src} alt={label} fluid rounded style={{ width: "200px", height: "100px", objectFit: "cover" }} className="mb-2"/>
        <span className="fw-bold" style={{ fontSize: "1.2rem", color: "#2c3e50" }}>
          {label}
        </span>
      </Card.Body>
    </Card>
  );

  const renderCenterContent = () => {
    if (!selectedCategory && !selectedItem) {
      return <Cardinterface />;
    }
    if (selectedItem) {
      return (
        <div className="text-center">
          <h3 className="fw-bold">{selectedItem}</h3>
          <p className="text-muted">You selected: {selectedItem}</p>
        </div>
      );
    }
    if (selectedCategory) {
      return (
        <div>
          <h3 className="fw-bold text-center mb-3">
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Topics
          </h3>
          <ListGroup>
            {categories[selectedCategory].map((item, idx) => (
              <ListGroup.Item key={idx} action style={{ cursor: "pointer" }} onClick={() => setSelectedItem(item)}> 
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      );
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Left Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3" style={{ background: "linear-gradient(180deg, #2c3e50, #34495e)" }} >
          <SidebarCard src={general} label="General Knowledge" onClick={() => setSelectedCategory("general")} />
          <SidebarCard src={entertainment2} label="Entertainment & Media" onClick={() => setSelectedCategory("entertainment")} />
          <SidebarCard src={sports} label="Sports & Lifestyle" onClick={() => setSelectedCategory("sports")} />
        </Col>

        {/* Center Content */}
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-center p-4" style={{ background: "#ecf0f1"  }}  >
          <Card className="shadow-lg border-0 p-3" style={{ width: "100%", maxWidth: "1020px", minHeight: "500px", borderRadius: "16px", background: "#ffffff" }} >
            <Card.Title className="trivia-header text-center fw-bold p-3">
              <span className="highlight3">
                🎯 <span className="fw-bolder fs-2 highlight">W</span>elcome to Trivia
              </span>{" "}
              <span className="highlight2">Challenge!</span>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center align-items-center">
              {renderCenterContent()}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Sidebar */}
        <Col xs={12} md={2} className="d-flex flex-column align-items-stretch p-3" style={{ background: "linear-gradient(180deg, #2c3e50, #34495e)" }} >
          <SidebarCard src={creativity} label="Mind & Creativity" onClick={() => setSelectedCategory("creativity")} />
          <SidebarCard src={fun} label="Fun & Theme" onClick={() => setSelectedCategory("fun")} />
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
