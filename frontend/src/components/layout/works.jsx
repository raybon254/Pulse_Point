import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLightbulb, FaComments, FaHeart } from "react-icons/fa";

function Work() {
  return (
    <section style={{ 
      background: "linear-gradient(135deg, #F8F9FA 0%, #EAF4F4 100%)", 
      padding: "100px 0",
      position: "relative"
    }} id="how-it-works">
      <Container>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: "700",
          fontSize: "2.8rem",
          textAlign: "center",
          marginBottom: "60px",
          color: "#1D3557",
          textShadow: "0 2px 4px rgba(0,0,0,0.05)",
          position: "relative"
        }}>
          How It Works
          <div style={{
            content: "''",
            display: "block",
            width: "80px",
            height: "4px",
            background: "linear-gradient(to right, #5C9EAD, #E39774)",
            margin: "20px auto 0",
            borderRadius: "2px",
          }}></div>
        </h2>
        <Row>
          {[
            {
              icon: <FaLightbulb size={40} />,
              title: "Daily Insights",
              text: "Receive thought-provoking questions and reflections each day.",
              color: "#FFD166"
            },
            {
              icon: <FaComments size={40} />,
              title: "Interactive Chats",
              text: "Engage in real-time with our AI or community for deeper insights.",
              color: "#5C9EAD"
            },
            {
              icon: <FaHeart size={40} />,
              title: "Emotional Support",
              text: "Stay connected and feel supported through every step.",
              color: "#E39774"
            },
          ].map((item, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card className="text-center border-0 h-100" style={{
                borderRadius: "20px",
                background: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                overflow: "hidden"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
              }}>
                <Card.Body style={{ padding: "40px 30px" }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 25px",
                    color: "white",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}>
                    {item.icon}
                  </div>
                  <Card.Title style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    color: "#1D3557",
                    marginBottom: "15px"
                  }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.05rem",
                    color: "rgba(29, 53, 87, 0.8)",
                    lineHeight: "1.6"
                  }}>
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Work;