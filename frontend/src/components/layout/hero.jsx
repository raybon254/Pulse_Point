import { Container, Row, Col, Card } from "react-bootstrap";

function Hero() {
  return (
    <section style={{ 
      background: "linear-gradient(135deg, #EAF4F4 0%, #F0F4FF 50%, #FAF3E0 100%)", 
      padding: "100px 0 80px",
      position: "relative",
      overflow: "hidden"
    }}>
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
        background: "linear-gradient(135deg, rgba(163, 177, 138, 0.1) 0%, rgba(227, 151, 116, 0.2) 100%)",
        zIndex: "0",
      }}></div>
      
      <Container style={{ position: "relative", zIndex: "1" }}>
        <Row className="align-items-center">
          <Col md={6} style={{ paddingRight: "40px" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              fontSize: "3.2rem",
              lineHeight: "1.2",
              color: "#1D3557",
              marginBottom: "24px",
              textShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}>
              Find Your Calm, Every Day
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.25rem",
              color: "rgba(29, 53, 87, 0.8)",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}>
              CalmQuest blends wellness tools, community, and AI-powered insights
              to help you stay mindful and connected.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <button style={{
                backgroundColor: "#A3B18A",
                color: "white",
                border: "none",
                borderRadius: "30px",
                padding: "14px 32px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(163, 177, 138, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#919f76";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px rgba(163, 177, 138, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#A3B18A";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(163, 177, 138, 0.3)";
              }}>
                Get Started
              </button>
              <button style={{
                backgroundColor: "transparent",
                color: "#1D3557",
                border: "2px solid rgba(29, 53, 87, 0.3)",
                borderRadius: "30px",
                padding: "14px 32px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "rgba(29, 53, 87, 0.05)";
                e.target.style.borderColor = "rgba(29, 53, 87, 0.5)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "rgba(29, 53, 87, 0.3)";
                e.target.style.transform = "translateY(0)";
              }}>
                Learn More
              </button>
            </div>
          </Col>
          <Col md={6} style={{ paddingLeft: "40px" }}>
            <Card style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
              border: "none",
              transform: "perspective(1000px) rotateY(-5deg)",
              transition: "transform 0.5s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg)";
            }}>
              <div style={{
                height: "380px",
                background: "linear-gradient(135deg, #EAF4F4 0%, #DAD7CD 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1D3557",
                fontSize: "1.2rem",
                fontWeight: "500"
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌿</div>
                  <div>App Preview</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;