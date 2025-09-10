import { Container, Row, Col, Card } from "react-bootstrap";

function Features() {
  return (
    <section 
      id="how-it-works"
      style={{
        background: "linear-gradient(to bottom, #f8f9fa 0%, #eaf4f4 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(92, 158, 173, 0.1) 0%, rgba(161, 198, 234, 0.2) 100%)",
        zIndex: "0",
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "-80px",
        left: "-80px",
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(227, 151, 116, 0.1) 0%, rgba(255, 240, 243, 0.2) 100%)",
        zIndex: "0",
      }}></div>
      
      <Container style={{ position: "relative", zIndex: "1" }}>
        <h2 
          className="text-center mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            fontSize: "2.8rem",
            color: "#1D3557",
            textShadow: "0 2px 4px rgba(0,0,0,0.05)",
            position: "relative",
          }}
        >
          Core Features
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
              title: "AI-Generated Trivia",
              text: "Enjoy unique, intelligent questions tailored to your mood.",
              bg: "#EAF4F4",
              icon: "🧠"
            },
            {
              title: "Mindfulness Tools",
              text: "Use meditation, breathing, and journaling features to stay calm.",
              bg: "#FFF0F3",
              icon: "🧘"
            },
            {
              title: "Community Talk Rooms",
              text: "Chat with others in supportive and topic-based talk rooms.",
              bg: "#F0F4FF",
              icon: "💬"
            },
          ].map((feature, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <Card 
                className="h-100 border-0"
                style={{
                  backgroundColor: feature.bg,
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                }}
              >
                <Card.Body style={{ padding: "35px 30px", textAlign: "center" }}>
                  <div style={{ 
                    fontSize: "3rem", 
                    marginBottom: "20px" 
                  }}>
                    {feature.icon}
                  </div>
                  <Card.Title 
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      color: "#1D3557",
                      marginBottom: "18px",
                      position: "relative",
                      paddingBottom: "12px",
                    }}
                  >
                    {feature.title}
                    <span style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "40px",
                      height: "3px",
                      background: "linear-gradient(to right, #5C9EAD, #E39774)",
                      borderRadius: "3px",
                      transition: "width 0.3s ease",
                    }}></span>
                  </Card.Title>
                  <Card.Text 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.05rem",
                      color: "rgba(29, 53, 87, 0.8)",
                      lineHeight: "1.7",
                    }}
                  >
                    {feature.text}
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

export default Features;